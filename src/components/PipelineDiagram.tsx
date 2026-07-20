import { AudioLines, Cpu, Bot, NotebookPen, MonitorSmartphone, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stage {
  icon: LucideIcon;
  label: string;
  sub: string;
}

const STAGES: Stage[] = [
  { icon: AudioLines, label: 'Tab or file audio', sub: 'the tab or file you pick' },
  { icon: Cpu, label: 'On-device Whisper', sub: 'WebGPU → WASM' },
  { icon: Bot, label: 'Your local Ollama', sub: 'your own model' },
  { icon: NotebookPen, label: 'Live notes', sub: 'summary, points, actions' },
];

/**
 * The core visual: the tab or file you pick → on-device Whisper → your local
 * Ollama → live notes, all enclosed inside a dashed "Your computer" boundary to
 * make it unmistakable that nothing leaves the device.
 */
export function PipelineDiagram() {
  return (
    <div className="relative rounded-4xl border-2 border-dashed border-brand-300 bg-gradient-to-b from-brand-50/60 to-white p-5 sm:p-8 dark:border-brand-700/70 dark:from-brand-950/30 dark:to-slate-900/20">
      <div className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-300">
        <MonitorSmartphone className="h-4 w-4" aria-hidden />
        Your computer — nothing leaves this boundary
      </div>

      <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
        {STAGES.map((stage, i) => (
          <li key={stage.label} className="contents">
            <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                <stage.icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {stage.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{stage.sub}</span>
            </div>

            {i < STAGES.length - 1 && (
              <ArrowRight
                className="mx-auto h-5 w-5 flex-none rotate-90 text-brand-400 md:rotate-0"
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>

      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
        No cloud services, no accounts, no API keys — every step runs where your
        browser does.
      </p>
    </div>
  );
}