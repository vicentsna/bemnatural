export default function AboutSection() {
  const features = [
    { icon: '🥗', text: 'Cardápio variado para todos os momentos do dia' },
    { icon: '🫕', text: 'Entradas, sanduíches naturais, panelinhas e almoços fit' },
    { icon: '🛵', text: 'Pedidos presenciais, retirada, iFood e WhatsApp' },
    { icon: '🌿', text: 'Ingredientes frescos e preparação artesanal' },
  ];

  return (
    <section className="about-section" id="sobre" aria-label="Quem somos">
      <div className="container">
        <div className="about-grid">
          {/* Images */}
          <div className="about-images fade-left" aria-hidden="true">
            <div className="about-decor" />
            <div className="about-decor-2" />
            <img
              className="about-img-main"
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Prato saudável e colorido do Bem Natural"
              loading="lazy"
            />
            <img
              className="about-img-secondary"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80"
              alt="Salada fresca e nutritiva"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="about-text fade-right">
            <span className="section-tag">Quem somos</span>
            <h2 className="section-title">Uma alimentação equilibrada e cheia de sabor</h2>

            <p className="about-description">
              Na Bem Natural Candeias, acreditamos que uma alimentação equilibrada também
              pode ser prática e cheia de sabor. Nosso cardápio reúne entradas, sanduíches
              naturais, panelinhas e almoços fit pensados para diferentes momentos do dia.
              Você pode aproveitar presencialmente, retirar seu pedido ou pedir com
              facilidade pelo iFood e WhatsApp.
            </p>

            <div className="about-features">
              {features.map((f) => (
                <div key={f.text} className="about-feature">
                  <div className="about-feature-icon" aria-hidden="true">{f.icon}</div>
                  <span className="about-feature-text">{f.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('cardapios')?.scrollIntoView({ behavior: 'smooth' })}
                id="about-ver-cardapio-btn"
                aria-label="Ver cardápio completo"
              >
                🍃 Ver cardápio completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
