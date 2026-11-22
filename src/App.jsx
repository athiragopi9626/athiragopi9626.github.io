import AWSArchitecture from './components/AWSArchitecture'
import { useEffect, useState } from 'react'

import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Cloud,
  ShieldCheck,
  Workflow,
  Sparkles,
  ChevronDown,
  Code2,
  ArrowLeft,
  ExternalLink,
  Award,
  BrainCircuit,
  Layers3,
} from 'lucide-react'
const projects = [
  {
    number: '01',
    title: 'AWS Enterprise Platform',
    category: 'CLOUD INFRASTRUCTURE',
    description:
      'A multi-AZ AWS platform using ECS Fargate, Terraform, GitHub Actions OIDC, and CloudWatch monitoring.',
    tags: ['AWS', 'Terraform', 'ECS', 'CI/CD'],
  },
  {
    number: '02',
    title: 'Enterprise RAG',
    category: 'GENERATIVE AI',
    description:
      'An AWS Bedrock-based retrieval architecture using knowledge bases, vector search, and secure document processing.',
    tags: ['Bedrock', 'RAG', 'Python', 'OpenSearch'],
  },
  {
    number: '03',
    title: 'Cloud Automation',
    category: 'DEVOPS ENGINEERING',
    description:
      'Infrastructure automation with reusable Terraform modules, identity federation, and automated deployment workflows.',
    tags: ['GitHub Actions', 'OIDC', 'IAM', 'Terraform'],
  },
]

const skills = [
  { icon: Cloud, name: 'AWS Architecture' },
  { icon: Workflow, name: 'DevOps & CI/CD' },
  { icon: ShieldCheck, name: 'Cloud Security' },
  { icon: Sparkles, name: 'GenAI Infrastructure' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function EnterpriseCaseStudy() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-14">
      <a href="#projects" className="mb-12 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white">
        <ArrowLeft size={18} /> Back to projects
      </a>
      <p className="mb-4 text-sm font-semibold tracking-widest text-cyan-400">PROJECT 01 · CLOUD INFRASTRUCTURE</p>
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">AWS Enterprise Platform</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        A hands-on, multi-Availability Zone AWS application platform built with Terraform,
        Amazon ECS on Fargate, an Application Load Balancer, GitHub Actions OIDC, and CloudWatch.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {['Terraform', 'ECS Fargate', 'ALB', 'GitHub Actions', 'OIDC', 'CloudWatch'].map(tag => (
          <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300">{tag}</span>
        ))}
      </div>
      <a href="https://github.com/athiragopi9626/aws-enterprise-platform" target="_blank" rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
        View source on GitHub <ExternalLink size={17} />
      </a>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold">Architecture overview</h2>
        <p className="mb-7 max-w-3xl leading-7 text-slate-400">
          Incoming HTTP traffic reaches a public Application Load Balancer, which routes requests to
          Fargate tasks in private subnets across two Availability Zones. The tasks access AWS services
          through VPC endpoints without requiring a NAT gateway.
        </p>
       <AWSArchitecture />
      
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Infrastructure as code', body: 'Terraform provisions networking, the load balancer, ECS resources, VPC endpoints, monitoring, and application autoscaling.' },
          { title: 'Secure deployment automation', body: 'GitHub Actions assumes an AWS IAM role using OIDC, avoiding long-lived AWS access keys in the CI/CD workflow.' },
          { title: 'Availability and recovery', body: 'The ECS service maintains two desired tasks across two Availability Zones. A stopped task was replaced automatically during recovery testing.' },
          { title: 'Observability', body: 'CloudWatch alarms cover ALB and target errors, unhealthy targets, and ECS CPU and memory. An SNS alarm notification was tested.' },
        ].map(item => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-7">
            <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
            <p className="leading-7 text-slate-400">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
        <h2 className="mb-5 text-3xl font-bold">Validation and engineering decisions</h2>
        <ul className="list-disc space-y-4 pl-5 leading-7 text-slate-300">
          <li>ALB health endpoint returned HTTP 200 after ECS task replacement.</li>
          <li>A 10,000-request load test recorded 9,989 successful requests and 11 failures; this is a single test, not a production performance guarantee.</li>
          <li>Target-tracking autoscaling was configured for CPU and memory, but scale-out under sustained load was not demonstrated.</li>
          <li>The demo uses HTTP rather than HTTPS; ACM/TLS and additional internet-facing protections are future hardening work.</li>
        </ul>
      </section>
      <div className="mt-14"><a href="#projects" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white"><ArrowLeft size={18} /> Back to all projects</a></div>
    </main>
  )
}

export default function App() {
  const [showEnterprise, setShowEnterprise] = useState(() => window.location.hash === '#project/aws-enterprise-platform')
  useEffect(() => {
    const onHashChange = () => setShowEnterprise(window.location.hash === '#project/aws-enterprise-platform')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d19] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 90, 0], y: [0, -50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 left-1/3 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[500px] right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]"
        />
      </div>

      {/* Navigation */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-xl font-bold tracking-tight">
          AG<span className="text-cyan-400">.</span>
        </a>

        <nav className="flex flex-wrap items-center justify-end gap-4 text-sm text-slate-400 sm:gap-6">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {showEnterprise ? <EnterpriseCaseStudy /> : <>
      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium tracking-widest text-cyan-300">
              AWS PLATFORM ENGINEERING · GENERATIVE AI
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-4 text-lg text-slate-400"
          >
            Hello, I'm Athira Gopi.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl"
          >
            Building secure cloud
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              platforms & intelligent solutions.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            AWS Platform & Generative AI Engineer working across enterprise AWS
            infrastructure, Terraform, secure CI/CD, Amazon Bedrock,
            retrieval-augmented generation, and AI workflow orchestration.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/athira-gopi-b44a111ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex items-center gap-2 text-sm text-slate-500"
        >
          Scroll to explore
          <ChevronDown size={16} />
        </motion.a>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-cyan-400">
            WHAT I DO
          </p>

          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Building reliable cloud foundations.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm"
            >
              <Icon
                className="mb-8 text-cyan-400"
                size={30}
              />
              <h3 className="font-semibold">{name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience and credentials */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold tracking-widest text-cyan-400">EXPERIENCE & CREDENTIALS</p>
        <h2 className="mb-5 text-3xl font-bold sm:text-4xl">Enterprise experience. Engineering depth.</h2>
        <p className="mb-9 max-w-3xl leading-7 text-slate-400">
          My work spans large-scale AWS platform operations, infrastructure automation,
          cloud security, and the engineering foundations behind enterprise GenAI applications.
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.045] p-7">
            <div className="mb-5 flex items-center gap-3"><Layers3 className="text-cyan-400" size={25}/><h3 className="text-xl font-semibold">AWS Platform Engineering</h3></div>
            <p className="mb-5 leading-7 text-slate-400">Experience supporting AWS environments at 500+ account scale, with a focus on security, repeatable delivery, and operational reliability.</p>
            <div className="flex flex-wrap gap-2">{['AWS Organizations', 'Terraform', 'IAM & OIDC', 'CI/CD', 'Observability', 'Security'].map(tag => <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{tag}</span>)}</div>
          </div>
          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.045] p-7">
            <div className="mb-5 flex items-center gap-3"><BrainCircuit className="text-violet-300" size={25}/><h3 className="text-xl font-semibold">Generative AI Engineering</h3></div>
            <p className="mb-5 leading-7 text-slate-400">Building and supporting AWS-based AI workflows, including retrieval, document processing, orchestration, and observability.</p>
            <div className="flex flex-wrap gap-2">{['Amazon Bedrock', 'RAG', 'AgentCore', 'Knowledge Bases', 'Lambda', 'Step Functions'].map(tag => <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{tag}</span>)}</div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Award className="text-cyan-400" size={25} />
            <h3 className="text-xl font-semibold">Certifications &amp; Credentials</h3>
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-400">
            Professional credentials earned in cloud engineering and infrastructure.
            View the individual Credly records for credential details and dates.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: 'AWS Certified DevOps Engineer – Professional', url: 'https://www.credly.com/badges/f787461f-d9e1-498e-956c-fb6d31dc2733/linked_in_profile' },
              { label: 'AWS Certified Security – Specialty', url: 'https://www.credly.com/badges/355f25e4-1c42-41a4-b715-0ba85a338f3c/linked_in_profile' },
              { label: 'AWS Certified Solutions Architect – Associate', url: 'https://www.credly.com/badges/1512d3b4-9c29-4786-8e7d-8695a6163fd5?source=linked_in_profile' },
              { label: 'HashiCorp Certified: Terraform Associate (002)', url: 'https://www.credly.com/badges/b367b323-9809-43d2-9ffd-b8ea5fa23de3/linked_in_profile' },
            ].map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${label} on Credly`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#101a2b] px-4 py-4 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Award className="shrink-0 text-cyan-400" size={22} />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-slate-100">{label}</span>
                  <span className="mt-1 block text-xs text-slate-400">View credential on Credly</span>
                </span>
                <ExternalLink className="shrink-0 text-slate-500 transition group-hover:text-cyan-300" size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <p className="mb-4 text-sm font-semibold tracking-widest text-cyan-400">
          SELECTED WORK
        </p>

        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          Featured projects.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-cyan-400/40"
            >
              {project.number === '01' && <a href="#project/aws-enterprise-platform" aria-label="Read AWS Enterprise Platform case study" className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-cyan-400" />}
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  {project.number}
                </span>
                {project.number === '01' && <ArrowUpRight className="text-slate-500 transition group-hover:text-cyan-400" />}
              </div>

              <p className="mb-3 text-xs font-semibold tracking-widest text-cyan-400">
                {project.category}
              </p>

              <h3 className="mb-4 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mb-8 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-cyan-400">
            LET'S CONNECT
          </p>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
            Let's connect.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-7 text-slate-400">
            Open to opportunities in AWS Platform Engineering, Generative AI,
            Cloud Infrastructure, and Cloud Consulting. Let’s connect on LinkedIn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/athira-gopi-b44a111ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Connect on LinkedIn <ExternalLink size={17} />
            </a>
            <a
              href="https://github.com/athiragopi9626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Code2 size={17} /> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      </>}
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Athira Gopi.
        Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}
