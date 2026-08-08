import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import CtaBlocks from './components/CtaBlocks';
import InfoSection from './components/InfoSection';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function App() {
  useScrollAnimation();

  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <QuickLinks />
        <MenuSection />
        <AboutSection />
        <CtaBlocks />
        <InfoSection />
      </main>

      <WhatsAppFloat />
    </>
  );
}
