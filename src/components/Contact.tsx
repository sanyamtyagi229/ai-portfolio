import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Tilt from "./Tilt";

const ease = [0.22, 1, 0.36, 1] as const;

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "sanyamtyagitauli@gmail.com",
    href: "mailto:sanyamtyagitauli@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sanyam-tyagi-2099b125b",
    href: "https://www.linkedin.com/in/sanyam-tyagi-2099b125b/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sanyamtyagi229",
    href: "https://github.com/sanyamtyagi229",
  },
];

export default function Contact() {
  return (
    <section
      data-jiro-section="contact"
      data-jiro-label="Contact"
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-ivory/10 px-6 py-24 sm:px-10 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(207,240,74,0.07),transparent_65%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ivory/40">
              <span className="text-acid">05</span> — Contact
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="[perspective:1400px]">
              <motion.h2
                initial={{ opacity: 0, y: 36, rotateX: 18 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease }}
                style={{ transformStyle: "preserve-3d" }}
                className="max-w-4xl font-display text-[clamp(2.4rem,6.4vw,5rem)] leading-[0.98] tracking-[-0.03em]"
              >
                Have an interesting idea?{" "}
                <span className="italic text-acid">Let&apos;s connect.</span>
              </motion.h2>
            </div>

            <p className="mt-8 max-w-xl text-[15.5px] leading-[1.8] text-ivory/55">
              I&apos;m open to internships, student collaborations and
              open-source projects where I can learn from people building real
              systems. The fastest way to reach me is email — I reply to every
              genuine message.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {channels.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease }}
                >
                  <Tilt max={10}>
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="group relative flex h-full flex-col justify-between border border-ivory/12 bg-[#0c0c0e] p-6 transition-colors duration-300 hover:border-acid/50"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span
                        className="flex items-center justify-between"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <c.icon className="h-5 w-5 text-ivory/50 transition-colors duration-300 group-hover:text-acid" />
                        <ArrowUpRight className="h-4 w-4 text-ivory/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid" />
                      </span>

                      <span
                        className="mt-12 block"
                        style={{ transform: "translateZ(26px)" }}
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/35">
                          {c.label}
                        </span>
                        <span className="mt-2 block break-words text-[15px] text-ivory/85 transition-colors duration-300 group-hover:text-acid">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </Tilt>
                </motion.div>
              ))}
            </div>

            <a
              href="mailto:sanyamtyagitauli@gmail.com"
              className="group mt-12 inline-flex items-center justify-between gap-8 bg-ivory px-8 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-acid"
            >
              Write me an email
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
