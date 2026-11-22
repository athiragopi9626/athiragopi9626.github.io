
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Cloud,
  ShieldCheck,
  Workflow,
  Sparkles,
  ChevronDown,
  Code2,
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

export default function App() {
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

        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

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
              CLOUD ENGINEERING · DEVOPS · GENERATIVE AI
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
            Engineering cloud
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              platforms that scale.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            AWS Cloud & Platform Engineer specializing in secure
            infrastructure, Terraform automation, CI/CD pipelines,
            and enterprise GenAI solutions.
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
              href="https://github.com/athiragopi9626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              <Code2 size={18} />
              GitHub
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
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-cyan-400/40"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  {project.number}
                </span>
                <ArrowUpRight className="text-slate-500 transition group-hover:text-cyan-400" />
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
            Let's build something meaningful.
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-slate-400">
            Interested in cloud architecture, platform engineering,
            or GenAI infrastructure? Connect with me on GitHub.
          </p>

          <a
            href="https://github.com/athiragopi9626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <Code2 size={18} />
            View GitHub Profile
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Athira Gopi.
        Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}
