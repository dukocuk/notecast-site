import type { LucideIcon } from 'lucide-react';
import {
  Radio,
  ShieldCheck,
  FileAudio,
  Puzzle,
  Keyboard,
  History,
  Languages,
  FileDown,
  Gauge,
  Boxes,
  PictureInPicture2,
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
      'The transcript grows every 20–30 seconds, and your summary, key points, decisions, action items, and open questions regenerate right alongside it.',
  },
  {
    icon: ShieldCheck,
    title: '100% on-device transcription',
    description:
      'Your audio is transcribed on your machine and never leaves it. Transcripts, notes, and settings stay in local storage — no account, no telemetry, nothing sent to us.',
  },
  {
    icon: YoutubeIcon,
    title: 'YouTube timeline deep-links',
    description:
      'Every transcript line links to the exact moment in the video — and seeks the tab’s own player elsewhere. Switch videos mid-session and NoteCast splits the session for you.',
  },
  {
    icon: FileAudio,
    title: 'Transcribe a file from your disk',
    description:
      'Run an mp3, wav, m4a, ogg, flac, mp4, webm, or mov through the very same pipeline, with a progress bar and time remaining. Nothing is uploaded.',
  },
  {
    icon: Puzzle,
    title: 'Chrome, Brave, and Edge',
    description:
      'A Manifest V3 extension for Chromium browsers, version 116 and newer. A Firefox build is on the way.',
  },
  {
    icon: Keyboard,
    title: 'Keyboard shortcut',
    description:
      'Start and stop transcribing with Ctrl/Cmd + Shift + E — no need to open the popup first.',
  },
  {
    icon: History,
    title: 'Session history',
    description:
      'Every session is saved locally, so you can revisit past lectures, meetings, and talks — and regenerate their notes — whenever you like.',
  },
  {
    icon: Languages,
    title: 'Speaks your language',
    description:
      '28 interface languages with right-to-left layout, 28 transcription languages with auto-detect, and notes written in whichever one you choose.',
  },
  {
    icon: FileDown,
    title: 'Markdown & plain-text export',
    description:
      'Take your notes anywhere. Copy as Markdown, or export a clean Markdown or plain-text file with action items as checkboxes.',
  },
  {
    icon: Gauge,
    title: 'Choose your Whisper model',
    description:
      'Pick Base, Small, Medium, or Large “turbo” — multilingual or English-only — to trade speed for accuracy on your hardware. Delete the weights later to reclaim the disk space.',
  },
  {
    icon: Boxes,
    title: 'Bring your own Ollama model',
    description:
      'Notes are written by a local model you choose in Ollama. Transcription works with zero setup; notes need Ollama installed once, and NoteCast walks you through it on first run.',
  },
  {
    icon: PictureInPicture2,
    title: 'Pause, resume, pop out',
    description:
      'Pause mid-session and pick up exactly where you left off, or pop the panel into its own window and keep it beside what you’re watching.',
  },
];