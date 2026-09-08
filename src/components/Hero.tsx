import type { CSSProperties } from 'react';
import { siteConfig, featuredDish, img, getWhatsAppUrl } from '../data/config';
import { scrollToId } from '../hooks/useReveal';
import Ticker from './Ticker';
import { IconWhatsApp, IconArrowUpRight } from '../lib/icons';

const d = (ms: number): CSSProperties => ({ ['--d' as string]: `${ms}ms` } as CSSProperties);

export default function Hero() {
  const chips = featuredDish.ingredients;

  return (
    <section className="hero" id="topo" aria-label="Bem Natural Candeias">
      <div className="hero-grain" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow anim" style={d(0)}>
            cozinha natural · {siteConfig.city}
          </span>

          <h1 className="h-xl hero-title anim" style={d(90)}>
            Comer bem&nbsp;é&nbsp;a <em>melhor&nbsp;parte</em> do&nbsp;dia
          </h1>

          <p className="hero-text anim" style={d(200)}>
            {siteConfig.tagline}
          </p>

          <div className="hero-actions anim" style={d(300)}>
            <a
              className="btn btn-lg"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              Pedir pelo WhatsApp
            </a>
            <button className="btn btn-lg btn-ghost" onClick={() => scrollToId('cardapio')}>
              <span className="btn-ghost-label">Ver cardápio</span>
              <IconArrowUpRight />
            </button>
          </div>
        </div>

        <div className="dish-card anim-card" style={d(260)}>
          <div className="dish-card-media">
            <img src={img.heroDish} alt={featuredDish.name} loading="eager" />
            <span className="dish-price">{featuredDish.price}</span>
          </div>

          <ul className="dish-chips">
            {chips.map((ing, i) => (
              <li className="dish-chip" key={ing} style={d(540 + i * 80)}>
                {ing}
              </li>
            ))}
          </ul>

          <div className="dish-foot" style={d(540 + chips.length * 80)}>
            <span className="dish-foot-name">{featuredDish.name}</span>
            <span className="dish-foot-meta">
              {featuredDish.menu} · {featuredDish.eyebrow}
            </span>
          </div>
        </div>
      </div>

      <Ticker items={siteConfig.trustFacts} />

      <button
        className="hero-scroll"
        onClick={() => scrollToId('destaque')}
        aria-label="Rolar para o destaque"
      >
        <span className="hero-scroll-line" />
        rolar
      </button>
    </section>
  );
}
