import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
};

export default function Tilt({
  children,
  className = "",
  max = 9,
  glare = true,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);

  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(207,240,74,0.12), transparent 60%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className={`[perspective:1400px] ${className}`}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {children}
        {glare && (
          <motion.span
            aria-hidden="true"
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 z-20"
          />
        )}
      </motion.div>
    </div>
  );
}
