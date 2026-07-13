import logoUrl from '../../assets/logo.png';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl shadow-soft"
        >
          <img src={logoUrl} alt="" className="h-full w-full object-cover" />
        </span>
        <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          NoteCast
        </span>
      </span>
    </span>
  );
}
