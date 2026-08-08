import { siteConfig, getWhatsAppUrl } from '../data/config';

export default function InfoSection() {
  return (
    <footer className="info-section" id="contato" aria-label="Informações de contato">
      <div className="container">
        <div className="info-grid">
          {/* Brand */}
          <div className="fade-up">
            <img
              src="/logo.png"
              alt="Bem Natural Candeias"
              style={{ height: '70px', marginBottom: '1.25rem', borderRadius: '50%', boxShadow: '0 4px 24px rgba(107,61,110,0.5)' }}
            />
            <h2 className="info-brand-name">Bem Natural Candeias</h2>
            <p className="info-brand-desc">
              Alimentação equilibrada, saborosa e prática para todos os momentos do seu dia.
            </p>

            {/* Social Links */}
            <div className="info-social" aria-label="Redes sociais">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="info-social-link"
                aria-label="Instagram do Bem Natural Candeias"
                id="footer-instagram-link"
              >
                📸
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="info-social-link"
                aria-label="WhatsApp do Bem Natural Candeias"
                id="footer-whatsapp-link"
              >
                💬
              </a>
              <a
                href={siteConfig.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="info-social-link"
                aria-label="iFood do Bem Natural Candeias"
                id="footer-ifood-link"
              >
                🛵
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="fade-up delay-2">
            <h3 className="info-col-title">Contato & Localização</h3>

            <div className="info-item">
              <div className="info-item-icon" aria-hidden="true">📍</div>
              <div className="info-item-content">
                <div className="info-item-label">Endereço</div>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item-value"
                  style={{ textDecoration: 'underline', opacity: 0.8 }}
                  id="footer-maps-link"
                >
                  {siteConfig.address}
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-item-icon" aria-hidden="true">📞</div>
              <div className="info-item-content">
                <div className="info-item-label">Telefone</div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="info-item-value"
                  id="footer-phone-link"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-item-icon" aria-hidden="true">📲</div>
              <div className="info-item-content">
                <div className="info-item-label">Instagram</div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item-value"
                  id="footer-instagram-handle"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-item-icon" aria-hidden="true">💳</div>
              <div className="info-item-content">
                <div className="info-item-label">Pagamento</div>
                <div className="info-item-value" style={{ fontSize: '0.82rem' }}>
                  {siteConfig.payment}
                </div>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="fade-up delay-3">
            <h3 className="info-col-title">Horários de Funcionamento</h3>

            <div className="hours-table" role="table" aria-label="Horários de funcionamento">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="hours-row" role="row">
                  <span className="hours-day" role="cell">{h.day}</span>
                  <span
                    className={`hours-time${h.time === 'Fechado' ? ' closed' : ''}`}
                    role="cell"
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Atendimento */}
            <div style={{ marginTop: '2rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '0.75rem',
                }}
              >
                Formas de Atendimento
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {siteConfig.services.map((s) => (
                  <span
                    key={s.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '100px',
                    }}
                  >
                    {s.icon} {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="footer"
          style={{
            marginTop: '4rem',
            background: 'transparent',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="footer-inner" style={{ padding: '2rem 0 0' }}>
            <div className="footer-logo-area">
              <div>
                <div
                  className="footer-copy"
                  style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}
                >
                  © {new Date().getFullYear()} Bem Natural Candeias. Todos os direitos reservados.
                </div>
              </div>
            </div>
            <div className="footer-links">
              {[
                { label: 'Cardápios', href: '#cardapios' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'iFood', href: siteConfig.ifoodUrl },
                { label: 'Instagram', href: siteConfig.instagramUrl },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
