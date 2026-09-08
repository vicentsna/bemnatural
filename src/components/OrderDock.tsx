import { useEffect, useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../data/config';
import { IconWhatsApp, IconArrowUpRight } from '../lib/icons';

/** Barra de pedido fixa (mobile). Aparece depois que o topo sai da tela. */
export default function OrderDock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`dock${show ? ' show' : ''}`} aria-hidden={!show}>
      <a
        className="btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
      >
        <IconWhatsApp />
        WhatsApp
      </a>
      <a
        className="btn btn-dock-ghost"
        href={siteConfig.ifoodUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
      >
        iFood
        <IconArrowUpRight />
      </a>
    </div>
  );
}
