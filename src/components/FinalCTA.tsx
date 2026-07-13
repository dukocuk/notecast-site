import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { CHROME_STORE_URL } from '../config';
import { fadeUp, stagger, useReveal } from '../lib/motion';

export function FinalCTA() {
  const reveal = useReveal();
  return (
    <section aria-labelledby="final-cta-title" className="py-20 sm:py-28">
      <Container>
        <motion.div
          variants={stagger}
          {...reveal}
          className="relative overflow-hidden rounded-4xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-white to-accent-50 px-6 py-14 text-center shadow-soft sm:px-12 dark:border-brand-800/50 dark:from-brand-950/40 dark:via-slate-900 dark:to-accent-950/30"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/30" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-accent-300/30 blur-3xl dark:bg-accent-700/25" />
          </div>

          <motion.h2
            id="final-cta-title"
            variants={fadeUp}
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Clean notes from any tab — and they never leave your machine
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-slate-600 text-pretty dark:text-slate-400"
          >
            Free and private by design. Add NoteCast and start capturing in a
            couple of minutes.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={CHROME_STORE_URL} size="lg">
              <Puzzle className="h-5 w-5" aria-hidden />
              Add to Chrome / Brave
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            100% local · No account · Free
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
