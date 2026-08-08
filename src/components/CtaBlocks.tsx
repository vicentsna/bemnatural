import { siteConfig, getWhatsAppUrl } from '../data/config';

export default function CtaBlocks() {
  return (
    <section
      className="cta-blocks"
      id="pedidos"
      aria-label="Canais de pedido"
    >
      <div className="container">
        <div className="cta-grid">
          {/* iFood */}
          <div className="cta-block cta-block-ifood fade-left">
            <span className="cta-icon" aria-hidden="true">🛵</span>
            <h2 className="cta-title">Peça pelo iFood</h2>
            <p className="cta-text">
              Receba seu pedido no conforto de casa. Estamos no iFood com
              cardápio completo e entrega rápida na sua região.
            </p>
            <a
              href={siteConfig.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-ifood"
              id="cta-ifood-btn"
              aria-label="Abrir iFood e fazer pedido"
            >
              🔴 Pedir no iFood agora
            </a>
          </div>

          {/* WhatsApp */}
          <div className="cta-block cta-block-whatsapp fade-right">
            <span className="cta-icon" aria-hidden="true">💬</span>
            <h2 className="cta-title">Fale pelo WhatsApp</h2>
            <p className="cta-text">
              Prefere atendimento direto? Mande uma mensagem no WhatsApp e
              faça seu pedido com facilidade. Respondemos rapidinho!
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-whatsapp"
              id="cta-whatsapp-btn"
              aria-label="Abrir WhatsApp e fazer pedido"
            >
              💚 Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
