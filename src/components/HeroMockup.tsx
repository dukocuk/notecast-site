import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ListChecks, FileText, Radio } from 'lucide-react';

/**
 * A stylized browser-popup mock-up: a live transcript on the left and the
 * generated notes (Summary / Key points / Action items) on the right.
 * Pure JSX + CSS — no image assets, so it stays crisp and weightless.
 */

const transcript = [
  { t: '0:42', text: 'So the key trade-off here is latency versus accuracy…' },
  { t: '1:07', text: 'Larger models catch more nuance but run slower on CPU.' },
  { t: '1:29', text: 'For live notes, a smaller Whisper size usually feels better.' },
];

const keyPoints = [
  'Latency vs. accuracy is the central trade-off',
  'Smaller models feel better for live capture',
];

const actions = ['Try the Tiny model for lectures', 'Compare turbo on a recorded talk'];

export function HeroMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* soft glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-300/40 via-brand-200/20 to-accent-300/40 blur-2xl dark:from-brand-700/40 dark:via-brand-800/10 dark:to-accent-700/30"
      />

      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft-lg dark:border-slate-800 dark:bg-slate-900">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
          <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="mx-auto flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-400">
            <Radio className="h-3.5 w-3.5 text-accent-500" aria-hidden />
            <span>NoteCast — recording locally</span>
          </div>
        </div>

        <div className="grid gap-px bg-slate-100 sm:grid-cols-2 dark:bg-slate-800">
          {/* Transcript */}
          <div className="bg-white p-4 dark:bg-slate-900">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Live transcript
              </p>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-accent-600 dark:text-accent-400">
                <motion.span
                  className="h-2 w-2 rounded-full bg-accent-500"
                  animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                live
              </span>
            </div>
            <ul className="space-y-2.5">
              {transcript.map((line) => (
                <li key={line.t} className="flex gap-2 text-sm">
                  <span className="mt-0.5 font-mono text-xs font-medium text-brand-600 dark:text-brand-400">
                    {line.t}
                  </span>
                  <span className="leading-snug text-slate-600 dark:text-slate-300">
                    {line.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          <div className="space-y-4 bg-white p-4 dark:bg-slate-900">
            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <FileText className="h-3.5 w-3.5" aria-hidden /> Summary
              </p>
              <p className="text-sm leading-snug text-slate-600 dark:text-slate-300">
                A short walk-through of choosing a Whisper model size, balancing
                speed against transcription accuracy.
              </p>
            </div>

            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <ListChecks className="h-3.5 w-3.5" aria-hidden /> Key points
              </p>
              <ul className="space-y-1.5">
                {keyPoints.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    <span className="leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Action items
              </p>
              <ul className="space-y-1.5">
                {actions.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent-500" aria-hidden />
                    <span className="leading-snug">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* footer strip reinforcing the privacy story */}
        <div className="flex items-center justify-center gap-2 border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Everything above is generated on your device — nothing was uploaded.
        </div>
      </div>
    </div>
  );
}
