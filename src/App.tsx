import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { PrivacySpotlight } from './components/PrivacySpotlight';
import { QuickStart } from './components/QuickStart';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-soft"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Features />
        <PrivacySpotlight />
        <QuickStart />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
