/**
 * lucide-react dropped brand glyphs, so we ship small, faithful SVGs for the
 * few brands we reference. They mirror lucide's API (className + aria-hidden).
 */
type IconProps = { className?: string; 'aria-hidden'?: boolean };

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="m10 9 5 3-5 3V9z" fill="currentColor" />
    </svg>
  );
}
