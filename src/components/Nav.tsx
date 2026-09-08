import { useState, useEffect } from 'react';
import { siteConfig, getWhatsAppUrl } from '../data/config';
import { scrollToId } from '../hooks/useReveal';
import { IconWhatsApp, IconArrowUpRight } from '../lib/icons';

const links = [
  { label: 'Destaque', id: 'destaque' },
  { label: 'Cardápio', id: 'cardapio' },
  { label: 'A casa', id: 'a-casa' },
  { label: 'Contato', id: 'contato' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 220);
  };

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <a
            className="nav-brand"
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('topo');
            }}
          >
            <img src="/logo.png" alt="" width={42} height={42} />
            <span className="nav-brand-text">
              <span className="nav-brand-name">Bem Natural</span>
              <span className="nav-brand-sub">Candeias</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Seções">
            {links.map((l) => (
              <button key={l.id} className="nav-link" onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="nav-cta-ghost"
              href={siteConfig.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              iFood
            </a>
            <a className="btn" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp />
              Pedir
            </a>
          </div>

          <button
            className={`nav-burger${open ? ' open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="nav-overlay-links">
          {links.map((l, i) => (
            <button
              key={l.id}
              className="nav-overlay-link"
              onClick={() => go(l.id)}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : '0ms' }}
              tabIndex={open ? 0 : -1}
            >
              <span className="idx">0{i + 1}</span>
              {l.label}
            </button>
          ))}
        </div>
        <div className="nav-overlay-foot">
          <a
            className="btn btn-lg"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            <IconWhatsApp />
            Pedir pelo WhatsApp
          </a>
          <a
            className="btn btn-lg btn-ghost"
            href={siteConfig.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--forest)' }}
            tabIndex={open ? 0 : -1}
          >
            <span className="btn-ghost-label">Abrir no iFood</span>
            <IconArrowUpRight />
          </a>
        </div>
      </div>
    </>
  );
}
