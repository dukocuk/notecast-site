import { motion } from 'framer-motion';
import { STEPS } from '../data/steps';
import { Container } from './ui/Container';
import { Section, SectionHeading } from './ui/Section';
import { PipelineDiagram } from './PipelineDiagram';
import { fadeUp, stagger, useReveal } from '../lib/motion';

export function HowItWorks() {
  const reveal = useReveal();
  return (
    <Section id="how-it-works" titleId="how-it-works-title" className="bg-slate-50/60 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          titleId="how-it-works-title"
          eyebrow="How it works"
          title="From any audio to structured notes in three steps"
          description="Play a video, start a lecture, or pick a file from your disk. Hit Start and watch the transcript and notes build themselves — every second of it on your own machine."
        />

        <motion.ol
          variants={stagger}
          {...reveal}
          className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft">
                  <step.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div variants={fadeUp} {...reveal} className="mx-auto mt-12 max-w-4xl">
          <PipelineDiagram />
        </motion.div>
      </Container>
    </Section>
  );
}