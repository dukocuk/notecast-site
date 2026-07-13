import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { TRUST_CHIPS } from '../data/trust';
import { Container } from './ui/Container';
import { fadeUp, stagger, useReveal } from '../lib/motion';

export function TrustStrip() {
  const reveal = useReveal();
  return (
    <section aria-label="What NoteCast does not do" className="pb-4">
      <Container>
        <motion.ul
          variants={stagger}
          {...reveal}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {TRUST_CHIPS.map((chip) => (
            <motion.li
              key={chip}
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <Check className="h-4 w-4 text-emerald-500" aria-hidden />
              {chip}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
