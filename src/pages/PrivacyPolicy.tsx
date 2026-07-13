import type { ReactNode } from 'react';
import { Container } from '../components/ui/Container';
import { Logo } from '../components/ui/Logo';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { Footer } from '../components/Footer';
import { CONTACT_EMAIL } from '../config';

const HOME = import.meta.env.BASE_URL;

/** Inline monospace token, matching the site's code/kbd styling. */
function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800 dark:bg-slate-800 dark:text-slate-200">
      {children}
    </code>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold sm:text-2xl">{children}</h2>;
}

function Term({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>;
}

export function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 dark:border-slate-800">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href={HOME} aria-label="NoteCast home" className="rounded-lg">
              <Logo />
            </a>
            <div className="flex items-center gap-3">
              <a
                href={HOME}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                ← Back to home
              </a>
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1">
        <Container>
          <article className="mx-auto max-w-3xl py-16 sm:py-20">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              NoteCast Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Last updated: 2026-07-10
            </p>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
              NoteCast is a browser extension that captures a browser tab’s audio,
              transcribes it on your device, and generates notes with a language
              model you run yourself. It is built so that{' '}
              <Term>your audio, transcripts, and notes never leave your machine</Term>.
            </p>

            <Heading>What NoteCast processes, and where</Heading>
            <ul className="mt-4 space-y-3 list-disc pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
              <li>
                <Term>Tab audio</Term> is captured only when you explicitly start a
                capture (toolbar button or keyboard shortcut) and is processed
                entirely on your device by a local Whisper speech-recognition model
                (WebGPU/WASM). Audio is never recorded to disk and never transmitted
                anywhere.
              </li>
              <li>
                <Term>Transcripts and notes</Term> are generated locally and stored
                only in your browser’s extension storage (<Code>chrome.storage.local</Code>)
                on your device. You can delete them at any time from the extension’s
                History view, or entirely by uninstalling the extension.
              </li>
              <li>
                <Term>Notes generation</Term> sends the transcript text to the Ollama
                server <Term>you configure</Term> — by default <Code>http://localhost:11434</Code>{' '}
                on your own machine. If you point NoteCast at a remote Ollama host or a
                proxy endpoint, transcript text is sent to that server of your choosing;
                NoteCast has no server of its own.
              </li>
              <li>
                <Term>Settings</Term> (model choices, Ollama host, optional API key for
                your own server) are stored in <Code>chrome.storage.local</Code> on your
                device only.
              </li>
            </ul>

            <Heading>Network connections NoteCast makes</Heading>
            <ul className="mt-4 space-y-3 list-disc pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
              <li>
                <Term>huggingface.co / hf.co</Term> — to download Whisper model weights
                the first time a model is used. This is a one-time download of public
                model files; no user data is sent. Weights are cached locally afterwards.
              </li>
              <li>
                <Term>Your configured Ollama host</Term> (default <Code>localhost</Code>) —
                transcript text, for notes generation, as described above.
              </li>
              <li>
                <Term>Nothing else.</Term> No analytics, no telemetry, no crash reporting,
                no ads.
              </li>
            </ul>

            <Heading>What NoteCast does NOT do</Heading>
            <ul className="mt-4 space-y-3 list-disc pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
              <li>No collection of personal information, browsing history, or usage data.</li>
              <li>
                No transmission of audio, transcripts, or notes to the developer or any
                third party.
              </li>
              <li>No sale or sharing of any data — there is no data to sell.</li>
              <li>
                No use of data for purposes unrelated to the extension’s single purpose
                (transcribing tab audio into notes).
              </li>
            </ul>

            <Heading>Permissions, briefly</Heading>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              <Code>tabCapture</Code> (capture the tab’s audio you ask it to),{' '}
              <Code>offscreen</Code> (the hidden page that holds the audio stream and runs
              Whisper), <Code>storage</Code> (save your sessions and settings locally),{' '}
              <Code>activeTab</Code>, <Code>alarms</Code>, <Code>notifications</Code>{' '}
              (failure alerts while the popup is closed), and host access to{' '}
              <Code>localhost</Code>/<Code>127.0.0.1</Code> (your Ollama),{' '}
              <Code>huggingface.co</Code> (model downloads), and <Code>youtube.com</Code>{' '}
              (a content script that reads the video’s current time so transcript lines
              link to the video timeline — it reads nothing else).
            </p>

            <Heading>Changes and contact</Heading>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Changes to this policy are published on this page with an updated date.
              Questions: email{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-400"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
