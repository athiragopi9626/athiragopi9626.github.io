import { useState } from 'react'
import './AWSArchitecture.css'

const details = {
  clients: ['Internet clients', 'Users access the application through the public ALB. The current demo accepts HTTP. The target design uses a validated domain, HTTPS on port 443, and an HTTP-to-HTTPS redirect.'],
  alb: ['Application Load Balancer', 'One regional, internet-facing ALB is associated with public subnets in both Availability Zones. Current listener: HTTP :80. Planned: ACM-backed HTTPS :443, with HTTP :80 redirecting to HTTPS.'],
  publicA: ['Public subnet A', 'One of the two public subnets associated with the internet-facing ALB. Its route table has a route to an internet gateway.'],
  publicB: ['Public subnet B', 'Second public subnet associated with the same regional ALB, in a separate Availability Zone.'],
  ecsA: ['Private ECS task — AZ A', 'ECS Fargate task in a private subnet, serving the application on port 8080. The ALB target group checks /health. The task does not need a public IP.'],
  ecsB: ['Private ECS task — AZ B', 'Second ECS Fargate task in another private subnet. Desired count is two; ECS replaced a stopped task during testing.'],
  endpoints: ['Private AWS service access', 'ECR API and ECR Docker interface endpoints, CloudWatch Logs interface endpoint, and S3 gateway endpoint support image pulls and log delivery without a NAT gateway. Endpoint placement and security groups are important.'],
  ecr: ['Amazon ECR', 'Stores application container images, tagged with immutable commit SHA references. ECS image pulls use private endpoint connectivity.'],
  logs: ['CloudWatch and SNS', 'CloudWatch Logs and metrics provide observability. Five CloudWatch alarms were configured, and an SNS notification was tested.'],
  github: ['GitHub Actions', 'CI/CD workflows use GitHub OIDC federation to assume a scoped AWS IAM role rather than storing long-lived AWS keys.'],
  oidc: ['IAM and OIDC', 'The IAM trust policy should restrict GitHub repository and permitted branch/environment claims. The assumed role receives least-privilege permissions for its deployment duties.'],
  terraform: ['Terraform', 'Terraform provisions VPC networking, ALB, ECS, endpoints, autoscaling, and monitoring. Changes should be reviewed through a plan before apply.'],
  deploy: ['Image build and ECS deployment', 'CI builds a container image, pushes it to ECR, and deploys an ECS task definition referencing the new image.'],
  tls: ['HTTPS and ACM — planned', 'Requires a domain name you control, ACM certificate validation, an ALB HTTPS listener, and HTTP-to-HTTPS redirect. Do not describe this as deployed yet.'],
  waf: ['AWS WAF — proposed', 'Evaluate AWS WAF on the ALB based on application exposure, threat model, cost, and operational requirements. It is not currently deployed.'],
}

function Node({ id, label, meta, status, selected, onSelect }) {
  return (
    <button type="button" className={`aep-node ${selected === id ? 'aep-node--selected' : ''}`} onClick={() => onSelect(id)} aria-pressed={selected === id}>
      <span className="aep-node__title">{label}</span>
      {meta && <span className="aep-node__meta">{meta}</span>}
      {status === 'planned' && <span className="aep-status aep-status--planned">PLANNED</span>}
    </button>
  )
}

export default function AWSArchitecture() {
  const [view, setView] = useState('infra')
  const [selected, setSelected] = useState('alb')
  const chooseView = (next) => { setView(next); setSelected(next === 'infra' ? 'alb' : 'github') }
  const info = details[selected] || details.alb
  const node = (id, label, meta, status) => <Node id={id} label={label} meta={meta} status={status} selected={selected} onSelect={setSelected} />

  return (
    <section className="aep-architecture" aria-label="Interactive AWS architecture">
      <div className="aep-architecture__top">
        <div className="aep-tabs" role="group" aria-label="Architecture view">
          <button type="button" className={view === 'infra' ? 'aep-tab aep-tab--active' : 'aep-tab'} onClick={() => chooseView('infra')}>Infrastructure</button>
          <button type="button" className={view === 'delivery' ? 'aep-tab aep-tab--active' : 'aep-tab'} onClick={() => chooseView('delivery')}>CI/CD &amp; security</button>
        </div>
        <div className="aep-legend"><span><i className="aep-legend__dot" /> Implemented</span><span><i className="aep-legend__dot aep-legend__dot--planned" /> Planned</span></div>
      </div>

      {view === 'infra' ? (
        <div className="aep-canvas">
          <div className="aep-center">{node('clients', 'Internet clients', 'Current: HTTP · Target: HTTPS')}</div>
          <div className="aep-arrow" aria-hidden="true" />
          <div className="aep-vpc">
            <div className="aep-vpc__heading"><strong>AWS VPC · 10.42.0.0/16</strong><span>eu-west-1 · Two Availability Zones</span></div>
            <div className="aep-alb">{node('alb', 'Application Load Balancer', 'One regional ALB · public subnets A + B')}</div>
            <div className="aep-arrow" aria-hidden="true" />
            <div className="aep-az-grid">
              <div className="aep-az"><h4>Availability Zone A</h4><div className="aep-subnet aep-subnet--public"><div className="aep-subnet__label">Public subnet A</div>{node('publicA', 'ALB subnet association', 'Internet gateway route')}</div><div className="aep-arrow" aria-hidden="true" /><div className="aep-subnet aep-subnet--private"><div className="aep-subnet__label">Private subnet A</div>{node('ecsA', 'ECS Fargate task', 'Port 8080 · /health')}</div></div>
              <div className="aep-az"><h4>Availability Zone B</h4><div className="aep-subnet aep-subnet--public"><div className="aep-subnet__label">Public subnet B</div>{node('publicB', 'ALB subnet association', 'Internet gateway route')}</div><div className="aep-arrow" aria-hidden="true" /><div className="aep-subnet aep-subnet--private"><div className="aep-subnet__label">Private subnet B</div>{node('ecsB', 'ECS Fargate task', 'Port 8080 · /health')}</div></div>
            </div>
            <div className="aep-connector-note">ALB forwards traffic to healthy ECS targets in both private subnets.</div>
            <div className="aep-arrow" aria-hidden="true" />
            <div className="aep-endpoints">{node('endpoints', 'Private AWS service connectivity', 'ECR API / DKR · CloudWatch Logs · S3 gateway')}</div>
          </div>
          <div className="aep-support-title">AWS services outside the VPC boundary</div>
          <div className="aep-support-grid">{node('ecr', 'Amazon ECR', 'Container registry')}{node('logs', 'CloudWatch + SNS', 'Logs · metrics · notifications')}</div>
          <p className="aep-footnote">Logical traffic flow, not a packet-level network diagram. The same regional ALB spans two public subnets; it is not deployed twice. Endpoint access supports private ECS operations.</p>
        </div>
      ) : (
        <div className="aep-canvas aep-delivery">
          <div className="aep-center">{node('github', 'GitHub Actions', 'Workflow trigger · build · deploy')}</div>
          <div className="aep-arrow" aria-hidden="true" />
          <div className="aep-center">{node('oidc', 'GitHub OIDC → AWS IAM role', 'Short-lived credentials · scoped trust')}</div>
          <div className="aep-arrow" aria-hidden="true" />
          <div className="aep-delivery-grid">{node('terraform', 'Terraform', 'Plan · review · apply')}{node('deploy', 'ECR → ECS deployment', 'Immutable image tags')}</div>
          <div className="aep-divider" />
          <h4 className="aep-hardening-title">Production hardening roadmap — not yet implemented</h4>
          <div className="aep-delivery-grid">{node('tls', 'HTTPS :443 + ACM', 'Validated domain · HTTP redirect', 'planned')}{node('waf', 'AWS WAF', 'Evaluate managed rules and cost', 'planned')}</div>
          <p className="aep-footnote">OIDC, Terraform and ECS deployment are implemented. HTTPS/ACM, HTTP redirect and WAF remain future changes.</p>
        </div>
      )}

      <div className="aep-detail" aria-live="polite"><span className="aep-detail__eyebrow">SELECT A COMPONENT TO EXPLORE</span><h3>{info[0]}</h3><p>{info[1]}</p></div>
    </section>
  )
}
