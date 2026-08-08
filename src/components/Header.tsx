import { useState, useEffect } from 'react';
import { siteConfig, getWhatsAppUrl } from '../data/config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Cardápios', href: 'cardapios' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Contato', href: 'contato' },
  ];

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <a className="header-logo" href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img
              src="/logo.png"
              alt="Bem Natural Candeias Logo"
              style={{ borderRadius: '50%', boxShadow: '0 2px 12px rgba(107,61,110,0.25)' }}
            />
            <div className="header-logo-text">
              <span className="header-logo-sub" style={{ fontSize: '0.72rem', letterSpacing: '0.15em' }}>CANDEIAS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav" role="navigation" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="nav-link"
                onClick={() => scrollTo(link.href)}
                aria-label={`Ir para ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="header-whatsapp-btn"
            >
              💬 WhatsApp
            </a>
            <a
              href={siteConfig.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-plum"
              id="header-ifood-btn"
            >
              🛵 iFood
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`menu-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <nav
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        role="navigation"
        aria-label="Menu mobile"
        id="mobile-nav"
      >
        <div className="mobile-nav-header">
          <div className="header-logo">
            <img
              src="/logo.png"
              alt="Bem Natural Candeias"
              style={{ height: '52px', borderRadius: '50%', boxShadow: '0 2px 12px rgba(107,61,110,0.25)' }}
            />
            <div className="header-logo-text">
              <span className="header-logo-sub" style={{ fontSize: '0.72rem', letterSpacing: '0.15em' }}>CANDEIAS</span>
            </div>
          </div>
          <button
            className="menu-toggle open"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="mobile-nav-link"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mobile-nav-actions">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMobileOpen(false)}
            id="mobile-whatsapp-btn"
          >
            💬 Pedir pelo WhatsApp
          </a>
          <a
            href={siteConfig.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-plum"
            onClick={() => setMobileOpen(false)}
            id="mobile-ifood-btn"
          >
            🛵 Pedir no iFood
          </a>
        </div>
      </nav>
    </>
  );
}
