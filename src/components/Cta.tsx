import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Link, GitBranch } from 'lucide-react';

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4';

const HEADING_LINES = [
  { text: 'LET US BUILD.', extraClass: 'mb-4 sm:mb-6 md:mb-10 lg:mb-12' },
  { text: 'CLARIFY THE MISSION.', extraClass: '' },
  { text: 'SHIP THE EXPERIENCE.', extraClass: '' },
  { text: 'ITERATE WITH DATA.', extraClass: '' },
];

const SOCIAL_LINKS = [
  { icon: Mail, href: 'mailto:hello@srikanta.dev', label: 'Email' },
  {
    icon: Link,
    href: 'https://www.linkedin.com/in/srikanta-mishra-02a838230',
    label: 'LinkedIn',
  },
  { icon: GitBranch, href: '#', label: 'GitHub' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number],
    },
  }),
};

export default function Cta() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Full-width video at native aspect ratio */}
      <video
        className="w-full h-auto block"
        src={CTA_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/20" />

      {/* Text block — right aligned */}
      <div className="absolute inset-0 flex items-center justify-end
                      lg:pr-[20%] lg:pl-[15%] px-6 sm:px-10">
        <div className="relative">
          {/* "Go beyond" cursive accent */}
          <motion.span
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="absolute -top-8 sm:-top-12 lg:-top-16 left-0
                       font-condiment text-neon mix-blend-exclusion
                       text-[17px] sm:text-[32px] md:text-[48px] lg:text-[68px]
                       -rotate-2 pointer-events-none select-none"
          >
            Start a mission
          </motion.span>

          {/* Heading lines */}
          <div className="text-right">
            {HEADING_LINES.map(({ text, extraClass }, i) => (
              <motion.h2
                key={i}
                custom={i + 1}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                className={`font-grotesk uppercase text-cream tracking-tight
                            text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px]
                            leading-[1.05] ${extraClass}`}
              >
                {text}
              </motion.h2>
            ))}
          </div>
        </div>
      </div>

      {/* Social icons — bottom-left */}
      <motion.div
        custom={5}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="absolute left-[8%]
                   bottom-[12%] sm:bottom-[14%] md:bottom-[16%] lg:bottom-[20%]"
      >
        <div className="liquid-glass
                        rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem]
                        overflow-hidden flex flex-col">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              className={`flex items-center justify-center text-cream transition-colors
                          w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                          h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[5.5rem]
                          ${i < SOCIAL_LINKS.length - 1 ? 'border-b border-white/10' : ''}`}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
