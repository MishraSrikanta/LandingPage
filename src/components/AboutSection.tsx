import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const PARA_TEXT =
  'A digital object fixed beyond time and place. An exploration of distance, form, and silence in space';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col justify-between h-full min-h-screen">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-0">

          {/* Left: Heading */}
          <div className="relative">
            <motion.h2
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="font-grotesk text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-[1.05] m-0"
            >
              Hello!
              <br />
              I'm orbis
            </motion.h2>

            {/* Cursive overlay */}
            <motion.span
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="absolute bottom-0 right-0 translate-y-1/4 font-condiment text-neon text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] rotate-[-2deg] mix-blend-exclusion pointer-events-none select-none"
            >
              Orbis
            </motion.span>
          </div>

          {/* Right: Description paragraph */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="font-mono text-cream text-[14px] sm:text-[16px] uppercase max-w-[266px] leading-relaxed"
          >
            {PARA_TEXT}
          </motion.p>
        </div>

        {/* Bottom decorative rows */}
        <div className="flex flex-row justify-between mt-auto pt-16">
          {/* Left column */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-6 max-w-[266px]"
          >
            <p className="font-mono text-[#010828] lg:text-cream/10 text-[13px] uppercase leading-relaxed">
              {PARA_TEXT}
            </p>
            <p className="font-mono text-[#010828] lg:text-cream/10 text-[13px] uppercase leading-relaxed">
              {PARA_TEXT}
            </p>
          </motion.div>

          {/* Right column (desktop only) */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="hidden lg:flex flex-col gap-6 max-w-[266px]"
          >
            <p className="font-mono text-cream/10 text-[13px] uppercase leading-relaxed">
              {PARA_TEXT}
            </p>
            <p className="font-mono text-cream/10 text-[13px] uppercase leading-relaxed">
              {PARA_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
