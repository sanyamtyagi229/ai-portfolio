import { motion } from "framer-motion";

const L1 = [112, 182, 252, 322];
const L2 = [82, 132, 182, 232, 282, 332];
const L3 = [162, 262];

const X1 = 74;
const X2 = 200;
const X3 = 326;

type Edge = { x1: number; y1: number; x2: number; y2: number; i: number };

const edges: Edge[] = [];
let n = 0;
L1.forEach((y1) => {
  L2.forEach((y2) => {
    edges.push({ x1: X1, y1, x2: X2, y2, i: n++ });
  });
});
L2.forEach((y1) => {
  L3.forEach((y2) => {
    edges.push({ x1: X2, y1, x2: X3, y2, i: n++ });
  });
});

export default function NeuralField() {
  return (
    <figure className="relative">
      <div className="relative border border-white/10 bg-[#0C0C0D] p-5 sm:p-7">
        <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
          <figcaption className="text-[10.5px] uppercase tracking-[0.28em] text-[#78746C]">
            Fig. 01 — Signal flow
          </figcaption>
          <span className="text-[10.5px] uppercase tracking-[0.28em] text-[#E8613C]">
            Learning
          </span>
        </div>

        <svg
          viewBox="0 0 400 420"
          className="mt-4 w-full"
          role="img"
          aria-label="Abstract diagram of a small neural network: four input nodes connecting through six hidden nodes to two output nodes."
        >
          <defs>
            <linearGradient id="nf-edge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EDEAE3" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#E8613C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EDEAE3" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <g>
            {edges.map((e) => (
              <motion.line
                key={`${e.x1}-${e.y1}-${e.x2}-${e.y2}`}
                x1={e.x1}
                y1={e.y1}
                x2={e.x2}
                y2={e.y2}
                stroke="url(#nf-edge)"
                strokeWidth="0.8"
                initial={{ opacity: 0.12 }}
                animate={{ opacity: [0.1, 0.55, 0.1] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (e.i % 11) * 0.42,
                }}
              />
            ))}
          </g>

          {[
            { x: X1, ys: L1 },
            { x: X2, ys: L2 },
            { x: X3, ys: L3 },
          ].map((layer, li) =>
            layer.ys.map((y, yi) => (
              <g key={`${layer.x}-${y}`}>
                <circle
                  cx={layer.x}
                  cy={y}
                  r="11"
                  fill="#0C0C0D"
                  stroke="rgba(237,234,227,0.18)"
                  strokeWidth="0.9"
                />
                <motion.circle
                  cx={layer.x}
                  cy={y}
                  r="3.6"
                  fill={li === 2 ? "#E8613C" : "#EDEAE3"}
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: [0.3, 1, 0.3], r: [3.2, 4.4, 3.2] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: li * 0.5 + yi * 0.24,
                  }}
                />
              </g>
            ))
          )}

          <motion.line
            x1="24"
            x2="376"
            y1="40"
            y2="40"
            stroke="#E8613C"
            strokeWidth="0.6"
            strokeOpacity="0.45"
            animate={{ y1: [40, 384, 40], y2: [40, 384, 40] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <g
            fill="#5D5A54"
            fontSize="9"
            letterSpacing="2.4"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          >
            <text x={X1} y="396" textAnchor="middle">
              INPUT
            </text>
            <text x={X2} y="396" textAnchor="middle">
              HIDDEN
            </text>
            <text x={X3} y="396" textAnchor="middle">
              OUTPUT
            </text>
          </g>
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
          {[
            { k: "Layers", v: "03" },
            { k: "Mode", v: "Studying" },
            { k: "Stack", v: "Python" },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#5D5A54]">
                {s.k}
              </p>
              <p className="mt-1.5 text-[13px] text-[#CFCAC1]">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 border-r border-t border-[#E8613C]/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-white/15"
      />
    </figure>
  );
}
