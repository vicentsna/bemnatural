import { useState } from 'react';
import { allDayMenuCategories } from '../data/menuAllDay';
import {
  lunchProteins,
  lunchSides,
  kidsMenu,
  kidsDishes,
  lunchInfo,
} from '../data/menuLunch';

// ──────────────────────────────────────────────────
// All-Day Menu
// ──────────────────────────────────────────────────
function AllDayMenu() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const displayed =
    activeCategory === 'todos'
      ? allDayMenuCategories
      : allDayMenuCategories.filter((c) => c.id === activeCategory);

  return (
    <div>
      {/* Category Nav */}
      <div className="menu-category-nav" role="tablist" aria-label="Categorias do cardápio">
        <button
          className={`category-nav-btn${activeCategory === 'todos' ? ' active' : ''}`}
          onClick={() => setActiveCategory('todos')}
          role="tab"
          aria-selected={activeCategory === 'todos'}
          id="category-tab-todos"
        >
          🍽️ Todos
        </button>
        {allDayMenuCategories.map((cat) => (
          <button
            key={cat.id}
            className={`category-nav-btn${activeCategory === cat.id ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            role="tab"
            aria-selected={activeCategory === cat.id}
            id={`category-tab-${cat.id}`}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* Items */}
      {displayed.map((cat) => (
        <div key={cat.id} className="menu-category-section" id={`cat-${cat.id}`}>
          <h3 className="menu-category-title">
            <span aria-hidden="true">{cat.emoji}</span>
            {cat.name}
          </h3>
          {cat.note && (
            <p className="menu-category-note" role="note">
              ℹ️ {cat.note}
            </p>
          )}
          <div className="menu-items-grid">
            {cat.items.map((item) => (
              <article key={item.id} className="menu-item-card" aria-label={item.name}>
                <div className="menu-item-info">
                  <h4 className="menu-item-name">{item.name}</h4>
                  {item.description && (
                    <p className="menu-item-desc">{item.description}</p>
                  )}
                  {item.priceNote && (
                    <p className="menu-item-desc" style={{ marginTop: '0.25rem' }}>
                      {item.priceNote}
                    </p>
                  )}
                </div>
                {item.price && (
                  <span className="menu-item-price" aria-label={`Preço: ${item.price}`}>
                    {item.price}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────
// Lunch Menu
// ──────────────────────────────────────────────────
function LunchMenu() {
  return (
    <div>
      {/* Info note */}
      <div
        className="menu-category-note"
        style={{ marginBottom: '2rem' }}
        role="note"
      >
        🍽️ {lunchInfo.sidesNote} Escolha até 3 acompanhamentos por prato.
        {' '}{lunchInfo.toGoNote}
      </div>

      {/* Proteins */}
      <div className="lunch-proteins">
        {lunchProteins.map((protein) => (
          <div
            key={protein.id}
            className="protein-category"
            id={`protein-${protein.id}`}
          >
            <div className="protein-category-header">
              <div className="protein-category-emoji" aria-hidden="true">
                {protein.emoji}
              </div>
              <div>
                <h3 className="protein-category-title">{protein.name}</h3>
                {protein.description && (
                  <p className="protein-category-desc">{protein.description}</p>
                )}
              </div>
            </div>
            <div className="protein-options-grid">
              {protein.options.map((option) => (
                <div key={option.name} className="protein-option">
                  <span className="protein-option-name">{option.name}</span>
                  <span className="protein-option-price">{option.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sides */}
      <div className="sides-section">
        <h3
          className="menu-category-title"
          style={{ marginBottom: '0.5rem', color: 'var(--green-leaf)' }}
        >
          🥗 Acompanhamentos
        </h3>
        <p className="menu-category-note" role="note">
          Escolha até 3 acompanhamentos por prato. Acompanhamento extra: R$ 8,90.
        </p>
        <div className="sides-grid">
          {lunchSides.map((side) => (
            <div key={side.id} className="side-category-card">
              <div className="side-category-header">
                <span className="side-category-emoji" aria-hidden="true">{side.emoji}</span>
                <span className="side-category-name">{side.name}</span>
              </div>
              <ul className="side-items-list">
                {side.items.map((item) => (
                  <li key={item.name} className="side-item">
                    <span>
                      {item.name}
                      {item.note && (
                        <span className="side-item-note">{item.note}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Kids Menu */}
      <div className="kids-section" id="kids-menu">
        <h3 className="kids-title">
          <span aria-hidden="true">👶</span> Menu Kids
        </h3>
        <div className="kids-content">
          <div className="kids-group">
            <h4>Proteínas</h4>
            {kidsMenu.proteinOptions.map((item) => (
              <div key={item.name} className="kids-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="kids-group">
            <h4>Pratos</h4>
            {kidsDishes.map((dish) => (
              <div key={dish.name} className="kids-list-item">
                {dish.name}
              </div>
            ))}
          </div>
          <div className="kids-group">
            <h4>Miniporções (escolha)</h4>
            {kidsMenu.sideOptions.map((item) => (
              <div key={item} className="kids-list-item">{item}</div>
            ))}
          </div>
          {kidsMenu.beverages && (
            <div className="kids-group">
              <h4>Bebidas</h4>
              {kidsMenu.beverages.map((bev) => (
                <div key={bev.name} className="kids-item">
                  <span>{bev.name}</span>
                  <span>{bev.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────
// Main MenuSection
// ──────────────────────────────────────────────────
export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'diatodo' | 'almoco'>('diatodo');

  return (
    <section className="menu-section" id="cardapios" aria-label="Cardápios">
      <div className="container">
        <div className="menu-section-header fade-up">
          <span className="section-tag">Nosso Cardápio</span>
          <h2 className="section-title">O que preparamos para você</h2>
          <p className="section-subtitle">
            Cardápio variado para todos os momentos — do café da manhã ao almoço.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="menu-tabs"
          role="tablist"
          aria-label="Selecionar cardápio"
        >
          <button
            className={`menu-tab${activeTab === 'diatodo' ? ' active' : ''}`}
            onClick={() => setActiveTab('diatodo')}
            role="tab"
            aria-selected={activeTab === 'diatodo'}
            id="tab-diatodo"
            aria-controls="panel-diatodo"
          >
            🌿 Dia Todo
          </button>
          <button
            className={`menu-tab${activeTab === 'almoco' ? ' active' : ''}`}
            onClick={() => setActiveTab('almoco')}
            role="tab"
            aria-selected={activeTab === 'almoco'}
            id="tab-almoco"
            aria-controls="panel-almoco"
          >
            🍽️ Almoço
          </button>
        </div>

        {/* Panels */}
        <div
          id="panel-diatodo"
          role="tabpanel"
          aria-labelledby="tab-diatodo"
          hidden={activeTab !== 'diatodo'}
        >
          {activeTab === 'diatodo' && <AllDayMenu />}
        </div>

        <div
          id="panel-almoco"
          role="tabpanel"
          aria-labelledby="tab-almoco"
          hidden={activeTab !== 'almoco'}
        >
          {activeTab === 'almoco' && <LunchMenu />}
        </div>
      </div>
    </section>
  );
}
