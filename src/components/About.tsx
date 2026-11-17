import { motion } from "framer-motion";

const focus = [
  {
    index: "01",
    title: "Machine Learning & AI",
    body: "Supervised learning fundamentals — how a model is trained, evaluated and where it quietly goes wrong.",
  },
  {
    index: "02",
    title: "Python Programming",
    body: "My primary language for experiments, scripting and anything data related.",
  },
  {
    index: "03",
    title: "Data Structures & Algorithms",
    body: "Regular problem solving to build real intuition for complexity and clean logic.",
  },
  {
    index: "04",
    title: "Software Development",
    body: "Version control, readable structure and building small things end to end.",
  },
  {
    index: "05",
    title: "Data-Driven Applications",
    body: "Exploring how intelligent applications turn a dataset into a useful answer.",
  },
];

const meta = [
  { k: "Degree", v: "B.Tech — Artificial Intelligence & Data Science" },
  { k: "Institute", v: "SLIET, Longowal" },
  { k: "Focus", v: "Machine Learning · Python · DSA" },
  { k: "Status", v: "Student — learning in public" },
];

export default function About() {
  return (
    <section
      data-jiro-section="about"
      data-jiro-label="About"
      id="about"
      className="scroll-mt-24 border-t border-ivory/10 px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ivory/40">
              <span className="text-acid">01</span> — About
            </p>
          </div>

          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08] tracking-[-0.02em]"
            >
              A student of systems that learn — and of the fundamentals that
              make them <span className="italic text-ivory/50">work</span>.
            </motion.h2>

            <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5 text-[15.5px] leading-[1.8] text-ivory/60"
              >
                <p>
                  I&apos;m Sanyam Tyagi, a B.Tech student specializing in
                  Artificial Intelligence &amp; Data Science at the Sant
                  Longowal Institute of Engineering and Technology (SLIET),
                  Longowal.
                </p>
                <p>
                  My curiosity sits where software engineering meets machine
                  learning: writing Python, reasoning through data structures
                  and algorithms, and turning a dataset into something that can
                  actually answer a question.
                </p>
                <p className="text-ivory/45">
                  I&apos;m early in this journey and honest about it. What I
                  know comes from coursework, documentation and small projects
                  I build to understand an idea properly rather than only read
                  about it.
                </p>
              </motion.div>

              <motion.dl
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="self-start border-t border-ivory/10"
              >
                {meta.map((m) => (
                  <div
                    key={m.k}
                    className="flex flex-col gap-1 border-b border-ivory/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/35">
                      {m.k}
                    </dt>
                    <dd className="text-[14px] text-ivory/80 sm:text-right">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            <ul className="mt-16 border-t border-ivory/10">
              {focus.map((f, i) => (
                <motion.li
                  key={f.index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-ivory/10 py-6 transition-colors duration-300 hover:border-acid/40 md:grid-cols-12"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/30 transition-colors group-hover:text-acid md:col-span-1">
                    {f.index}
                  </span>
                  <h3 className="text-[17px] font-medium tracking-[-0.01em] transition-transform duration-300 md:col-span-4 md:group-hover:translate-x-1">
                    {f.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ivory/50 md:col-span-7">
                    {f.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
