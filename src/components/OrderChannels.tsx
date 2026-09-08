import { siteConfig, getWhatsAppUrl } from '../data/config';
import Reveal from './Reveal';
import {
  IconWhatsApp,
  IconScooter,
  IconBag,
  IconStore,
  IconArrowUpRight,
} from '../lib/icons';

const iconMap = {
  whatsapp: IconWhatsApp,
  ifood: IconScooter,
  bag: IconBag,
  store: IconStore,
} as const;

const hrefFor = (icon: string) => {
  if (icon === 'whatsapp') return getWhatsAppUrl();
  if (icon === 'ifood') return siteConfig.ifoodUrl;
  return undefined;
};

export default function OrderChannels() {
  return (
    <section className="section channels" id="pedidos" aria-label="Como pedir">
      <div className="wrap">
        <Reveal className="channels-head">
          <span className="eyebrow">como você prefere</span>
          <h2 className="h-lg">Quatro formas de pedir</h2>
        </Reveal>

        <div className="channels-grid">
          {siteConfig.channels.map((c, i) => {
            const Icon = iconMap[c.icon as keyof typeof iconMap];
            const href = hrefFor(c.icon);
            const inner = (
              <>
                <span className="channel-icon">
                  <Icon />
                </span>
                <span className="channel-label">
                  {c.label}
                  {href && <IconArrowUpRight className="arrow" />}
                </span>
                <span className="channel-desc">{c.desc}</span>
              </>
            );
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                {href ? (
                  <a
                    className={`channel${c.icon === 'ifood' ? ' is-ifood' : ''}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="channel">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
