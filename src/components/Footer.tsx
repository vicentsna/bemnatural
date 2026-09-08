import { siteConfig, getWhatsAppUrl } from '../data/config';
import Reveal from './Reveal';
import { IconInstagram, IconWhatsApp, IconScooter, IconPin, IconPhone, IconCard } from '../lib/icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contato" aria-label="Contato e informações">
      <div className="wrap">
        <div className="footer-grid">
          <Reveal className="footer-brand">
            <img src="/logo.png" alt="" width={60} height={60} />
            <div className="footer-brand-name">Bem Natural Candeias</div>
            <p>Cozinha natural montada na hora, para todos os momentos do seu dia.</p>
            <div className="footer-social">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <IconWhatsApp />
              </a>
              <a
                href={siteConfig.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="iFood"
              >
                <IconScooter />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="footer-col-title">Contato</div>
            <div className="footer-item">
              <IconPin />
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.address}
              </a>
            </div>
            <div className="footer-item">
              <IconPhone />
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}>{siteConfig.phone}</a>
            </div>
            <div className="footer-item">
              <IconInstagram />
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.instagramHandle}
              </a>
            </div>
            <div className="footer-item">
              <IconCard />
              <span>{siteConfig.payment}</span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="footer-col-title">Horários</div>
            {siteConfig.hours.map((h) => (
              <div className="hours-row" key={h.day}>
                <span className="hours-day">{h.day}</span>
                <span className={`hours-time${h.open ? '' : ' closed'}`}>{h.time}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="footer-bottom">
          <span>© {year} Bem Natural Candeias. Todos os direitos reservados.</span>
          <div className="footer-bottom-links">
            <a href={siteConfig.ifoodUrl} target="_blank" rel="noopener noreferrer">
              iFood
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <span className="footer-credit">
            site por <a href="https://wa.me/">Vicente Gabriel</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
