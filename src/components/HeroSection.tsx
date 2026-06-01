import { motion } from 'framer-motion';
import { Mail, Link, GitBranch } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Homepage', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  }),
};

const SocialButton = ({ children }: { children: React.ReactNode }) => (
  <button className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center text-cream hover:bg-white/10 transition-colors duration-200">
    {children}
  </button>
);

const LINKEDIN_URL = 'https://www.linkedin.com/in/srikanta-mishra-02a838230';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen rounded-b-[32px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col h-screen">

        {/* Header row */}
        <div className="flex items-center justify-between pt-6 lg:pt-8">
          {/* Logo */}
          <motion.span
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-grotesk text-cream text-base uppercase tracking-widest"
          >
            Orbis.Nft
          </motion.span>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden lg:flex liquid-glass rounded-[28px] px-[52px] py-[24px] gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-grotesk text-cream text-[13px] uppercase tracking-wide hover:text-neon transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Desktop Social icons */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden lg:flex flex-col gap-3"
          >
            <SocialButton><Mail size={20} /></SocialButton>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group relative inline-block">
              <span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-background/90 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wide text-neon opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                srikanta-mishra-02a838230
              </span>
              <SocialButton><Link size={20} /></SocialButton>
            </a>
            <SocialButton><GitBranch size={20} /></SocialButton>
          </motion.div>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col justify-center lg:ml-32 mt-8 lg:mt-0">
          <div className="relative max-w-[780px]">
            {/* Cursive accent */}
            <motion.span
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="absolute -top-8 right-0 lg:right-[-80px] font-condiment text-neon text-2xl sm:text-3xl md:text-4xl lg:text-5xl -rotate-1 mix-blend-exclusion opacity-90 pointer-events-none select-none"
            >
              Nft collection
            </motion.span>

            {/* Main heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-grotesk text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] lg:leading-[1] m-0"
            >
              Beyond earth
              <br />
              and ( its ) familiar
              <br />
              boundaries
            </motion.h1>
          </div>

          {/* Mobile social icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex lg:hidden flex-row gap-3 mt-8 justify-center"
          >
            <SocialButton><Mail size={20} /></SocialButton>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group relative inline-block">
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-11 whitespace-nowrap rounded-md bg-background/90 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wide text-neon opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                srikanta-mishra-02a838230
              </span>
              <SocialButton><Link size={20} /></SocialButton>
            </a>
            <SocialButton><GitBranch size={20} /></SocialButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
