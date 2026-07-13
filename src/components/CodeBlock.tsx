import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * A single-line (or multi-line) code snippet with a copy-to-clipboard button.
 */
export function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* Clipboard may be unavailable (e.g. insecure context) — fail quietly. */
    }
  };

  return (
    <div className="group relative flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 dark:border-slate-700">
      <code className="overflow-x-auto whitespace-nowrap font-mono text-sm text-slate-100">
        <span className="mr-2 select-none text-brand-400">$</span>
        {code}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : label ? `Copy: ${label}` : 'Copy command'}
        className="flex-none rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
      </button>
    </div>
  );
}
