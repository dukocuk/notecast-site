import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ChromeIcon } from './ui/BrandIcons';
import { NAV_ITEMS } from '../data/nav';
import { CHROME_STORE_URL } from '../config';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ThemeToggle } from './ui/ThemeToggle';
import { Logo } from './ui/Logo';
import { cn } from '../lib/cn';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/85'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a href="#top" className="rounded-lg" aria-label="NoteCast home">
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button href={CHROME_STORE_URL} size="md">
                <ChromeIcon className="h-4 w-4" aria-hidden />
                Add to Chrome
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden">
          <Container className="pb-5">
            <ul className="flex flex-col gap-1 border-t border-slate-200 pt-3 dark:border-slate-800">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button href={CHROME_STORE_URL} size="lg" className="w-full" onClick={() => setOpen(false)}>
                  <ChromeIcon className="h-4 w-4" aria-hidden />
                  Add to Chrome
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
