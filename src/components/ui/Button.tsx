import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-brand-400 dark:focus-visible:ring-offset-slate-950 disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-500 hover:shadow-soft-lg active:scale-[0.98]',
  secondary:
    'border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-brand-300 hover:text-brand-700 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-white',
  ghost:
    'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
};

const sizes: Record<Size, string> = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

interface ButtonProps {
  as?: 'a' | 'button';
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  external?: boolean;
}

export function Button({
  as = 'a',
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
  ariaLabel,
  external = true,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (as === 'button') {
    return (
      <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </button>
    );
  }

  const isAnchorLink = href?.startsWith('#');
  const rel = external && !isAnchorLink ? 'noreferrer noopener' : undefined;
  const target = external && !isAnchorLink ? '_blank' : undefined;

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className={classes}
    >
      {children}
    </a>
  );
}
