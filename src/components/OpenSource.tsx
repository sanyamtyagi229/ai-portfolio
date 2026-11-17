import { motion } from "framer-motion";
import { ArrowUpRight, Github, GitPullRequest, MessageSquare, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Read before writing",
    body: "I start by reading the codebase and the contributing guide until I understand how the project actually fits together.",
  },
  {
    icon: MessageSquare,
    title: "Start small",
    body: "Documentation fixes, clearer error messages and good-first-issues — small changes that are genuinely useful to maintainers.",
  },
  {
    icon: GitPullRequest,
    title: "Learn from review",
    body: "Every review comment is free mentorship. I treat feedback on a pull request as the fastest way to get better.",
  },
];

export default function OpenSource() {
  return (
    <section
      data-jiro-section="open-source"
      data-jiro-label="Open Source"
      id="open-source"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_65%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-violet-400/90">
              04 — Open Source
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              Contributing,
              <br />
              one issue at a time.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-400">
              Open source is where I get to see how experienced engineers write
              and review code. I&apos;m at the beginning of this journey — my
              contributions so far are small and focused, and everything I work
              on lives publicly on GitHub.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-white ring-1 ring-inset ring-white/10">
                    <Github className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-white">
                      github.com/sanyamtyagi229
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-neutral-500">
                      Repositories, contributions and work in progress
                    </p>
                  </div>
                </div>
                <a
                  href="https://github.com/sanyamtyagi229"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-[13px] font-medium text-white shadow-[0_10px_34px_-14px_rgba(124,58,237,0.9)] transition-all hover:from-violet-500 hover:to-blue-500"
                >
                  Visit profile
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-blue-300 ring-1 ring-inset ring-white/10">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-400">
                    {s.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
