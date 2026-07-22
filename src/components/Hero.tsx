import { motion } from 'framer-motion';
import { Lock, Puzzle } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { HeroMockup } from './HeroMockup';
import { CHROME_STORE_URL } from '../config';
import { fadeUp, stagger, useEntrance } from '../lib/motion';

export function Hero() {
  const entrance = useEntrance();
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Warm background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl animate-blob dark:bg-brand-800/30" />
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-accent-300/40 blur-3xl animate-blob dark:bg-accent-800/25" style={{ animationDelay: '-6s' }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl animate-blob dark:bg-brand-900/30" style={{ animationDelay: '-12s' }} />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <motion.div variants={stagger} {...entrance}>
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-300"
            >
              <Lock className="h-3.5 w-3.5" aria-hidden />
              Private by design — your audio never leaves your machine
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Turn anything you hear into{' '}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                structured notes
              </span>{' '}
              — privately.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty dark:text-slate-400"
            >
              Lectures, meetings, videos, podcasts — or an audio file sitting on
              your disk. NoteCast transcribes it on your device with Whisper and
              turns it into a live summary, key points, and action items using
              your own local model. Nothing is uploaded.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={CHROME_STORE_URL} size="lg">
                <Puzzle className="h-5 w-5" aria-hidden />
                Add to Chrome / Brave / Edge
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400"
            >
              100% local · No account · No API keys · Free
            </motion.p>

          </motion.div>

          <motion.div
            initial={entrance.initial === 'show' ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}