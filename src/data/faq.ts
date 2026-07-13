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
      'No. Tab audio is captured, transcribed, and summarized entirely on your own machine. Your audio, transcripts, and notes never leave your device — there is no server to send them to.',
  },
  {
    question: 'Do I need an account or API key?',
    answer:
      'No account, no sign-up, and no API keys. Because everything runs locally, there is nothing to log in to and no credentials to manage.',
  },
  {
    question: 'What do I need installed?',
    answer:
      'Chrome or Brave version 116 or newer, and Ollama with a model pulled (for example, run “ollama pull llama3.1”). The first capture downloads the Whisper model weights once, then works offline.',
  },
  {
    question: 'Does it work on YouTube?',
    answer:
      'Yes. On YouTube, every transcript line deep-links to the exact moment in the video. If you navigate to a new video mid-recording, NoteCast auto-splits the session without interrupting capture.',
  },
  {
    question: 'Which browsers are supported?',
    answer:
      'NoteCast is a Manifest V3 extension for Chromium browsers — specifically Chrome and Brave, version 116 and newer.',
  },
];
