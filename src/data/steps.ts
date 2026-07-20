import type { LucideIcon } from 'lucide-react';
import { Play, AudioLines, Sparkles } from 'lucide-react';

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    icon: Play,
    title: 'Start on a tab, or pick a file',
    description:
      'Open any lecture, meeting, video, podcast, or webinar in a tab and press Start — or tap Ctrl/Cmd + Shift + E. You can also transcribe an audio or video file straight from your disk.',
  },
  {
    icon: AudioLines,
    title: 'Whisper transcribes on your device',
    description:
      'The audio is transcribed locally with Whisper, on your GPU (WebGPU) or CPU (WASM). Pick Base, Small, Medium, or Large depending on how much accuracy you want. Nothing is uploaded.',
  },
  {
    icon: Sparkles,
    title: 'Your Ollama model writes the notes',
    description:
      'A local Ollama model turns the growing transcript into a live summary, key points, and action items as you watch. One-time install — NoteCast sets it up for you on first run.',
  },
];