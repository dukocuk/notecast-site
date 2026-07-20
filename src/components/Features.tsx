import { motion } from 'framer-motion';
import { FEATURES } from '../data/features';
import { Container } from './ui/Container';
import { Section, SectionHeading } from './ui/Section';
import { fadeUp, stagger, useReveal } from '../lib/motion';

export function Features() {
  const reveal = useReveal();
  return (
    <Section id="features" titleId="features-title">
      <Container>
        <SectionHeading
          titleId="features-title"
          eyebrow="Features"
          title="Everything you need, nothing you don’t"
          description="Live transcripts, structured notes, and clean exports — all running on your own machine, all yours to keep."
        />

        <motion.ul
          variants={stagger}
          {...reveal}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.li
              key={feature.title}
              variants={fadeUp}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
            >
              <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-950/50 dark:text-brand-300">
                <feature.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}