import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import liveShot from '../assets/screen-live.png';
import notesShot from '../assets/screen-notes.png';
import transcriptShot from '../assets/screen-transcript.png';
import historyShot from '../assets/screen-history.png';

/**
 * An auto-rotating showcase of real NoteCast screenshots — the Notes, Transcript
 * and History tabs. The images already include the app's window chrome and
 * background, so we just cross-fade between them inside a soft-glowing frame.
 * Auto-rotation is disabled for anyone who prefers reduced motion; the dot
 * controls still let them switch slides.
 */

const slides = [
  {
    src: liveShot,
    label: 'Live',
    alt: 'NoteCast actively transcribing a lecture, with Pause and Stop controls, a GPU badge and time-stamped segments streaming into the Transcript tab.',
  },
  {
    src: notesShot,
    label: 'Notes',
    alt: 'NoteCast Notes tab showing an auto-generated summary, key decisions and key points for a lecture on theories of learning.',
  },
  {
    src: transcriptShot,
    label: 'Transcript',
    alt: 'NoteCast Transcript tab showing the time-stamped segments of a finished capture, ready to review or export.',
  },
  {
    src: historyShot,
    label: 'History',
    alt: 'NoteCast History tab listing previously captured sessions with their dates, durations and segment counts.',
  },
];

const ROTATE_MS = 4000;

export function HeroMockup() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative">
      {/* soft glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-300/40 via-brand-200/20 to-accent-300/40 blur-2xl dark:from-brand-700/40 dark:via-brand-800/10 dark:to-accent-700/30"
      />

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-soft-lg dark:border-slate-800">
        {/* Fixed-ratio stage so slides can cross-fade without shifting height. */}
        <div className="relative aspect-[1280/736]">
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={active}
              src={slides[active].src}
              alt={slides[active].alt}
              width={1280}
              height={736}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Dot controls */}
      <div className="mt-4 flex items-center justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${slide.label}`}
            aria-current={i === active}
            className={
              i === active
                ? 'h-2.5 w-6 rounded-full bg-brand-500 transition-all'
                : 'h-2.5 w-2.5 rounded-full bg-slate-300 transition-all hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
            }
          />
        ))}
      </div>
    </div>
  );
}
