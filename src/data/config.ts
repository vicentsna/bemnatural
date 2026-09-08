// ============================================================
// CONFIGURAÇÕES CENTRAIS DO SITE — edite apenas aqui
// ============================================================

export const siteConfig = {
  // ── Restaurante ────────────────────────────────────────────
  restaurantName: 'Bem Natural Candeias',
  city: 'Candeias',
  region: 'Salvador / BA',
  slogan: 'Comer bem é a melhor parte do dia',
  tagline:
    'Cozinha natural montada na hora — almoço fit, sanduíches, crepes e açaí, do jeito que você preferir pedir.',

  // ── Endereço ──────────────────────────────────────────────
  address: 'Rua das Flores, 123 – Candeias, Salvador/BA', // PLACEHOLDER: endereço real
  addressShort: 'Candeias, Salvador/BA',

  // ── Contato ───────────────────────────────────────────────
  phone: '(71) 99999-9999', // PLACEHOLDER: telefone real
  whatsappNumber: '5571999999999', // PLACEHOLDER: número real com DDI (55) + DDD
  whatsappMessage: 'Olá! Vim pelo site e gostaria de fazer um pedido.',

  // ── Redes e Delivery ──────────────────────────────────────
  instagramHandle: '@bemnaturalcandeias',
  instagramUrl: 'https://instagram.com/bemnaturalcandeias', // PLACEHOLDER: confirmar
  ifoodUrl: 'https://www.ifood.com.br', // PLACEHOLDER: link real do iFood
  googleMapsUrl: 'https://maps.google.com/?q=Bem+Natural+Candeias', // PLACEHOLDER: link real

  // ── Funcionamento ─────────────────────────────────────────
  hours: [
    { day: 'Segunda a sexta', time: '09h – 20h', open: true },
    { day: 'Sábado', time: '09h – 18h', open: true },
    { day: 'Domingo', time: 'Fechado', open: false },
  ],

  // ── Como pedir ────────────────────────────────────────────
  channels: [
    { label: 'WhatsApp', desc: 'Atendimento direto, resposta rápida', icon: 'whatsapp' },
    { label: 'iFood', desc: 'Entrega na sua região', icon: 'ifood' },
    { label: 'Retirada', desc: 'Pronto em ~15 min no balcão', icon: 'bag' },
    { label: 'Presencial', desc: 'Salão aberto no horário de funcionamento', icon: 'store' },
  ],

  // ── Pagamento ─────────────────────────────────────────────
  payment: 'Crédito e débito · Pix · não aceitamos vale refeição/alimentação',

  // IDs de itens do cardápio para marcar como "queridinho da casa"
  popularItemIds: [
    'crepe-frango-cream-cheese',
    'natural-frango',
    'salada-cotier',
    'vitamina-super-acai-morango',
    'panelinha-camarao',
  ],

  // ── Fatos de confiança (ticker do topo) ───────────────────
  trustFacts: [
    'montado na hora',
    'sem conservantes',
    'retirada em ~15 min',
    'cardápio que muda com a estação',
    'cartão e Pix',
  ],
};

// ============================================================
// PRATO EM DESTAQUE — "o mais pedido"
// Troque aqui pelo campeão de vendas real do restaurante.
// ============================================================
export const featuredDish = {
  eyebrow: 'o mais pedido',
  name: 'Salmão grelhado ao pesto',
  menu: 'Menu de Almoço',
  price: 'R$ 45,90',
  blurb:
    'Posta de salmão selada na chapa, finalizada com pesto de manjericão da casa. Você monta o prato: escolhe até três acompanhamentos e ele sai montado na hora.',
  ingredients: [
    'salmão fresco',
    'pesto de manjericão',
    'arroz Bem Natural',
    'legumes na chapa',
    'purê de jerimum',
    'azeite extra virgem',
  ],
};

// ============================================================
// IMAGENS — placeholders do Unsplash (troque por fotos reais)
// ============================================================
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  heroDish: U('1519708227418-c8fd9a32b7a2', 1200), // salmão ao pesto, prato montado
  featuredDish: U('1467003909585-2f8a72700288', 1400), // salmão grelhado
  acai: U('1590301157890-4810ed352733', 900), // bowl de açaí
  salad: U('1512621776951-a57141f2eefd', 1000), // salada colorida
  bowl: U('1546069901-ba9599a7e63c', 1000), // buddha bowl
  juice: U('1622597467836-f3285f2131b8', 800), // sucos detox
  ambianceA: U('1517248135467-4c7edcad34c4', 900), // salão / mesa
  ambianceB: U('1490645935967-10de6ba17061', 700), // ingredientes frescos
  ingredients: U('1540420773420-3366772f4999', 900), // vegetais flatlay
};

export const getWhatsAppUrl = (message?: string) => {
  const { whatsappNumber, whatsappMessage } = siteConfig;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message ?? whatsappMessage)}`;
};
