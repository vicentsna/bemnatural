import { img, siteConfig } from '../data/config';

/** Faixa cheia com foto real do salão + tom da marca por cima. */
export default function Ambiance() {
  return (
    <section className="ambiance" aria-label="O salão">
      <img
        className="ambiance-img"
        src={img.salaoJanela}
        alt="Vista de dentro do Bem Natural Candeias para a rua"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.opacity = '0';
        }}
      />
      <div className="ambiance-veil" aria-hidden="true" />
      <div className="wrap ambiance-inner">
        <span className="eyebrow">o salão</span>
        <p className="ambiance-line">
          Salão aberto de segunda a sábado, em {siteConfig.city}. Chega, senta no balcão e come bem.
        </p>
      </div>
    </section>
  );
}
