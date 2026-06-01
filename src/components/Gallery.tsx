import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GALLERY_ITEMS = [
  {
    id: 'g1',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    title: 'Deep Nebula #001',
    category: 'Genesis',
    edition: '1 / 1',
  },
  {
    id: 'g2',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    title: 'Void Signal #007',
    category: 'Protocol',
    edition: '7 / 50',
  },
  {
    id: 'g3',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    title: 'Relic Fragment #033',
    category: 'Relics',
    edition: '33 / 100',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number],
    },
  }),
};

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

  return (
    <section id="gallery" className="w-full bg-background py-20 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14">
        <div ref={headerRef} className="mb-10 lg:mb-14">
          <motion.p
            custom={0}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="font-mono text-neon text-[11px] uppercase tracking-[0.25em] mb-3"
          >
            - Archived Gallery
          </motion.p>
          <motion.h2
            custom={1}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]"
          >
            Gallery Archive
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="liquid-glass rounded-[24px] overflow-hidden"
            >
              <div className="relative w-full pb-[75%]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="px-4 py-3">
                <p className="font-grotesk text-cream uppercase text-[14px]">{item.title}</p>
                <p className="font-mono text-cream/50 uppercase text-[10px] mt-1">
                  {item.category} / {item.edition}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
