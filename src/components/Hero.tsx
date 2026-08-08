import { getWhatsAppUrl } from '../data/config';

export default function Hero() {
  const scrollToCardapios = () => {
    document.getElementById('cardapios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Seção principal">
      {/* Background com foto de comida saudável */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1920&q=85"
          alt="Prato saudável e colorido"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      {/* Conteúdo */}
      <div className="hero-content">
        <div className="hero-badge">
          <span>🌿</span>
          Bem Natural Candeias &mdash; <span>Alimentação Saudável</span>
        </div>

        <h1 className="hero-title">
          Comer bem pode ser a <em>melhor parte</em> do seu dia
        </h1>

        <p className="hero-text">
          Cardápio variado com entradas, sanduíches naturais, panelinhas e almoços fit.
          Presencial, retirada, iFood ou WhatsApp — do jeito que for melhor pra você.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={scrollToCardapios}
            id="hero-ver-cardapio-btn"
            aria-label="Ver cardápio completo"
          >
            🍃 Ver cardápio
          </button>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            id="hero-pedir-agora-btn"
            aria-label="Pedir agora pelo WhatsApp"
          >
            💬 Pedir agora
          </a>
        </div>

        {/* Selos de confiança */}
        <div
          className="hero-trust"
          style={{
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            animation: 'fadeUp 0.9s ease 0.8s both',
          }}
        >
          {[
            { icon: '🥗', text: 'Comida natural' },
            { icon: '⚡', text: 'Pedido rápido' },
            { icon: '📦', text: 'Retirada e entrega' },
            { icon: '💳', text: 'Cartão e PIX' },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        onClick={scrollToCardapios}
        role="button"
        aria-label="Rolar para baixo"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToCardapios()}
      >
        <div className="hero-scroll-line" />
        <span>rolar</span>
      </div>
    </section>
  );
}
