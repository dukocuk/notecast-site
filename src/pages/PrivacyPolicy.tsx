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
              Last updated: 2026-07-20
            </p>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
              NoteCast is a browser extension that turns audio you choose — a browser
              tab that is playing, or an audio/video file on your device — into a
              transcript and structured notes, using a speech model that runs on your
              device and a language model you run yourself. It is built so that{' '}
              <Term>your audio, transcripts, and notes never leave your machine</Term>.
            </p>

            <Heading>What NoteCast processes, and where</Heading>
            <ul className="mt-4 space-y-3 list-disc pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
              <li>
                <Term>Audio you select</Term> is captured only when you explicitly start
                a session (toolbar button or keyboard shortcut) and is processed entirely
                on your device by a local Whisper speech-recognition model (WebGPU/WASM).
                On Chrome, Brave, and Edge this is the audio of the tab you chose; on
                Firefox it is the media element (the video or audio player) on the page
                you chose. Audio is never written to disk and never transmitted anywhere.
              </li>
              <li>
                <Term>Audio and video files you pick</Term> for the “Transcribe file”
                feature are read locally by the extension and run through that same
                on-device model. The file is never uploaded, never copied elsewhere, and
                NoteCast keeps no copy of it — only the transcript it produces.
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
                on your own machine. If you point NoteCast at a remote Ollama host you run,
                transcript text is sent to that server of your choosing; NoteCast has no
                server of its own.
              </li>
              <li>
                <Term>Downloaded speech models</Term> are stored by your browser in its own
                model cache on your device (not in extension storage). Settings lists the
                models you have downloaded and lets you delete them to reclaim disk space.
              </li>
              <li>
                <Term>Settings</Term> (model choices, Ollama host, languages, optional API
                key for your own server) are stored in <Code>chrome.storage.local</Code> on
                your device only.
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
                NoteCast checks that the server is reachable, lists the models you already
                have installed, sends transcript text to generate notes, and, only when you
                ask it to during setup, tells that server to download the model you picked.
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
                (turning audio you choose into notes).
              </li>
            </ul>

            <Heading>Permissions, briefly</Heading>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              <Code>storage</Code> (save your sessions and settings locally),{' '}
              <Code>activeTab</Code>, <Code>scripting</Code>, <Code>alarms</Code>{' '}
              (internal scheduling only — no data access), <Code>notifications</Code>{' '}
              (failure alerts while the popup is closed), and host access to{' '}
              <Code>localhost</Code>/<Code>127.0.0.1</Code> (your Ollama),{' '}
              <Code>huggingface.co</Code> (model downloads), and <Code>youtube.com</Code>.
              The Chrome/Edge build additionally uses <Code>tabCapture</Code> (capture the
              audio of the tab you ask it to) and <Code>offscreen</Code> (the hidden page
              that holds the audio stream and runs Whisper); the Firefox build has neither
              and captures the page’s media element instead.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              While a session is running, a small content script runs in the page you chose
              and reads only its media player’s current playback time, the video id, and the
              page title — the time and id so transcript lines become clickable and link to
              the right moment, the title so the session can be named after what you were
              listening to. When you click a transcript timestamp it seeks that player to
              the moment you clicked. It reads nothing else on the page. On non-YouTube
              sites this runs under <Code>activeTab</Code> (the tab you started the session
              on), not a standing permission on every site.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Broad host access (<Code>http://*/*</Code>, <Code>https://*/*</Code>) is
              optional and is never requested at install. NoteCast asks for a single
              address, through your browser’s own permission prompt, only if you change the
              Ollama server address away from <Code>localhost</Code> to a host you run
              yourself.
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
