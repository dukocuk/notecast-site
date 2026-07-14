import type { LucideIcon } from 'lucide-react';
import {
  Radio,
  ShieldCheck,
  Puzzle,
  Keyboard,
  History,
  FileDown,
  Gauge,
  Boxes,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { YoutubeIcon } from '../components/ui/BrandIcons';

export interface Feature {
  icon: LucideIcon | ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Radio,
    title: 'Live notes as you watch',
    description:
      'The transcript grows every 20–30 seconds and your summary, key points, and action items regenerate right alongside it.',
  },
  {
    icon: ShieldCheck,
    title: '100% on-device privacy',
    description:
      'Audio, transcripts, and notes are created and stored on your machine. Nothing is uploaded, ever.',
  },
  {
    icon: YoutubeIcon,
    title: 'YouTube timeline deep-links',
    description:
      'Every transcript line links to the exact moment in the video. Change videos mid-recording and the session auto-splits.',
  },
  {
    icon: Puzzle,
    title: 'Works with Chrome & Brave',
    description:
      'A Manifest V3 extension for Chromium browsers, version 116 and newer.',
  },
  {
    icon: Keyboard,
    title: 'Keyboard shortcut',
    description:
      'Start and stop capture with Ctrl/Cmd + Shift + E — no need to open the popup first.',
  },
  {
    icon: History,
    title: 'Session history',
    description:
      'Every capture is saved locally so you can revisit past lectures, meetings, and talks whenever you like.',
  },
  {
    icon: FileDown,
    title: 'Markdown & plain-text export',
    description:
      'Take your notes anywhere. Export a clean Markdown file or plain text in one click.',
  },
  {
    icon: Gauge,
    title: 'Choose your Whisper model',
    description:
      'Pick a size from Tiny to Large “turbo” to trade transcription speed for accuracy on your hardware.',
  },
  {
    icon: Boxes,
    title: 'Bring your own Ollama model',
    description:
      'Notes are written by a local language model you already run in Ollama. Use the model you prefer.',
  },
];
