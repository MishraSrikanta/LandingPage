import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Link, GitBranch } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const SocialIconButton = ({ children }: { children: React.ReactNode }) => (
  <button className="flex items-center justify-center text-cream hover:bg-white/10 transition-colors duration-200 w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[4.5rem] md:h-[3.375rem] lg:h-[5.25rem]">
    {children}
  </button>
);

const LINKEDIN_URL = 'https://www.linkedin.com/in/srikanta-mishra-02a838230';

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#010828]">
      {/* Full-width video at native aspect ratio */}
      <video
        className="w-full h-auto block"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12 relative h-full">

          {/* Heading block — right aligned */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="absolute right-4 sm:right-8 lg:right-0 top-1/2 -translate-y-1/2 lg:pr-[20%] lg:pl-[15%] text-right"
          >
            {/* Cursive "Go beyond" accent */}
            <span className="absolute -top-6 sm:-top-10 left-0 font-condiment text-neon text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] mix-blend-exclusion -rotate-1 pointer-events-none select-none">
              Go beyond
            </span>

            <h2 className="font-grotesk text-cream uppercase m-0 leading-[1.05]">
              <span className="block text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                JOIN US.
              </span>
              <span className="block text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px]">
                REVEAL WHAT'S HIDDEN.
              </span>
              <span className="block text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px]">
                DEFINE WHAT'S NEXT.
              </span>
              <span className="block text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px]">
                FOLLOW THE SIGNAL.
              </span>
            </h2>
          </motion.div>

          {/* Social icons — bottom left */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] md:bottom-[16%] lg:bottom-[20%]"
          >
            <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem] flex flex-col overflow-hidden">
              <div className="border-b border-white/10">
                <SocialIconButton>
                  <Mail size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </SocialIconButton>
              </div>
              <div className="border-b border-white/10">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <SocialIconButton>
                    <Link size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </SocialIconButton>
                </a>
              </div>
              <SocialIconButton>
                <GitBranch size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </SocialIconButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
