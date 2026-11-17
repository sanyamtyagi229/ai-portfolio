import { motion } from "framer-motion";
import Tilt from "./Tilt";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    index: "01",
    title: "Machine Learning",
    note: "Supervised learning, model evaluation and the gap between a good score and a good model.",
  },
  {
    index: "02",
    title: "Data Science",
    note: "Cleaning, exploring and reading a dataset before asking it anything.",
  },
  {
    index: "03",
    title: "Artificial Intelligence",
    note: "How intelligent systems are assembled — and where their limits honestly sit.",
  },
  {
    index: "04",
    title: "Python Development",
    note: "Writing Python that stays readable when the notebook becomes a project.",
  },
  {
    index: "05",
    title: "Problem Solving",
    note: "Daily practice with data structures, algorithms and patient debugging.",
  },
];

export default function Exploring() {
  return (
    <section
      data-jiro-section="exploring"
      data-jiro-label="Currently Exploring"
      id="exploring"
      className="scroll-mt-24 border-t border-ivory/10 px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ivory/40">
              <span className="text-acid">04</span> — Currently Exploring
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="mt-8 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.06] tracking-[-0.02em]"
            >
              A journey in progress —{" "}
              <span className="italic text-ivory/50">not a résumé</span>.
            </motion.h2>

            <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-ivory/50">
              These are the areas I&apos;m actively studying right now. Each one
              is a direction of learning rather than a claim of expertise, and
              the list changes as I go deeper.
            </p>

            <Tilt className="mt-12 hidden lg:block" max={11}>
              <div
                className="relative aspect-square w-full max-w-[300px] border border-ivory/10 bg-[#0c0c0e]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {[0, 1, 2].map((r) => (
                  <span
                    key={r}
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 rounded-full border border-acid/25"
                    style={{
                      width: `${55 - r * 15}%`,
                      height: `${55 - r * 15}%`,
                      transform: `translate(-50%, -50%) translateZ(${
                        20 + r * 26
                      }px)`,
                    }}
                  />
                ))}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid"
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ boxShadow: "0 0 24px rgba(207,240,74,0.55)" }}
                />
                <span
                  className="absolute bottom-4 left-5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ivory/35"
                  style={{ transform: "translateZ(90px)" }}
                >
                  learning loop — in progress
                </span>
              </div>
            </Tilt>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-ivory/10 [perspective:1200px]">
              {items.map((it, i) => (
                <motion.li
                  key={it.index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease }}
                  whileHover={{ rotateX: -4, z: 40 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-3 border-b border-ivory/10 py-8 transition-colors duration-300 hover:border-acid/40 hover:bg-ivory/[0.02] md:grid-cols-12"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/30 transition-colors group-hover:text-acid md:col-span-1">
                    {it.index}
                  </span>
                  <h3
                    className="font-display text-[clamp(1.6rem,3.6vw,2.4rem)] leading-none tracking-[-0.02em] transition-colors duration-300 group-hover:text-acid md:col-span-6"
                    style={{ transform: "translateZ(24px)" }}
                  >
                    {it.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ivory/50 md:col-span-5">
                    {it.note}
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
