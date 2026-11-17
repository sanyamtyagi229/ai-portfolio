import { motion } from "framer-motion";

type Pt = { x: number; y: number };

const jitter = (base: Pt, seed: number, spread: number): Pt => {
  const a = Math.sin(seed * 12.9898) * 43758.5453;
  const b = Math.sin(seed * 78.233) * 12345.6789;
  return {
    x: base.x + (a - Math.floor(a) - 0.5) * spread,
    y: base.y + (b - Math.floor(b) - 0.5) * spread,
  };
};

const cluster = (base: Pt, count: number, offset: number, spread: number) =>
  Array.from({ length: count }, (_, i) => jitter(base, i + offset, spread));

const groupA = cluster({ x: 118, y: 418 }, 11, 1, 110);
const groupB = cluster({ x: 258, y: 286 }, 12, 40, 130);
const groupC = cluster({ x: 392, y: 152 }, 11, 90, 120);

const legend = [
  { label: "setosa", className: "bg-acid" },
  { label: "versicolor", className: "bg-ivory" },
  { label: "virginica", className: "bg-ivory/35" },
];

export default function DataField() {
  return (
    <div aria-hidden="true" className="relative w-full select-none">
      <div className="relative border border-ivory/10 bg-[#0c0c0e] p-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/40">
          <span>fig. 01 — feature space</span>
          <span className="text-acid/80">k = 3</span>
        </div>

        <svg
          viewBox="0 0 520 520"
          className="h-auto w-full"
          role="presentation"
          focusable="false"
        >
          <defs>
            <pattern
              id="df-grid"
              width="52"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M52 0H0V52"
                fill="none"
                stroke="#f2efe8"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="520" height="520" fill="url(#df-grid)" />

          {/* axes */}
          <line x1="0" y1="519" x2="520" y2="519" stroke="#f2efe8" strokeOpacity="0.2" />
          <line x1="1" y1="0" x2="1" y2="520" stroke="#f2efe8" strokeOpacity="0.2" />

          {/* decision boundaries */}
          <motion.path
            d="M40 300 C 150 270, 210 250, 300 150 S 430 60, 500 40"
            fill="none"
            stroke="#cff04a"
            strokeOpacity="0.55"
            strokeWidth="1.25"
            strokeDasharray="5 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M30 500 C 120 470, 170 420, 230 330 S 360 200, 500 170"
            fill="none"
            stroke="#f2efe8"
            strokeOpacity="0.22"
            strokeWidth="1.25"
            strokeDasharray="5 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.55 }}
          />

          {/* points */}
          {groupC.map((p, i) => (
            <motion.circle
              key={`c-${i}`}
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#f2efe8"
              fillOpacity="0.35"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
            />
          ))}
          {groupB.map((p, i) => (
            <motion.circle
              key={`b-${i}`}
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#f2efe8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.03 }}
            />
          ))}
          {groupA.map((p, i) => (
            <motion.circle
              key={`a-${i}`}
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#cff04a"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.03 }}
            />
          ))}

          {/* highlighted sample */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.circle
              cx="300"
              cy="230"
              r="14"
              fill="none"
              stroke="#cff04a"
              strokeOpacity="0.6"
              animate={{ r: [14, 26, 14], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="300" cy="230" r="5" fill="#cff04a" />
            <line
              x1="300"
              y1="230"
              x2="300"
              y2="130"
              stroke="#cff04a"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <text
              x="308"
              y="124"
              fill="#cff04a"
              fillOpacity="0.9"
              fontSize="13"
              fontFamily="JetBrains Mono, monospace"
            >
              predict → 0.97
            </text>
          </motion.g>
        </svg>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ivory/10 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ivory/45">
          {legend.map((l) => (
            <span key={l.label} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${l.className}`} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden border border-ivory/10 bg-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/50 sm:block">
        petal length / petal width
      </div>
    </div>
  );
}
