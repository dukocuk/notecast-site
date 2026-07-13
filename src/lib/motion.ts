import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

/**
 * Shared entrance variants. The "hidden" state is only ever applied when the
 * user is happy with motion — see the hooks below, which fall back to the
 * visible "show" state for anyone who prefers reduced motion so content is
 * never left invisible.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/**
 * Props for a scroll-triggered reveal. When the user prefers reduced motion we
 * start at the visible state so nothing depends on an animation to appear.
 */
export function useReveal() {
  const reduce = useReducedMotion();
  if (reduce) {
    return { initial: 'show' as const, animate: 'show' as const };
  }
  return {
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, margin: '-80px' },
  };
}

/**
 * Props for an on-mount reveal (e.g. the hero), with the same reduced-motion
 * fallback to a visible starting state.
 */
export function useEntrance() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? ('show' as const) : ('hidden' as const),
    animate: 'show' as const,
  };
}
