import { siteConfig, getWhatsAppUrl } from '../data/config';

interface QuickLinkProps {
  href: string;
  className: string;
  iconClass: string;
  icon: string;
  label: string;
  sub: string;
  id: string;
  onClick?: () => void;
}

function QuickLinkCard({ href, className, iconClass, icon, label, sub, id, onClick }: QuickLinkProps) {
  if (onClick) {
    return (
      <button
        id={id}
        className={`quick-link-card ${className}`}
        onClick={onClick}
        aria-label={label}
        style={{ cursor: 'pointer' }}
      >
        <div className={`quick-link-icon ${iconClass}`} aria-hidden="true">{icon}</div>
        <span className="quick-link-label">{label}</span>
        <span className="quick-link-sub">{sub}</span>
      </button>
    );
  }

  return (
    <a
      id={id}
      href={href}
      className={`quick-link-card ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <div className={`quick-link-icon ${iconClass}`} aria-hidden="true">{icon}</div>
      <span className="quick-link-label">{label}</span>
      <span className="quick-link-sub">{sub}</span>
    </a>
  );
}

export default function QuickLinks() {
  const scrollToMenuSection = (tab?: string) => {
    document.getElementById('cardapios')?.scrollIntoView({ behavior: 'smooth' });
    if (tab) {
      setTimeout(() => {
        const btn = document.getElementById(`tab-${tab}`);
        btn?.click();
      }, 600);
    }
  };

  return (
    <section className="quick-links" id="acessos-rapidos" aria-label="Acessos rápidos">
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Acesso rápido</span>
          <h2 className="section-title">Tudo que você precisa, aqui</h2>
          <p className="section-subtitle">
            Navegue pelo cardápio, faça seu pedido ou entre em contato com facilidade.
          </p>
        </div>

        <div className="quick-links-grid">
          <QuickLinkCard
            id="quick-menu-day"
            href="#cardapios"
            className="menu-day fade-up delay-1"
            iconClass="green"
            icon="🍃"
            label="Menu do Dia Todo"
            sub="Sanduíches, crepes, saladas e mais"
            onClick={() => scrollToMenuSection('diatodo')}
          />
          <QuickLinkCard
            id="quick-menu-lunch"
            href="#cardapios"
            className="menu-lunch fade-up delay-2"
            iconClass="green"
            icon="🍽️"
            label="Menu de Almoço"
            sub="Frango, carne, tilápia, salmão..."
            onClick={() => scrollToMenuSection('almoco')}
          />
          <QuickLinkCard
            id="quick-ifood"
            href={siteConfig.ifoodUrl}
            className="ifood fade-up delay-3"
            iconClass="red"
            icon="🛵"
            label="Pedir no iFood"
            sub="Entrega em casa"
          />
          <QuickLinkCard
            id="quick-whatsapp"
            href={getWhatsAppUrl()}
            className="whatsapp fade-up delay-4"
            iconClass="wa"
            icon="💬"
            label="Pedir pelo WhatsApp"
            sub="Atendimento direto"
          />
          <QuickLinkCard
            id="quick-instagram"
            href={siteConfig.instagramUrl}
            className="instagram fade-up delay-5"
            iconClass="insta"
            icon="📸"
            label="Instagram"
            sub={siteConfig.instagramHandle}
          />
          <QuickLinkCard
            id="quick-maps"
            href={siteConfig.googleMapsUrl}
            className="maps fade-up delay-6"
            iconClass="blue"
            icon="📍"
            label="Como chegar"
            sub={siteConfig.addressShort}
          />
        </div>
      </div>
    </section>
  );
}
