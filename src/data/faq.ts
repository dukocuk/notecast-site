export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is it really free?',
    answer:
      'Yes. NoteCast is completely free. There is no paid tier, no subscription, and no “pro” upsell.',
  },
  {
    question: 'Does my audio go to the cloud?',
    answer:
      'No. Your audio is transcribed on your own machine and never leaves it — there is no upload, and nothing is ever sent to us. Notes are written by Ollama, which runs on your computer by default. If you deliberately point NoteCast at a remote Ollama server you host yourself, the transcript text goes to that machine — your own — and still never the audio.',
  },
  {
    question: 'Do I need an account or API key?',
    answer:
      'No account, no sign-up, and no vendor API keys. Everything runs on your own models, so there is nothing to log in to and no billing to set up. (If you host Ollama on your own server and protect it with a key, you can enter that in Settings — but that key is yours, not ours.)',
  },
  {
    question: 'What do I need installed?',
    answer:
      'For transcription, nothing but the extension — it works with zero setup. The notes half needs Ollama with a model pulled, for example “ollama pull gemma3:4b”. NoteCast can also pull the model for you on first run. The first run downloads the Whisper model weights once; after that they are cached and it works fully offline.',
  },
  {
    question: 'Does it work on YouTube?',
    answer:
      'Yes. On YouTube, every transcript line deep-links to the exact moment in the video. If you navigate to a new video mid-session, NoteCast auto-splits the session and keeps transcribing without interruption.',
  },
  {
    question: 'Which browsers are supported?',
    answer:
      'Chrome, Brave, and Edge, version 116 and newer — the same Manifest V3 package works in all three. A Firefox build is on the way. On Edge you assign the keyboard shortcut yourself at edge://extensions/shortcuts.',
  },
  {
    question: 'Can I transcribe a file I already have?',
    answer:
      'Yes. Drop in an mp3, wav, m4a, ogg, flac, mp4, webm, or mov and it runs through the same on-device pipeline, with a progress bar and time remaining. The file is never uploaded — it is read straight from your device.',
  },
];