import { motion } from "framer-motion";

type Skill = { name: string; note: string; tag?: string };

const groups: { label: string; index: string; items: Skill[] }[] = [
  {
    index: "A",
    label: "Programming",
    items: [
      {
        name: "Python",
        note: "Primary language — scripting, data work and ML experiments.",
      },
      {
        name: "Java",
        note: "Object-oriented programming and problem solving through coursework.",
      },
    ],
  },
  {
    index: "B",
    label: "Machine Learning & Data Science",
    items: [
      {
        name: "Machine Learning",
        note: "Supervised learning fundamentals: training, testing, evaluating.",
        tag: "Currently learning",
      },
      { name: "NumPy", note: "Arrays and numerical computation." },
      { name: "Pandas", note: "Loading, cleaning and exploring datasets." },
      {
        name: "Scikit-learn",
        note: "Classic models, train/test splits and metrics.",
      },
    ],
  },
  {
    index: "C",
    label: "Development",
    items: [
      { name: "Git", note: "Commits, branches and keeping history readable." },
      {
        name: "GitHub",
        note: "Repositories, issues and working in the open.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      data-jiro-section="skills"
      data-jiro-label="Skills"
      id="skills"
      className="scroll-mt-24 border-t border-ivory/10 px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ivory/40">
              <span className="text-acid">02</span> — Technical Skills
            </p>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08] tracking-[-0.02em]"
            >
              The tools I use — stated{" "}
              <span className="italic text-ivory/50">honestly</span>.
            </motion.h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-ivory/50">
              No percentages, no badges of mastery. Just what I work with,
              what I use it for, and what I&apos;m still learning.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: gi * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-baseline justify-between border-b border-ivory/20 pb-4">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/80">
                  {g.label}
                </h3>
                <span className="font-mono text-[11px] text-acid">
                  {g.index}
                </span>
              </div>

              <ul>
                {g.items.map((s) => (
                  <li
                    key={s.name}
                    className="group border-b border-ivory/10 py-5 transition-colors duration-300 hover:border-acid/40"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                      <span className="font-display text-[26px] leading-none tracking-[-0.01em] transition-colors duration-300 group-hover:text-acid">
                        {s.name}
                      </span>
                      {s.tag && (
                        <span className="border border-acid/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-acid/90">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-ivory/45">
                      {s.note}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
