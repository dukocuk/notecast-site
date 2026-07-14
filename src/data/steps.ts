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
    title: 'Play a tab and hit Start',
    description:
      'Open any lecture, meeting, video, podcast, or webinar in a tab and press Start — or just tap Ctrl/Cmd + Shift + E.',
  },
  {
    icon: AudioLines,
    title: 'Whisper transcribes on your device',
    description:
      'NoteCast captures the tab’s audio and transcribes it locally with Whisper, running on your GPU (WebGPU) or CPU (WASM).',
  },
  {
    icon: Sparkles,
    title: 'Your Ollama model writes the notes',
    description:
      'A local Ollama model turns the growing transcript into a live summary, key points, and action items as you watch.',
  },
];
