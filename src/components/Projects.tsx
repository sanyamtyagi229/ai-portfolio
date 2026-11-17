import { motion } from "framer-motion";
import { ArrowUpRight, Github, ImageOff } from "lucide-react";
import Tilt from "./Tilt";

const ease = [0.22, 1, 0.36, 1] as const;

function IrisVisual() {
  const dots = [
    { x: 18, y: 76, c: "#cff04a" },
    { x: 26, y: 83, c: "#cff04a" },
    { x: 31, y: 70, c: "#cff04a" },
    { x: 22, y: 64, c: "#cff04a" },
    { x: 38, y: 79, c: "#cff04a" },
    { x: 46, y: 52, c: "#f2efe8" },
    { x: 54, y: 58, c: "#f2efe8" },
    { x: 50, y: 44, c: "#f2efe8" },
    { x: 60, y: 48, c: "#f2efe8" },
    { x: 43, y: 40, c: "#f2efe8" },
    { x: 72, y: 28, c: "rgba(242,239,232,0.4)" },
    { x: 80, y: 22, c: "rgba(242,239,232,0.4)" },
    { x: 68, y: 18, c: "rgba(242,239,232,0.4)" },
    { x: 86, y: 32, c: "rgba(242,239,232,0.4)" },
  ];

  return (
    <div
      className="relative aspect-4/3 w-full border border-ivory/10 bg-[#0c0c0e]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(242,239,232,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,239,232,0.055) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          transform: "translateZ(12px)",
        }}
      />

      <div
        className="absolute inset-6"
        style={{ transform: "translateZ(42px)", transformStyle: "preserve-3d" }}
      >
        {dots.map((d, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.035, ease }}
            className="absolute h-2 w-2 rounded-full"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              background: d.c,
              boxShadow: d.c === "#cff04a" ? "0 0 14px rgba(207,240,74,0.5)" : "none",
            }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-6"
        style={{ transform: "translateZ(26px)" }}
        aria-hidden="true"
      >
        <motion.path
          d="M4 58 C 26 50, 40 40, 62 24 S 88 8, 98 4"
          fill="none"
          stroke="#cff04a"
          strokeOpacity="0.5"
          strokeWidth="0.4"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-ivory/10 bg-ink/60 px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ivory/45 backdrop-blur-sm"
        style={{ transform: "translateZ(60px)" }}
      >
        <span>petal length / petal width</span>
        <span className="text-acid/80">3 classes</span>
      </div>
    </div>
  );
}

function ChatbotVisual() {
  const lines = [
    { side: "in", text: "What does the dataset say about X?" },
    { side: "out", text: "Searching the knowledge base…" },
    { side: "out", text: "Here is the matching record." },
  ];

  return (
    <div
      className="relative aspect-4/3 w-full overflow-hidden border border-ivory/10 bg-[#0c0c0e]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-acid/15"
        style={{ transform: "translateZ(14px)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-ivory/10"
        style={{ transform: "translateZ(6px)" }}
      />

      <div
        className="absolute inset-0 flex flex-col justify-center gap-3 px-6 sm:px-8"
        style={{ transformStyle: "preserve-3d" }}
      >
        {lines.map((l, i) => (
          <motion.div
            key={l.text}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.15, ease }}
            style={{ transform: `translateZ(${34 + i * 16}px)` }}
            className={`max-w-[78%] border px-4 py-3 text-[13px] leading-relaxed ${
              l.side === "in"
                ? "self-start border-ivory/15 bg-ivory/[0.04] text-ivory/75"
                : "self-end border-acid/30 bg-acid/[0.07] text-acid/90"
            }`}
          >
            {l.text}
          </motion.div>
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-ivory/10 bg-ink/60 px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ivory/45 backdrop-blur-sm"
        style={{ transform: "translateZ(70px)" }}
      >
        <span>knowledge base → answer</span>
        <span className="text-acid/80">focused q&amp;a</span>
      </div>
    </div>
  );
}

const projects = [
  {
    index: "01",
    title: "Iris Flower Classification",
    kind: "Machine Learning · Classification",
    body: "A Machine Learning classification project that predicts iris flower species based on flower measurements. Built to understand the full path of a model end to end — loading and exploring the dataset, splitting it, training a classifier and reading its evaluation honestly.",
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    repo: null as string | null,
    visual: <IrisVisual />,
  },
  {
    index: "02",
    title: "Dataset-Based AI Chatbot",
    kind: "Applied AI · Question Answering",
    body: "An intelligent conversational chatbot designed to provide relevant answers based on a specific dataset or knowledge base. The focus is narrow by design: answering questions well inside a defined body of information rather than talking about everything.",
    tags: ["Focused Q&A", "Dataset-driven", "Technologies — to be documented"],
    repo: null as string | null,
    visual: <ChatbotVisual />,
  },
];

export default function Projects() {
  return (
    <section
      data-jiro-section="projects"
      data-jiro-label="Selected Work"
      id="work"
      className="scroll-mt-24 border-t border-ivory/10 px-6 py-24 sm:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ivory/40">
              <span className="text-acid">03</span> — Selected Work
            </p>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="max-w-3xl font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08] tracking-[-0.02em]"
            >
              Two projects built to{" "}
              <span className="italic text-ivory/50">understand</span>, not to
              impress.
            </motion.h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-ivory/50">
              Each one started as a question I couldn&apos;t answer from a
              tutorial alone. Screenshots and repository links are marked as
              placeholders until they&apos;re published.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {projects.map((p, i) => (
            <article
              key={p.index}
              className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease }}
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Tilt className="w-full">
                  <div style={{ transformStyle: "preserve-3d" }}>
                    {p.visual}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-4 -left-4 h-20 w-20 border-b border-l border-acid/40"
                      style={{ transform: "translateZ(-20px)" }}
                    />
                  </div>
                </Tilt>

                <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                  <ImageOff className="h-3.5 w-3.5" />
                  Placeholder visual — project screenshot to be added
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-[clamp(3rem,7vw,5rem)] leading-none text-ivory/12">
                    {p.index}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid/90">
                    {p.kind}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.05] tracking-[-0.02em]">
                  {p.title}
                </h3>

                <p className="mt-5 text-[15px] leading-[1.8] text-ivory/55">
                  {p.body}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-ivory/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ivory/55 transition-colors duration-300 hover:border-acid/50 hover:text-acid"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-ivory/10 pt-5">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors hover:text-acid"
                    >
                      <Github className="h-4 w-4" />
                      View repository
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <p className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/35">
                      <Github className="h-4 w-4" />
                      Repository link — placeholder, to be added
                    </p>
                  )}
                </div>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
