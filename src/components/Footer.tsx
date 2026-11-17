import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sanyamtyagi229",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanyam-tyagi-2099b125b/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sanyamtyagitauli@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer
      data-jiro-section="footer"
      data-jiro-label="Footer"
      className="border-t border-ivory/10 px-6 py-14 sm:px-10"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-none tracking-[-0.02em]">
              Sanyam Tyagi
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-acid/90">
              Aspiring AI/ML Engineer
            </p>
          </div>

          <nav aria-label="Social" className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-ivory/60 transition-colors duration-300 hover:border-acid hover:text-acid"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-ivory/60 transition-colors duration-300 hover:border-acid hover:text-acid"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sanyam Tyagi. All rights reserved.</p>
          <p>Designed &amp; built with care — SLIET, Longowal</p>
        </div>
      </div>
    </footer>
  );
}
