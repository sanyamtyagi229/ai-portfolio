import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import DataField from "./DataField";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      data-jiro-section="hero"
      data-jiro-label="Hero"
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:pb-28 lg:pt-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-12"
        >
          <div className="lg:col-span-7">
            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ivory/45"
            >
              <span className="flex items-center gap-2 text-acid">
                <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                Open to internships
              </span>
              <span className="hidden h-3 w-px bg-ivory/20 sm:block" />
              <span>B.Tech — AI &amp; Data Science</span>
              <span className="hidden h-3 w-px bg-ivory/20 sm:block" />
              <span>SLIET, Longowal</span>
            </motion.div>

            <h1 className="mt-10">
              <motion.span
                variants={rise}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display text-[clamp(3rem,8.6vw,7rem)] leading-[0.9] tracking-[-0.025em]"
              >
                Building Intelligence.
              </motion.span>
              <motion.span
                variants={rise}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-1 block font-display text-[clamp(3rem,8.6vw,7rem)] italic leading-[0.9] tracking-[-0.025em] text-ivory/45"
              >
                Creating Impact.
              </motion.span>
            </h1>

            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-col gap-4 border-y border-ivory/10 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-[clamp(1.05rem,2.4vw,1.6rem)] font-medium uppercase tracking-[0.18em]">
                Sanyam Tyagi
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
                Aspiring AI/ML Engineer
              </p>
            </motion.div>

            <motion.p
              variants={rise}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-[15.5px] leading-[1.75] text-ivory/60"
            >
              I&apos;m an aspiring AI/ML Engineer passionate about Python,
              intelligent systems, Machine Learning and building
              technology-driven solutions. Currently exploring the world of AI
              while strengthening my software development and problem-solving
              skills.
            </motion.p>

            <motion.div
              variants={rise}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#work"
                className="group inline-flex items-center justify-between gap-6 bg-ivory px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-acid"
              >
                Explore My Work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-6 border border-ivory/20 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-acid hover:text-acid"
              >
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={rise}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pt-6"
          >
            <DataField />
          </motion.div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px border-t border-ivory/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/40 sm:grid-cols-4">
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Data Structures</span>
          <span>Problem Solving</span>
        </div>
      </div>
    </section>
  );
}
