import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Info, Puzzle } from 'lucide-react';
import { Container } from './ui/Container';
import { Section, SectionHeading } from './ui/Section';
import { Button } from './ui/Button';
import { CodeBlock } from './CodeBlock';
import { CHROME_STORE_URL } from '../config';
import { fadeUp, stagger, useReveal } from '../lib/motion';

export function QuickStart() {
  const reveal = useReveal();
  return (
    <Section id="setup" titleId="setup-title" className="bg-slate-50/60 dark:bg-slate-900/30">
      <Container>
        <SectionHeading
          titleId="setup-title"
          eyebrow="Quick start"
          title="Up and running in about two minutes"
          description="Install it and start transcribing — that part needs no setup at all. Add Ollama when you want the notes too."
        />

        <motion.ol
          variants={stagger}
          {...reveal}
          className="mx-auto mt-14 grid max-w-3xl gap-5"
        >
          {/* Step 1 */}
          <motion.li
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <StepHeader n={1} icon={Puzzle} title="Install the extension" />
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Add NoteCast to Chrome, Brave, or Edge (version 116 or newer). It’s
              free.
            </p>
            <div className="mt-4">
              <Button href={CHROME_STORE_URL} size="md">
                <Puzzle className="h-4 w-4" aria-hidden />
                Add to Chrome, Brave, or Edge
              </Button>
            </div>
          </motion.li>

          {/* Step 2 */}
          <motion.li
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <StepHeader n={2} icon={Download} title="Install Ollama — for the notes" />
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Transcription works on its own with zero setup. The notes half —
              summary, key decisions, action items — is written by a language
              model running locally in{' '}
              <a
                href="https://ollama.com"
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-400"
              >
                Ollama
              </a>
              . Install it, then pull a model:
            </p>
            <div className="mt-4">
              <CodeBlock code="ollama pull gemma3:4b" label="Pull the gemma3:4b model" />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
              Prefer not to touch a terminal? NoteCast can pull the model for you
              on first run — and if Ollama needs a one-time tweak to accept the
              extension, it shows you the exact command.
            </p>
          </motion.li>

          {/* Step 3 */}
          <motion.li
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <StepHeader n={3} icon={Play} title="Play a tab and start transcribing" />
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Open any audio or video in a tab and press Start transcribing — or
              use the shortcut{' '}
              <kbd className="rounded-md border border-slate-300 bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                Ctrl/Cmd + Shift + E
              </kbd>
              . The transcript starts filling in within about half a minute.{' '}
              <span className="text-slate-500 dark:text-slate-500">
                (On Edge, assign the shortcut yourself at{' '}
                <code className="font-mono text-xs">edge://extensions/shortcuts</code> —
                Edge doesn’t bind it automatically.)
              </span>
            </p>
            <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800 dark:bg-brand-950/40 dark:text-brand-200">
              <Info className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
              <span>
                The first run downloads the Whisper model weights once. After
                that, they’re cached and NoteCast works fully offline.
              </span>
            </div>
          </motion.li>
        </motion.ol>
      </Container>
    </Section>
  );
}

function StepHeader({
  n,
  icon: Icon,
  title,
}: {
  n: number;
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
        {n}
      </span>
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <Icon className="h-5 w-5 text-brand-500" aria-hidden />
        {title}
      </h3>
    </div>
  );
}