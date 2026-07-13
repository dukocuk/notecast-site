export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M7 5h6a4 4 0 0 1 4 4v9l-4.2-3.2H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z"
              fill="currentColor"
            />
            <path
              d="M8 9.5h5M8 12.5h3.5"
              stroke="#5b45e0"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          NoteCast
        </span>
      </span>
    </span>
  );
}
