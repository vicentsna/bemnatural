// ============================================================
// CARDÁPIO DE ALMOÇO — Fonte oficial: Google Drive PDF
// Dados extraídos diretamente dos arquivos fornecidos
// ============================================================

export interface LunchProteinOption {
  name: string;
  price: string;
}

export interface LunchProteinCategory {
  id: string;
  name: string;
  emoji: string;
  description?: string;
  options: LunchProteinOption[];
}

export interface SideItem {
  name: string;
  note?: string;
}

export interface SideCategory {
  id: string;
  name: string;
  emoji: string;
  items: SideItem[];
  note?: string;
}

export interface KidsMenuItem {
  name: string;
  proteinOptions: { name: string; price: string }[];
  sideOptions: string[];
  beverages?: { name: string; price: string }[];
}

// Proteínas do almoço
export const lunchProteins: LunchProteinCategory[] = [
  {
    id: 'frango',
    name: 'Frango',
    emoji: '🍗',
    description: 'Proteínas de frango grelhado e preparações especiais',
    options: [
      { name: 'Frango grelhado', price: 'R$ 25,90' },
      { name: 'Burger de frango', price: 'R$ 26,90' },
      { name: 'Frango ao creme de ricota', price: 'R$ 30,90' },
      { name: 'Frango ao creme de brócolis', price: 'R$ 30,90' },
      { name: 'Frango ao pesto', price: 'R$ 30,90' },
      { name: 'Frango três queijos', price: 'R$ 31,90' },
      { name: 'Frango pizzaiollo', price: 'R$ 30,90' },
      { name: 'Parmê fit de frango', price: 'R$ 32,90' },
      { name: 'Estrogonofe de frango', price: 'R$ 30,90' },
      { name: 'Frango crosta de castanha', price: 'R$ 31,90' },
      { name: 'Frango ao queijo do reino', price: 'R$ 31,90' },
    ],
  },
  {
    id: 'carne',
    name: 'Carne Bovina',
    emoji: '🥩',
    description: 'Carnes magras selecionadas com diversas preparações',
    options: [
      { name: 'Carne grelhada', price: 'R$ 30,90' },
      { name: 'Burger de carne magra', price: 'R$ 31,90' },
      { name: 'Carne ao creme de ricota', price: 'R$ 35,90' },
      { name: 'Carne ao creme de brócolis', price: 'R$ 35,90' },
      { name: 'Carne três queijos', price: 'R$ 36,90' },
      { name: 'Carne regional', price: 'R$ 36,90' },
      { name: 'Parmê fit de carne', price: 'R$ 37,90' },
      { name: 'Estrogonofe de carne', price: 'R$ 35,90' },
      { name: 'Carne crosta de castanha', price: 'R$ 36,90' },
      { name: 'Carne ao queijo do reino', price: 'R$ 36,90' },
    ],
  },
  {
    id: 'pescados',
    name: 'Tilápia • Salmão • Camarão',
    emoji: '🐟',
    description: 'Pescados frescos e frutos do mar com diversas preparações',
    options: [
      { name: 'Tilápia grelhada', price: 'R$ 31,90' },
      { name: 'Tilápia ao creme de brócolis', price: 'R$ 36,90' },
      { name: 'Tilápia ao creme de ricota', price: 'R$ 36,90' },
      { name: 'Tilápia ao alho', price: 'R$ 33,90' },
      { name: 'Tilápia ao pesto', price: 'R$ 36,90' },
      { name: 'Tilápia três queijos', price: 'R$ 37,90' },
      { name: 'Estrogonofe de tilápia', price: 'R$ 36,90' },
      { name: 'Tilápia em crosta de castanha', price: 'R$ 37,90' },
      { name: 'Salmão grelhado', price: 'R$ 40,90' },
      { name: 'Salmão ao creme de brócolis', price: 'R$ 45,90' },
      { name: 'Salmão ao pesto', price: 'R$ 45,90' },
      { name: 'Salmão oriental', price: 'R$ 45,90' },
      { name: 'Salmão em crosta de castanha', price: 'R$ 46,90' },
      { name: 'Camarão grelhado', price: 'R$ 31,90' },
      { name: 'Camarão ao creme de ricota', price: 'R$ 36,90' },
      { name: 'Camarão ao alho', price: 'R$ 33,90' },
      { name: 'Camarão ao creme de brócolis', price: 'R$ 36,90' },
      { name: 'Camarão ao pesto', price: 'R$ 36,90' },
      { name: 'Camarão três queijos', price: 'R$ 37,90' },
      { name: 'Estrogonofe de camarão', price: 'R$ 36,90' },
    ],
  },
];

// Acompanhamentos do almoço (escolha até 3)
export const lunchSides: SideCategory[] = [
  {
    id: 'arroz-farinhas',
    name: 'Arroz e Farinhas',
    emoji: '🍚',
    note: 'Escolha até 3 acompanhamentos. Acompanhamento extra: R$ 8,90',
    items: [
      { name: 'Arroz parboilizado / integral' },
      { name: 'Arroz com legumes' },
      { name: 'Arroz com brócolis' },
      { name: 'Arroz piamontese' },
      { name: 'Arroz Bem Natural', note: 'chia, amendoim, linhaça, açafrão e canela' },
      { name: 'Feijão preto / macassar' },
      { name: 'Farofa com aveia e gergelim' },
      { name: 'Farofa com banana e uva-passa' },
    ],
  },
  {
    id: 'massas-sides',
    name: 'Massas',
    emoji: '🍝',
    items: [
      { name: 'Penne / Penne integral', note: 'sem glúten; molho tomate, ricota ou pesto' },
      { name: 'Espaguete / Fettuccine', note: 'molho tomate, ricota ou pesto' },
    ],
  },
  {
    id: 'batatas',
    name: 'Batatas',
    emoji: '🥔',
    items: [
      { name: 'Batata rústica inglesa / doce' },
      { name: 'Batata sautée inglesa / doce' },
      { name: 'Batata ao molho branco' },
      { name: 'Chips de batata doce' },
      { name: 'Batata palha' },
      { name: 'Purê (batata inglesa / doce / jerimum)' },
    ],
  },
  {
    id: 'saladas',
    name: 'Saladinha',
    emoji: '🥗',
    items: [
      { name: 'Saladinha Mix', note: 'alface, tomate e cenoura' },
      { name: 'Saladinha Caesar', note: 'alface, tomate, croutons e molho caesar' },
      { name: 'Saladinha Color', note: 'alface, beterraba, milho e molho mostarda e mel' },
      { name: 'Saladinha Verão', note: 'alface, cenoura, banana, uva-passa e molho parmesão' },
      { name: 'Saladinha Fresh', note: 'alface, manga, gergelim e molho mostarda e mel' },
    ],
  },
  {
    id: 'vegetais',
    name: 'Vegetais',
    emoji: '🥦',
    items: [
      { name: 'Veggies na chapa', note: 'berinjela, abobrinha e tomate' },
      { name: 'Legumes cozidos', note: 'batata, chuchu, cenoura, repolho e ervilha' },
      { name: 'Caponata de berinjela', note: 'berinjela, pimentões coloridos, abobrinha e cebola' },
    ],
  },
];

// Menu Kids
export const kidsMenu: KidsMenuItem = {
  name: 'Menu Kids',
  proteinOptions: [
    { name: 'Frango', price: 'R$ 15,00' },
    { name: 'Carne', price: 'R$ 16,50' },
    { name: 'Tilápia', price: 'R$ 16,50' },
  ],
  sideOptions: [
    'Arroz parboilizado',
    'Arroz integral',
    'Feijão preto / macassar',
    'Palha',
    'Legumes',
    'Purê',
  ],
  beverages: [
    { name: 'Suco de Laranja 200ml', price: 'R$ 6,90' },
  ],
};

// Pratos do Menu Kids
export const kidsDishes = [
  { name: 'Isca grelhada + 3 miniporções' },
  { name: 'Estrogonofe + 2 miniporções' },
  { name: 'Salada Caesar Kids' },
  { name: 'Espaguete Kids ao molho de tomate' },
];

// Informações gerais do almoço
export const lunchInfo = {
  sidesNote: 'Escolha até 3 acompanhamentos. Acompanhamento extra: R$ 8,90.',
  toGoNote: 'Para viagem tem acréscimo de taxa de embalagem.',
  payment: 'Aceitamos cartões de crédito e débito • Não aceitamos cartões refeição/alimentação • Pague com PIX',
};
