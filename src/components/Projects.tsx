import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  link: string;
  mission: string;
  stack: string[];
  impact: string;
  accent: 'neon' | 'purple' | 'cyan';
}

const PROJECTS: Project[] = [
  {
    id: '01',
    number: '01',
    title: 'FinanceGPT',
    link: 'https://finance-gpt-nu.vercel.app/',
    mission: 'Make financial reasoning and market exploration faster for everyday decision-making.',
    stack: ['React', 'TypeScript', 'AI UX'],
    impact: 'AI-assisted interface for faster analysis loops',
    accent: 'neon',
  },
  {
    id: '02',
    number: '02',
    title: '3D Portfolio',
    link: 'https://3-d-portfolio-y8uy.vercel.app/',
    mission: 'Turn personal storytelling into a spatial, memorable interactive experience.',
    stack: ['Three.js', 'Framer Motion', 'Web Interactions'],
    impact: 'High-retention visual identity and immersive navigation',
    accent: 'purple',
  },
  {
    id: '03',
    number: '03',
    title: 'Three Particles',
    link: 'https://three-material-examples.vercel.app/',
    mission: 'Explore lightweight real-time visuals for expressive product surfaces.',
    stack: ['Three.js', 'Shaders', 'Performance Tuning'],
    impact: 'Reusable visual experiments for future interfaces',
    accent: 'cyan',
  },
  {
    id: '04',
    number: '04',
    title: 'Kawasaki Project',
    link: 'https://kawasaki-project-8ry6.vercel.app/',
    mission: 'Blend bold branding and conversion-focused UI in a modern launch page.',
    stack: ['React', 'Responsive UI', 'Motion Design'],
    impact: 'Story-led layout optimized for engagement',
    accent: 'neon',
  },
];

const ACCENT = {
  neon: {
    text: 'text-neon',
    border: 'border-neon/30 group-hover:border-neon',
    bar: 'bg-neon',
  },
  purple: {
    text: 'text-[#b724ff]',
    border: 'border-[#b724ff]/30 group-hover:border-[#b724ff]',
    bar: 'bg-[#b724ff]',
  },
  cyan: {
    text: 'text-[#00e5ff]',
    border: 'border-[#00e5ff]/30 group-hover:border-[#00e5ff]',
    bar: 'bg-[#00e5ff]',
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number],
    },
  }),
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 px-6 py-6 lg:py-8 rounded-[24px] liquid-glass border border-white/5 ${ACCENT[project.accent].border} hover:bg-white/5 transition-all duration-500`}
      >
        <span className={`font-grotesk text-[11px] uppercase tracking-widest opacity-40 lg:w-10 flex-shrink-0 ${ACCENT[project.accent].text}`}>
          {project.number}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-grotesk text-cream uppercase text-[20px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight">
            {project.title}
          </h3>
          <p className="font-mono text-cream/65 text-[11px] sm:text-[12px] uppercase leading-relaxed mt-2 max-w-[760px]">
            Mission: {project.mission}
          </p>
          <p className="font-mono text-cream/45 text-[10px] sm:text-[11px] uppercase leading-relaxed mt-2 break-all">
            {project.link}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-cream/75"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-neon/25 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-neon/90">
              {project.impact}
            </span>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.12, rotate: 8 }}
          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border ${ACCENT[project.accent].border.split(' ')[0]} group-hover:bg-white/10 transition-all duration-300`}
        >
          <ArrowUpRight size={18} className={ACCENT[project.accent].text} />
        </motion.div>

        <span
          className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${ACCENT[project.accent].bar}`}
        />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

  return (
    <section id="projects" className="w-full bg-background py-20 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14">
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="font-mono text-neon text-[11px] uppercase tracking-[0.25em] mb-3"
            >
                - Selected projects
            </motion.p>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight"
            >
              Project{' '}
              <span className="font-condiment normal-case text-neon text-[40px] sm:text-[54px] lg:text-[72px]">
                Missions
              </span>
            </motion.h2>
          </div>

          <motion.p
            custom={2}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="font-mono text-cream/40 text-[12px] uppercase max-w-[260px] leading-relaxed"
          >
            Built to solve meaningful problems through strong interface systems and rapid execution.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-cream/20">
            {PROJECTS.length} active missions
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
