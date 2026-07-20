import { Mail } from 'lucide-react';
import { Container } from './ui/Container';
import { Logo } from './ui/Logo';
import { PRIVACY_URL, CONTACT_EMAIL } from '../config';

const LINKS = [
  { label: 'Privacy Policy', href: PRIVACY_URL, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#top" aria-label="NoteCast home" className="inline-block rounded-lg">
              <Logo />
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              Private, on-device notes from any tab or audio file. Free.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-center gap-3 md:items-end">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer noopener' : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row dark:border-slate-800/70 dark:text-slate-400">
          <p>Made for people who like to keep their data.</p>
          <p>© {new Date().getFullYear()} NoteCast</p>
        </div>
      </Container>
    </footer>
  );
}