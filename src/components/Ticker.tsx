import { motion } from "framer-motion";

const items = [
  "Machine Learning",
  "Python",
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Scikit-learn",
  "Problem Solving",
  "NumPy",
  "Pandas",
  "Java",
];

export default function Ticker() {
  const row = [...items, ...items];

  return (
    <section
      data-jiro-section="ticker"
      data-jiro-label="Marquee Strip"
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/10 bg-[#0C0C0D] py-4"
    >
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap pr-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#8C887F]">
              {t}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#E8613C]" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
