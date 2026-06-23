import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Link, Send, ArrowUpRight, PhoneCall } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  }),
};

const SOCIAL_LINKS = [
  { icon: Mail, label: 'Email', value: 'mishrasrikanta33@gmail.com', href: 'mishrasrikanta33@gmail.com', accent: '#6FFF00' },
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'srikanta-mishra-02a838230',
    href: 'https://www.linkedin.com/in/srikanta-mishra-02a838230',
    accent: '#0A66C2',
  },
  { icon: PhoneCall, label: 'Contact Number', value: '+91 9178393607', href: '#', accent: '#b724ff' },
];

const FAQ_ITEMS = [
  { q: 'What kind of projects do you take on?', a: 'I work on product-focused web experiences, interactive portfolios, AI-first tools, and growth landing pages.' },
  { q: 'Can you handle both design and development?', a: 'Yes. I combine UI strategy, motion direction, and frontend engineering to deliver cohesive outcomes.' },
  { q: 'How do you usually collaborate?', a: 'I prefer fast weekly iteration: align goals, ship increments, review outcomes, and refine with data.' },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className="flex items-center justify-between gap-4 py-5 border-b border-white/8">
          <span className="font-grotesk text-cream uppercase text-[14px] sm:text-[16px] tracking-wide leading-tight">
            {q}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center
                       group-hover:border-neon/50 transition-colors"
          >
            <ArrowUpRight size={14} className="text-cream/50 group-hover:text-neon transition-colors" />
          </motion.div>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="overflow-hidden"
      >
        <p className="font-mono text-cream/50 text-[12px] sm:text-[13px] uppercase leading-relaxed py-4 pr-12">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: '-8%' });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="w-full bg-background py-20 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <motion.p
            custom={0}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="font-mono text-neon text-[11px] uppercase tracking-[0.25em] mb-3"
          >
            — Open collaboration
          </motion.p>
          <motion.h2
            custom={1}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="font-grotesk uppercase text-cream
                       text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]
                       leading-[1.02] tracking-tight max-w-[700px]"
          >
            Let&apos;s build{' '}
            <span className="font-condiment normal-case text-neon text-[40px] sm:text-[54px] lg:text-[72px]">
              products
            </span>
            {' '}that matter
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Form */}
          <div ref={formRef}>
            <motion.form
              custom={0}
              initial="hidden"
              animate={formInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-cream/40">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="liquid-glass rounded-[14px] px-4 py-3.5 font-mono text-[13px] text-cream
                               placeholder:text-cream/25 bg-transparent outline-none
                               focus:ring-1 focus:ring-neon/40 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-cream/40">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="liquid-glass rounded-[14px] px-4 py-3.5 font-mono text-[13px] text-cream
                               placeholder:text-cream/25 bg-transparent outline-none
                               focus:ring-1 focus:ring-neon/40 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-cream/40">Subject</label>
                <input
                  type="text"
                  placeholder="What's the signal about?"
                  className="liquid-glass rounded-[14px] px-4 py-3.5 font-mono text-[13px] text-cream
                             placeholder:text-cream/25 bg-transparent outline-none
                             focus:ring-1 focus:ring-neon/40 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-cream/40">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Transmit your message into the void..."
                  className="liquid-glass rounded-[14px] px-4 py-3.5 font-mono text-[13px] text-cream
                             placeholder:text-cream/25 bg-transparent outline-none resize-none
                             focus:ring-1 focus:ring-neon/40 transition-all"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 mt-2
                           bg-neon text-background font-grotesk uppercase text-[13px] tracking-widest
                           rounded-[14px] px-6 py-4 transition-opacity hover:opacity-90"
              >
                {sent ? (
                  <>Signal sent</>
                ) : (
                  <>
                    <Send size={15} />
                    Send Signal
                  </>
                )}
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-neon text-[11px] uppercase tracking-widest text-center"
                >
                  Transmission confirmed — we'll respond shortly.
                </motion.p>
              )}
            </motion.form>
          </div>

          {/* Right: Social links + FAQ */}
          <div className="flex flex-col gap-10">

            {/* Social links */}
            <motion.div
              custom={1}
              initial="hidden"
              animate={formInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-5">
                Find us across the network
              </p>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, value, href, accent }) => (
                  <a
                    key={label}
                    href={href}
                    className="group liquid-glass rounded-[18px] px-5 py-4 flex items-center gap-4
                               hover:bg-white/5 transition-colors duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <Icon size={16} style={{ color: accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40">{label}</p>
                      <p className="font-grotesk text-cream uppercase text-[14px] truncate">{value}</p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-cream/20 group-hover:text-cream/60 transition-colors flex-shrink-0"
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              custom={2}
              initial="hidden"
              animate={formInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-4">
                Frequently asked
              </p>
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <span className="font-grotesk text-cream/20 text-[11px] uppercase tracking-widest">
            Srikanta.dev — {new Date().getFullYear()}
          </span>
          <span className="font-condiment text-neon/30 text-[22px]">
            Design. Build. Iterate.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
