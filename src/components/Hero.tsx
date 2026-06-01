import { motion } from "framer-motion";
import { Mail, Link, GitBranch } from "lucide-react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Mission", href: "#mission" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: Mail, href: "mailto:hello@srikanta.dev", label: "Email" },
  {
    icon: Link,
    href: "https://www.linkedin.com/in/srikanta-mishra-02a838230",
    label: "LinkedIn",
  },
  { icon: GitBranch, href: "#", label: "GitHub" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const SocialIcons = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-3 ${className}`}>
    {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
      <motion.a
        key={label}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        variants={fadeUp}
        custom={i + 3}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.08 }}
        className="group relative liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors text-cream"
        aria-label={label}
      >
        {label === "LinkedIn" && (
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-11 whitespace-nowrap rounded-md bg-background/90 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wide text-neon opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            srikanta-mishra-02a838230
          </span>
        )}
        <Icon size={20} />
      </motion.a>
    ))}
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full h-svh overflow-hidden rounded-b-[32px]">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark scrim */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14">
        {/* ── Header row ── */}
        <div className="flex items-center justify-between pt-6 lg:pt-8">
          {/* Logo */}
          <motion.span
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="font-grotesk text-[16px] uppercase tracking-wider text-cream"
          >
            Srikanta.dev
          </motion.span>

          {/* Desktop Nav */}
          <motion.nav
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]"
          >
            <ul className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Desktop social — stacked vertically top-right */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col gap-3"
          >
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                whileHover={{ scale: 1.08 }}
                className="group relative liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors text-cream"
                aria-label={label}
              >
                {label === "LinkedIn" && (
                  <span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-background/90 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wide text-neon opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    srikanta-mishra-02a838230
                  </span>
                )}
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Hero content ── */}
        <div className="flex-1 flex flex-col justify-center lg:justify-end pb-16 lg:pb-24">
          <div className="relative lg:ml-32 max-w-full lg:max-w-[780px]">
            {/* Cursive accent — absolute, right of heading */}
            <motion.span
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="visible"
              className="absolute -top-6 right-0 lg:-right-12 font-condiment text-neon
                         text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]
                         -rotate-1 mix-blend-exclusion opacity-90 pointer-events-none select-none"
            >
              Devonaut
            </motion.span>

            <motion.h1
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="font-grotesk uppercase text-cream
                         text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px]
                         leading-[1.05] sm:leading-[1] tracking-tight"
            >
              Building digital
              <br />
              products with
              <br />
              real-world intent
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-[620px] font-mono text-[11px] sm:text-[13px] uppercase tracking-wide leading-relaxed text-cream/70"
            >
              I design and ship focused experiences that blend strong frontend
              craft, AI-assisted workflows, and product thinking. Explore my
              mission, projects, and core skills below.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={6}
              initial="hidden"
              animate="visible"
              className="mt-5 flex flex-wrap gap-2.5"
            >
              {[
                "React + TypeScript",
                "Angular + TypeScript",
                "Three.js",
                "Node.js",
                "Express.js",
                "MongoDb",
                "AI Prototyping",
                "Product UI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="liquid-glass rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-cream/80"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Mobile social icons */}
          <SocialIcons className="lg:hidden mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}
