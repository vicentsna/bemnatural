import { useRef, useState } from 'react';
import { allDayMenuCategories } from '../data/menuAllDay';
import { lunchProteins, lunchSides, kidsMenu, kidsDishes, lunchInfo } from '../data/menuLunch';
import { siteConfig } from '../data/config';
import { scrollToId } from '../hooks/useReveal';
import Reveal from './Reveal';

const popular = new Set(siteConfig.popularItemIds);

// Pseudo-categoria com os campeões de venda, puxados de todo o cardápio
const highlightItems = allDayMenuCategories
  .flatMap((c) => c.items)
  .filter((it) => popular.has(it.id));
const highlightCat = {
  id: 'destaques',
  name: 'Mais pedidos',
  emoji: '',
  items: highlightItems,
  note: 'Os queridinhos da casa — de vários cantos do cardápio.',
};

type Tab = 'diatodo' | 'almoco';

/* ── Cardápio Dia Todo ─────────────────────────────────────── */
function AllDayPanel() {
  const [cat, setCat] = useState('destaques');
  const railRef = useRef<HTMLDivElement>(null);
  const shown =
    cat === 'todos'
      ? allDayMenuCategories
      : cat === 'destaques'
        ? [highlightCat]
        : allDayMenuCategories.filter((c) => c.id === cat);

  const pick = (id: string) => {
    setCat(id);
    requestAnimationFrame(() => {
      if (railRef.current && railRef.current.getBoundingClientRect().top < 60) {
        railRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <div className="menu-layout">
      <div className="cat-rail" role="tablist" aria-label="Categorias" ref={railRef}>
        <button
          className={`cat-chip${cat === 'destaques' ? ' active' : ''}`}
          onClick={() => pick('destaques')}
          role="tab"
          aria-selected={cat === 'destaques'}
        >
          ★ Mais pedidos
        </button>
        <button
          className={`cat-chip${cat === 'todos' ? ' active' : ''}`}
          onClick={() => pick('todos')}
          role="tab"
          aria-selected={cat === 'todos'}
        >
          Todos
        </button>
        {allDayMenuCategories.map((c) => (
          <button
            key={c.id}
            className={`cat-chip${cat === c.id ? ' active' : ''}`}
            onClick={() => pick(c.id)}
            role="tab"
            aria-selected={cat === c.id}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="menu-panel">
        <div className="menu-swap" key={cat}>
          {shown.map((c) => (
            <section className="menu-cat" key={c.id}>
              <div className="menu-cat-head">
                <h3 className="menu-cat-title">{c.name}</h3>
                <span className="menu-cat-count">{c.items.length.toString().padStart(2, '0')}</span>
              </div>
              {c.note && <p className="menu-cat-note">{c.note}</p>}
              <div className="menu-items">
                {c.items.map((item) => (
                  <article className="menu-item" key={item.id}>
                    <span className="menu-item-name">
                      {item.name}
                      {popular.has(item.id) && <span className="menu-item-tag">queridinho</span>}
                    </span>
                    {item.price && <span className="menu-item-price">{item.price}</span>}
                    {(item.description || item.priceNote) && (
                      <p className="menu-item-desc">
                        {item.description}
                        {item.priceNote ? ` — ${item.priceNote}` : ''}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Cardápio de Almoço ────────────────────────────────────── */
function LunchPanel() {
  const anchors = [
    ...lunchProteins.map((p) => ({ id: `lunch-${p.id}`, label: p.name })),
    { id: 'lunch-sides', label: 'Acompanhamentos' },
    { id: 'lunch-kids', label: 'Menu Kids' },
  ];

  return (
    <div className="menu-layout">
      <div className="cat-rail" aria-label="Seções do almoço">
        {anchors.map((a) => (
          <button key={a.id} className="cat-chip" onClick={() => scrollToId(a.id)}>
            {a.label}
          </button>
        ))}
      </div>

      <div className="menu-panel">
        <div className="menu-swap" key="lunch">
          <p className="lunch-note">
            {lunchInfo.sidesNote} {lunchInfo.toGoNote} {lunchInfo.payment}
          </p>

          {lunchProteins.map((group) => (
            <section className="protein-group" id={`lunch-${group.id}`} key={group.id}>
              <div className="protein-group-head">
                <h3 className="protein-group-title">{group.name}</h3>
                {group.description && (
                  <span className="protein-group-desc">{group.description}</span>
                )}
              </div>
              <div className="protein-options">
                {group.options.map((o) => (
                  <div className="protein-option" key={o.name}>
                    <span className="protein-option-name">{o.name}</span>
                    <span className="protein-option-price">{o.price}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="sides-block" id="lunch-sides">
            <h3 className="sides-title">Acompanhamentos</h3>
            <p className="menu-cat-note">Escolha até 3 por prato. Extra: R$ 8,90.</p>
            <div className="sides-grid">
              {lunchSides.map((s) => (
                <div className="side-cat" key={s.id}>
                  <div className="side-cat-name">
                    <span className="dot" />
                    {s.name}
                  </div>
                  <div className="side-items">
                    {s.items.map((it) => (
                      <span className="side-item" key={it.name}>
                        <b>{it.name}</b>
                        {it.note && <span className="note">{it.note}</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="kids-block" id="lunch-kids">
            <h3 className="sides-title">Menu Kids</h3>
            <div className="kids-cols">
              <div className="kids-col">
                <h4>Proteínas</h4>
                {kidsMenu.proteinOptions.map((o) => (
                  <div className="kids-row" key={o.name}>
                    <span>{o.name}</span>
                    <span>{o.price}</span>
                  </div>
                ))}
              </div>
              <div className="kids-col">
                <h4>Pratos</h4>
                {kidsDishes.map((dd) => (
                  <div className="kids-li" key={dd.name}>
                    {dd.name}
                  </div>
                ))}
              </div>
              <div className="kids-col">
                <h4>Miniporções</h4>
                {kidsMenu.sideOptions.map((s) => (
                  <div className="kids-li" key={s}>
                    {s}
                  </div>
                ))}
              </div>
              {kidsMenu.beverages && (
                <div className="kids-col">
                  <h4>Bebidas</h4>
                  {kidsMenu.beverages.map((b) => (
                    <div className="kids-row" key={b.name}>
                      <span>{b.name}</span>
                      <span>{b.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ── Seção ─────────────────────────────────────────────────── */
export default function Menu() {
  const [tab, setTab] = useState<Tab>('diatodo');

  return (
    <section className="section menu" id="cardapio" aria-label="Cardápio">
      <div className="wrap">
        <Reveal className="menu-head">
          <span className="eyebrow">o cardápio</span>
          <h2 className="h-lg">Do café da manhã ao almoço</h2>
          <p>
            Tudo montado na hora. Escolha entre o menu do dia todo — sanduíches, crepes, saladas,
            açaí — e o almoço fit, onde você monta o prato.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="menu-tabs" role="tablist" aria-label="Escolher cardápio">
            <button
              className={`menu-tab${tab === 'diatodo' ? ' active' : ''}`}
              onClick={() => setTab('diatodo')}
              role="tab"
              aria-selected={tab === 'diatodo'}
            >
              <span className="menu-tab-pill" aria-hidden="true" />
              Dia todo
            </button>
            <button
              className={`menu-tab${tab === 'almoco' ? ' active' : ''}`}
              onClick={() => setTab('almoco')}
              role="tab"
              aria-selected={tab === 'almoco'}
            >
              <span className="menu-tab-pill" aria-hidden="true" />
              Almoço
            </button>
          </div>
        </Reveal>

        {tab === 'diatodo' ? <AllDayPanel /> : <LunchPanel />}
      </div>
    </section>
  );
}
