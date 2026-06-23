import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CARDS = [
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    focus: 'UI Systems',
    tools: ['Design Tokens', 'Tailwind', 'Component Thinking'],
  },
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    focus: 'Motion Language',
    tools: ['Framer Motion', 'Interaction Timing', 'Narrative Transitions'],
  },
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    focus: '3D Experiments',
    tools: ['Three.js', 'Scene Composition', 'Performance Mindset'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function SkillCard({
  video,
  focus,
  tools,
  index,
}: {
  video: string;
  focus: string;
  tools: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      whileHover={{ scale: 1.015 }}
      className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
    >
      {/* Square video */}
      <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Overlay bar */}
      <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase text-cream/65 tracking-widest">
            Skill Focus
          </p>
          <p className="font-grotesk text-[16px] text-cream uppercase">{focus}</p>
          <p className="mt-1 font-mono text-[10px] uppercase text-cream/45 leading-relaxed">
            {tools.join(' / ')}
          </p>
        </div>

        {/* Purple arrow button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full flex items-center justify-center
                     bg-gradient-to-br from-[#b724ff] to-[#7c3aed]
                     shadow-lg shadow-purple-500/50 flex-shrink-0"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9H14M14 9L9.5 4.5M14 9L9.5 13.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Collection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* ── Header row ── */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16"
        >
          {/* Left: heading */}
          <motion.div
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-grotesk uppercase text-cream
                           text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]
                           leading-[1.05] tracking-tight">
              Skill
            </h2>
            <h2 className="font-grotesk uppercase text-cream
                           text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]
                           leading-[1.05] tracking-tight
                           ml-12 md:ml-24 lg:ml-32">
              <span className="font-condiment normal-case text-neon
                               text-[36px] sm:text-[50px] md:text-[58px] lg:text-[68px]">
                Srikanta_landing_page
              </span>{' '}
              labs
            </h2>
          </motion.div>

          {/* Right: Supporting note */}
          <motion.div
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={1}
            className="max-w-[300px]"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide leading-relaxed text-cream/55">
              Each card maps a capability I repeatedly use to ship high-quality products.
            </p>
            <div className="bg-neon w-full h-[5px] mt-3 rounded-sm" />
          </motion.div>
        </div>

        {/* ── Skill Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <SkillCard key={i} video={card.video} focus={card.focus} tools={card.tools} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
