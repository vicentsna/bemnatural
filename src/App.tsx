import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Signature from './components/Signature';
import Ambiance from './components/Ambiance';
import Menu from './components/Menu';
import About from './components/About';
import OrderChannels from './components/OrderChannels';
import Footer from './components/Footer';
import OrderDock from './components/OrderDock';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Signature />
        <Ambiance />
        <Menu />
        <About />
        <OrderChannels />
      </main>
      <Footer />
      <OrderDock />
      <WhatsAppFloat />
    </>
  );
}
