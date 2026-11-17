import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about", index: "01" },
  { label: "Skills", href: "#skills", index: "02" },
  { label: "Work", href: "#work", index: "03" },
  { label: "Exploring", href: "#exploring", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-jiro-section="navbar"
      data-jiro-label="Navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-ivory/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <a href="#home" className="group flex items-baseline gap-3">
          <span className="font-display text-[22px] leading-none tracking-[-0.01em]">
            Sanyam Tyagi
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/40 transition-colors group-hover:text-acid sm:inline">
            AI / ML
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-ivory"
            >
              <span className="mr-2 text-ivory/25 transition-colors group-hover:text-acid">
                {l.index}
              </span>
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-acid transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="mailto:sanyamtyagitauli@gmail.com"
          className="hidden border border-ivory/15 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-300 hover:border-acid hover:text-acid lg:inline-block"
        >
          Available for internships
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-ivory/70 transition-colors hover:text-ivory md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-[22px] leading-none">
                Sanyam Tyagi
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-ivory/70 transition-colors hover:text-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-6 flex flex-col px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="flex items-baseline justify-between border-b border-ivory/10 py-5"
                >
                  <span className="font-display text-[34px] leading-none">
                    {l.label}
                  </span>
                  <span className="font-mono text-[11px] text-ivory/30">
                    {l.index}
                  </span>
                </motion.a>
              ))}
              <a
                href="mailto:sanyamtyagitauli@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-acid"
              >
                sanyamtyagitauli@gmail.com
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
