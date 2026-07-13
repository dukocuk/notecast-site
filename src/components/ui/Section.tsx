import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

/**
 * A labelled <section> landmark. `titleId` wires the section to its heading via
 * aria-labelledby for assistive tech.
 */
export function Section({
  id,
  titleId,
  children,
  className,
}: {
  id?: string;
  titleId?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn('scroll-mt-20 py-20 sm:py-28', className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  titleId?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
