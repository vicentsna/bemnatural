import { featuredDish, img, siteConfig, getWhatsAppUrl } from '../data/config';
import Reveal from './Reveal';
import { IconWhatsApp, IconArrowUpRight } from '../lib/icons';

export default function Signature() {
  const orderMsg = `Olá! Quero pedir o ${featuredDish.name} (${featuredDish.price}).`;

  return (
    <section className="section signature" id="destaque" aria-label="Prato em destaque">
      <div className="wrap signature-grid">
        <Reveal className="signature-media">
          <span className="signature-badge">{featuredDish.eyebrow}</span>
          <img src={img.featuredDish} alt={featuredDish.name} loading="lazy" />
        </Reveal>

        <div className="signature-body">
          <Reveal>
            <span className="eyebrow">montado na hora</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-lg">{featuredDish.name}</h2>
          </Reveal>
          <Reveal delay={100}>
            <span className="signature-price">{featuredDish.price}</span>
          </Reveal>
          <Reveal delay={130}>
            <p className="signature-blurb">{featuredDish.blurb}</p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="ing-list">
              {featuredDish.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="signature-actions">
              <a
                className="btn btn-lg"
                href={getWhatsAppUrl(orderMsg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                Pedir este prato
              </a>
              <a
                className="btn btn-lg btn-ghost"
                href={siteConfig.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-ghost-label">No iFood</span>
                <IconArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
