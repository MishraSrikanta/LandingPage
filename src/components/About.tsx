import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4';

const MISSION_NOTE =
  'I build practical, high-impact products where design clarity meets engineering depth.';

const MISSION_PILLARS = [
  {
    title: 'Solve Real Friction',
    text: 'Turn ambiguous problems into clear product flows that remove user effort.',
  },
  {
    title: 'Ship With Intent',
    text: 'Prototype fast, validate quickly, and move only what improves outcomes.',
  },
  {
    title: 'Scale Craft',
    text: 'Build reusable systems that stay elegant from MVP to production.',
  },
];

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    label: 'Creative Web',
    items: ['Three.js', 'WebGL Concepts', 'Cinematic UI', 'Interactive Motion'],
  },
  {
    label: 'Product + AI',
    items: ['UX Strategy', 'Prompt Engineering', 'Rapid Prototyping', 'Workflow Automation'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section
      id="mission"
      ref={ref}
      className="relative w-full min-h-svh overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Scrim */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">

        {/* ── Top row ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">

          {/* Left: heading */}
          <div className="relative">
            <motion.h2
              custom={0}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="font-grotesk uppercase text-cream
                         text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]
                         leading-[1.05] tracking-tight"
            >
              Mission +<br />Skill system
            </motion.h2>

            {/* Cursive overlay */}
            <motion.span
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="absolute bottom-0 right-0 translate-y-2
                         font-condiment text-neon mix-blend-exclusion
                         text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px]
                         rotate-2 pointer-events-none select-none"
            >
              Srikanta
            </motion.span>
          </div>

          {/* Right: description */}
          <motion.p
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="font-mono text-[12px] sm:text-[14px] uppercase text-cream/90 max-w-[420px] leading-relaxed"
          >
            {MISSION_NOTE}
          </motion.p>
        </div>

        {/* Mission pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {MISSION_PILLARS.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i + 3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="liquid-glass rounded-[22px] px-5 py-5"
            >
              <p className="font-grotesk text-neon text-[16px] uppercase tracking-wide">{item.title}</p>
              <p className="mt-2 font-mono text-[11px] sm:text-[12px] uppercase leading-relaxed text-cream/65">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Skill groups */}
        <div id="skills" className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <motion.article
              key={group.label}
              custom={i + 6}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="liquid-glass rounded-[24px] px-6 py-6 border border-white/8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45">{group.label}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-neon/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-cream/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
