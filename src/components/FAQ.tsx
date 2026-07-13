import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';
import { Container } from './ui/Container';
import { Section, SectionHeading } from './ui/Section';
import { fadeUp, stagger, useReveal } from '../lib/motion';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reveal = useReveal();

  return (
    <Section id="faq" titleId="faq-title">
      <Container>
        <SectionHeading
          titleId="faq-title"
          eyebrow="FAQ"
          title="Questions, answered plainly"
        />

        <motion.ul
          variants={stagger}
          {...reveal}
          className="mx-auto mt-12 max-w-2xl divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900"
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <motion.li key={item.question} variants={fadeUp}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 dark:hover:bg-slate-800/50"
                  >
                    <span className="text-base font-semibold text-slate-900 dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-none text-brand-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {item.answer}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}
