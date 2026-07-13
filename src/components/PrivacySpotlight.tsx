import { motion } from 'framer-motion';
import { CloudOff, ServerOff, KeyRound, ShieldCheck, X, Check } from 'lucide-react';
import { Container } from './ui/Container';
import { fadeUp, stagger, useReveal } from '../lib/motion';

const CLOUD_TOOLS = [
  'Uploads your audio to someone else’s servers',
  'Needs an account, and often a subscription',
  'Asks for API keys or cloud credentials',
  'Your recordings can be retained, breached, or leaked',
];

const NOTECAST = [
  'Captures and transcribes entirely on your device',
  'No account, no sign-up, no subscription',
  'No API keys — your local models do the work',
  'Nothing is uploaded, so there’s nothing to leak',
];

const PILLARS = [
  { icon: CloudOff, label: 'No cloud' },
  { icon: ServerOff, label: 'No server' },
  { icon: KeyRound, label: 'No keys' },
  { icon: ShieldCheck, label: 'Nothing to leak' },
];

export function PrivacySpotlight() {
  const reveal = useReveal();
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-title"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* distinct deep gradient band */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-700 via-brand-800 to-slate-900"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />
      </div>

      <Container>
        <motion.div variants={stagger} {...reveal} className="mx-auto max-w-2xl text-center">
          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300"
          >
            Your data stays here
          </motion.p>
          <motion.h2
            id="privacy-title"
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Your audio never leaves your machine
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-brand-100 text-pretty">
            Most transcription tools send your recordings to the cloud. NoteCast
            doesn’t send them anywhere — because there’s no cloud, no server, and
            no account involved at all.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeUp} {...reveal} className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {PILLARS.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/15 backdrop-blur"
            >
              <p.icon className="h-4 w-4 text-accent-300" aria-hidden />
              {p.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...reveal}
          className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2"
        >
          {/* Typical cloud tool */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-base font-semibold text-white">
              Typical cloud transcription tool
            </h3>
            <ul className="space-y-3">
              {CLOUD_TOOLS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-brand-100">
                  <X className="mt-0.5 h-5 w-5 flex-none text-rose-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NoteCast */}
          <div className="rounded-3xl border border-accent-300/30 bg-white p-6 shadow-soft-lg dark:bg-slate-900">
            <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-white">
              NoteCast
            </h3>
            <ul className="space-y-3">
              {NOTECAST.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
