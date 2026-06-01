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

interface NftCard {
  videoUrl: string;
  score: string;
}

const NFT_CARDS: NftCard[] = [
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
];

function NftCard({ card, index }: { card: NftCard; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors duration-300 cursor-pointer"
    >
      {/* Square video container using aspect-ratio trick */}
      <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={card.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Bottom overlay bar */}
      <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-grotesk text-cream/70 text-[11px] uppercase tracking-widest">
            Rarity Score:
          </span>
          <span className="font-grotesk text-cream text-[16px] uppercase">
            {card.score}
          </span>
        </div>

        {/* Purple arrow button */}
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-200 flex-shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L12 9L6 15"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="w-full bg-[#010828] py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12 lg:mb-16">

          {/* Left: Heading */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <h2 className="font-grotesk text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-[1.05] m-0">
              Collection of
            </h2>
            <div className="ml-12 sm:ml-24 lg:ml-32">
              <span className="font-condiment text-neon text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.05] mix-blend-normal">
                Space
              </span>
              <span className="font-grotesk text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-[1.05]">
                {' '}objects
              </span>
            </div>
          </motion.div>

          {/* Right: See All Creators button */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col items-start sm:items-end cursor-pointer group"
          >
            <div className="flex flex-row items-end gap-2">
              <span className="font-grotesk text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase leading-none group-hover:text-neon transition-colors duration-200">
                SEE
              </span>
              <div className="flex flex-col mb-1 sm:mb-2">
                <span className="font-grotesk text-cream text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase leading-tight group-hover:text-neon transition-colors duration-200">
                  ALL
                </span>
                <span className="font-grotesk text-cream text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase leading-tight group-hover:text-neon transition-colors duration-200">
                  CREATORS
                </span>
              </div>
            </div>
            {/* Neon underbar */}
            <div className="w-full h-[6px] sm:h-[8px] lg:h-[10px] bg-neon mt-2 rounded-full" />
          </motion.div>
        </div>

        {/* NFT card grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {NFT_CARDS.map((card, i) => (
            <NftCard key={i} card={card} index={i + 2} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
