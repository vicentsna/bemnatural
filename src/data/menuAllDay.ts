// ============================================================
// CARDÁPIO DO DIA TODO — Fonte oficial: Google Drive PDF
// Dados extraídos diretamente dos arquivos fornecidos
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  priceNote?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
  note?: string;
}

export const allDayMenuCategories: MenuCategory[] = [
  {
    id: 'entradinhas',
    name: 'Entradinhas',
    emoji: '🥗',
    items: [
      {
        id: 'salgado-batata-doce',
        name: 'Salgado Fit Batata Doce',
        description: 'Massa de batata doce e frango com recheio de muçarela e requeijão',
        price: 'R$ 9,90',
      },
      {
        id: 'salgado-cenoura-brocolis',
        name: 'Salgado Fit Cenoura e Brócolis',
        description: 'Massa de brócolis, cenoura e frango com recheio de muçarela e requeijão',
        price: 'R$ 9,90',
      },
      {
        id: 'caponata-berinjela',
        name: 'Caponata de Berinjela',
        description: 'Berinjela, abobrinha, cebola e pimentões coloridos confitados em azeite. Acompanha croutons.',
        price: 'R$ 9,90',
      },
      {
        id: 'bruschetta',
        name: 'Bruschetta Bem Natural',
        description: 'Torradas da casa, tomate, ricota e pesto de manjericão (2 unidades)',
        price: 'R$ 15,90',
      },
    ],
  },
  {
    id: 'panelinhas',
    name: 'Panelinhas',
    emoji: '🫕',
    note: 'Acompanha torrada da casa. Escolha um creme: Brócolis ou Três Queijos.',
    items: [
      {
        id: 'panelinha-frango',
        name: 'Panelinha de Frango',
        description: 'Frango com creme de brócolis ou três queijos. Acompanha torrada da casa.',
        price: 'R$ 16,90',
      },
      {
        id: 'panelinha-carne',
        name: 'Panelinha de Carne',
        description: 'Carne bovina com creme de brócolis ou três queijos. Acompanha torrada da casa.',
        price: 'R$ 18,90',
      },
      {
        id: 'panelinha-camarao',
        name: 'Panelinha de Camarão',
        description: 'Camarão com creme de brócolis ou três queijos. Acompanha torrada da casa.',
        price: 'R$ 19,90',
      },
    ],
  },
  {
    id: 'sanduiches',
    name: 'Sanduíches Naturais',
    emoji: '🥪',
    items: [
      {
        id: 'natural-frango',
        name: 'Natural de Frango',
        description: 'Frango desfiado, maionese, milho, alface, tomate, cenoura e orégano',
        price: 'R$ 19,90',
      },
      {
        id: 'natural-peito-peru',
        name: 'Natural de Peito de Peru',
        description: 'Peito de peru defumado, maionese, muçarela, alface, tomate, cenoura e orégano',
        price: 'R$ 19,90',
      },
      {
        id: 'natural-atum',
        name: 'Natural de Atum',
        description: 'Atum ralado, maionese, azeitona, alface, tomate, cenoura e orégano',
        price: 'R$ 22,90',
      },
      {
        id: 'especial-camarao',
        name: 'Especial de Camarão',
        description: 'Camarão, cream cheese, gergelim, cebolinha, molho oriental',
        price: 'R$ 29,90',
      },
    ],
  },
  {
    id: 'saladas',
    name: 'Saladas',
    emoji: '🥬',
    note: 'Adicione uma proteína: Frango desfiado/Iscas R$ 9,90 • Peito de peru R$ 9,90 • Kani kama R$ 9,90 • Burger de frango R$ 11,90 • Atum R$ 11,90 • Carne/Tilápia/Camarão/Burger de carne R$ 15,90 • Salmão R$ 23,90 • Ovo cozido R$ 3,00',
    items: [
      {
        id: 'salada-caesar',
        name: 'Caesar',
        description: 'Alface, tomate, croutons, parmesão e molho caesar',
        price: 'R$ 19,90',
      },
      {
        id: 'salada-oriental',
        name: 'Oriental',
        description: 'Alface, cenoura, repolho, manga, pepino agridoce, gergelim e molho oriental',
        price: 'R$ 23,90',
      },
      {
        id: 'salada-primavera',
        name: 'Primavera',
        description: 'Alface, cenoura, beterraba, cebola, milho, tomate, brócolis, muçarela, molho caesar',
        price: 'R$ 26,90',
      },
      {
        id: 'salada-bittersweet',
        name: 'Bittersweet',
        description: 'Alface, cenoura, cebola, maçã, manga, muçarela, gergelim e molho parmesão',
        price: 'R$ 26,90',
      },
      {
        id: 'salada-monstro',
        name: 'Monstro',
        description: 'Alface, cenoura, batata doce, ovo, brócolis, amendoim e azeite',
        price: 'R$ 23,90',
      },
      {
        id: 'salada-mezcla',
        name: 'Mezcla',
        description: 'Alface, cenoura, uva-passa, ricota, penne integral, azeitona e molho parmesão',
        price: 'R$ 26,90',
      },
      {
        id: 'salada-cotier',
        name: 'Cotiér',
        description: 'Alface, rúcula, tomate, ricota, palmito, banana, granola e molho mostarda e mel',
        price: 'R$ 29,90',
      },
      {
        id: 'salada-fruite',
        name: 'Fruité',
        description: 'Alface, palmito, morango, uva-passa, croutons e molho mostarda e mel',
        price: 'R$ 27,90',
      },
      {
        id: 'salada-bem-natural',
        name: 'Bem Natural',
        description: 'Alface, rúcula, tomate, palmito, croutons, parmesão e molho pesto',
        price: 'R$ 27,90',
      },
      {
        id: 'salada-mediterranea',
        name: 'Mediterrânea',
        description: 'Alface, caponata de berinjela, abobrinha, pimentões coloridos, parmesão, azeitona e molho pesto',
        price: 'R$ 29,90',
      },
    ],
  },
  {
    id: 'crepes',
    name: 'Crepes',
    emoji: '🫔',
    note: 'Mude sua massa por +R$ 3,00: Wrap tradicional, Wrap integral ou Crepioca.',
    items: [
      {
        id: 'crepe-frango-desfiado',
        name: 'Frango Desfiado',
        description: 'Frango desfiado, muçarela, milho, tomate, cenoura, molho caesar',
        price: 'R$ 24,90',
      },
      {
        id: 'crepe-frango-salada',
        name: 'Frango Salada',
        description: 'Isca de frango, requeijão, alface, tomate, milho, molho de tomate',
        price: 'R$ 24,90',
      },
      {
        id: 'crepe-frango-reino',
        name: 'Frango ao Reino',
        description: 'Isca de frango, requeijão, queijo do reino, batata palha, molho mostarda e mel',
        price: 'R$ 28,90',
      },
      {
        id: 'crepe-frango-cream-cheese',
        name: 'Frango Cream Cheese',
        description: 'Isca de frango, cream cheese, muçarela, tomate, orégano, molho caesar',
        price: 'R$ 28,90',
      },
      {
        id: 'crepe-frango-oriental',
        name: 'Frango Oriental',
        description: 'Isca de frango, requeijão, cenoura, repolho, gergelim, cebolinha e molho oriental',
        price: 'R$ 24,90',
      },
      {
        id: 'crepe-carne-queijo',
        name: 'Carne e Queijo',
        description: 'Isca de carne, muçarela, tomate, cebola, orégano e molho parmesão',
        price: 'R$ 29,90',
      },
      {
        id: 'crepe-carne-salada',
        name: 'Carne Salada',
        description: 'Isca de carne, requeijão, alface, tomate, azeitona e molho barbecue',
        price: 'R$ 28,90',
      },
      {
        id: 'crepe-carne-reino',
        name: 'Carne ao Reino',
        description: 'Isca de carne, requeijão, queijo do reino, tomate e molho barbecue',
        price: 'R$ 32,90',
      },
      {
        id: 'crepe-carne-cream-cheese',
        name: 'Carne Cream Cheese',
        description: 'Isca de carne, cream cheese, muçarela, tomate, orégano e molho caesar',
        price: 'R$ 32,90',
      },
      {
        id: 'crepe-carne-regional',
        name: 'Carne Regional',
        description: 'Isca de carne, requeijão, cebola, queijo coalho, molho parmesão',
        price: 'R$ 29,90',
      },
      {
        id: 'crepe-carne-beirute',
        name: 'Carne Beirute',
        description: 'Isca de carne, ovo, muçarela, alface, tomate, azeitona e molho barbecue',
        price: 'R$ 30,90',
      },
      {
        id: 'crepe-peito-peru',
        name: 'Peito de Peru',
        description: 'Peito de peru, muçarela, alface, cenoura, milho e molho caesar',
        price: 'R$ 24,90',
      },
      {
        id: 'crepe-tres-queijos',
        name: 'Três Queijos',
        description: 'Requeijão, muçarela, parmesão, tomate, orégano e molho pesto',
        price: 'R$ 22,90',
      },
      {
        id: 'crepe-camarao-tres-queijos',
        name: 'Camarão Três Queijos',
        description: 'Camarão, requeijão, muçarela, parmesão, tomate e molho pesto',
        price: 'R$ 31,90',
      },
      {
        id: 'crepe-camarao-reino',
        name: 'Camarão ao Reino',
        description: 'Camarão, requeijão, queijo do reino, tomate e molho mostarda e mel',
        price: 'R$ 31,90',
      },
      {
        id: 'crepe-camarao-oriental',
        name: 'Camarão Oriental',
        description: 'Camarão, requeijão, manga, gergelim, cebolinha, alface e molho oriental',
        price: 'R$ 28,90',
      },
      {
        id: 'crepe-camarao-cream-cheese',
        name: 'Camarão Cream Cheese',
        description: 'Camarão, cream cheese, alface, gergelim e molho oriental',
        price: 'R$ 31,90',
      },
      {
        id: 'crepe-salmao-sweet',
        name: 'Salmão Sweet',
        description: 'Salmão, cream cheese, morango e molho mostarda e mel',
        price: 'R$ 35,90',
      },
      {
        id: 'crepe-salmao-oriental',
        name: 'Salmão Oriental',
        description: 'Salmão, requeijão, ricota, cebolinha, gergelim, alface, molho oriental',
        price: 'R$ 33,90',
      },
      {
        id: 'crepe-bem-natural',
        name: 'Bem Natural',
        description: 'Requeijão, ricota, tomate, palmito, rúcula e molho pesto',
        price: 'R$ 25,90',
      },
    ],
  },
  {
    id: 'omeletes',
    name: 'Omeletes',
    emoji: '🍳',
    items: [
      {
        id: 'omelete-frango',
        name: 'Frango',
        description: 'Frango desfiado, milho, cenoura, muçarela e orégano',
        price: 'R$ 27,90',
      },
      {
        id: 'omelete-peito-peru',
        name: 'Peito de Peru',
        description: 'Peito de peru defumado, tomate, cenoura, muçarela e orégano',
        price: 'R$ 27,90',
      },
      {
        id: 'omelete-atum',
        name: 'Atum',
        description: 'Atum ralado, milho, cenoura, muçarela e orégano',
        price: 'R$ 29,90',
      },
      {
        id: 'omelete-camarao',
        name: 'Camarão',
        description: 'Camarão, tomate, muçarela e orégano',
        price: 'R$ 35,90',
      },
      {
        id: 'omelete-bem-natural',
        name: 'Bem Natural',
        description: 'Ricota, tomate, palmito, muçarela e molho pesto',
        price: 'R$ 30,90',
      },
    ],
  },
  {
    id: 'massas',
    name: 'Massas',
    emoji: '🍝',
    note: 'Massas: Penne, Penne integral, Fettuccine, Espaguete ou Espaguete de abobrinha. Molhos: Napolitano, Branco, Alho e ervas, Pesto, Tomate Cremoso ou Creme de Brócolis.',
    items: [
      {
        id: 'massa-molho',
        name: 'Massa com Molho',
        description: 'Massa da sua escolha com molho selecionado',
        price: 'R$ 21,90',
      },
      {
        id: 'massa-frango',
        name: 'Com Isca / Peito de Frango Desfiado',
        description: 'Massa com isca de peito de frango ou peito de frango desfiado',
        price: 'R$ 27,90',
      },
      {
        id: 'massa-peito-peru',
        name: 'Com Peito de Peru Defumado',
        description: 'Massa com peito de peru defumado',
        price: 'R$ 27,90',
      },
      {
        id: 'massa-carne',
        name: 'Com Isca de Carne Bovina Magra',
        description: 'Massa com isca de carne bovina magra',
        price: 'R$ 33,90',
      },
      {
        id: 'massa-camarao',
        name: 'Com Camarões Descascados',
        description: 'Massa com camarões descascados',
        price: 'R$ 34,90',
      },
      {
        id: 'massa-salmao',
        name: 'Com Isca de Salmão',
        description: 'Massa com isca de salmão',
        price: 'R$ 41,90',
      },
    ],
  },
  {
    id: 'tapiocas',
    name: 'Tapiocas',
    emoji: '🫓',
    items: [
      // Tradicionais
      {
        id: 'tapioca-coco',
        name: 'Coco',
        description: 'Coco ralado',
        price: 'R$ 9,90',
      },
      {
        id: 'tapioca-coalho',
        name: 'Queijo Coalho',
        description: 'Fatias de queijo coalho',
        price: 'R$ 11,90',
      },
      {
        id: 'tapioca-coco-coalho',
        name: 'Coco e Coalho',
        description: 'Coco ralado e fatias de queijo coalho',
        price: 'R$ 11,90',
      },
      // Especiais
      {
        id: 'tapioca-frango',
        name: 'Frango',
        description: 'Frango desfiado, milho, muçarela e orégano',
        price: 'R$ 14,90',
      },
      {
        id: 'tapioca-peito-peru',
        name: 'Peito de Peru',
        description: 'Peito de peru, muçarela e orégano',
        price: 'R$ 14,90',
      },
      {
        id: 'tapioca-frango-cream-cheese',
        name: 'Frango com Cream Cheese',
        description: 'Frango desfiado e cream cheese',
        price: 'R$ 16,90',
      },
      {
        id: 'tapioca-peito-peru-cream-cheese',
        name: 'Peito de Peru com Cream Cheese',
        description: 'Peito de peru e cream cheese',
        price: 'R$ 16,90',
      },
      {
        id: 'tapioca-queijo-reino',
        name: 'Queijo do Reino',
        description: 'Queijo do reino e muçarela',
        price: 'R$ 16,90',
      },
      {
        id: 'tapioca-ricota-ovo',
        name: 'Ricota com Ovo',
        description: 'Ricota, ovo e molho pesto',
        price: 'R$ 16,90',
      },
      {
        id: 'tapioca-frango-reino',
        name: 'Frango do Reino',
        description: 'Frango desfiado, queijo do reino e muçarela',
        price: 'R$ 20,90',
      },
      {
        id: 'tapioca-camarao',
        name: 'Camarão',
        description: 'Camarão, muçarela, tomate e orégano',
        price: 'R$ 21,90',
      },
      {
        id: 'tapioca-camarao-cream-cheese',
        name: 'Camarão com Cream Cheese',
        description: 'Camarão e cream cheese',
        price: 'R$ 22,90',
      },
      // Doces
      {
        id: 'tapioca-nutella-banana',
        name: 'Nutella com Banana',
        description: 'Nutella e fatias de banana',
        price: 'R$ 19,90',
      },
      {
        id: 'tapioca-nutella-morango',
        name: 'Nutella com Morango',
        description: 'Nutella e fatias de morango',
        price: 'R$ 22,90',
      },
      {
        id: 'tapioca-cartola',
        name: 'Cartola',
        description: 'Muçarela, fatias de banana, açúcar e canela',
        price: 'R$ 20,90',
      },
      {
        id: 'tapioca-abacaxi',
        name: 'Delícia de Abacaxi',
        description: 'Abacaxi em pedaços aquecido no açúcar, leite condensado',
        price: 'R$ 20,90',
      },
    ],
  },
  {
    id: 'vitaminas',
    name: 'Vitaminas',
    emoji: '🥤',
    items: [
      {
        id: 'vitamina-banana',
        name: 'Banana',
        description: 'Banana e leite',
        price: 'R$ 9,90',
      },
      {
        id: 'vitamina-mamao',
        name: 'Mamão',
        description: 'Mamão e leite',
        price: 'R$ 10,90',
      },
      {
        id: 'vitamina-fortificante',
        name: 'Fortificante',
        description: 'Banana, mamão, maçã, aveia e leite',
        price: 'R$ 12,90',
      },
      {
        id: 'vitamina-acai-banana',
        name: 'Açaí com Banana',
        description: 'Açaí, banana, xarope de guaraná e leite',
        price: 'R$ 14,90',
      },
      {
        id: 'vitamina-acai-morango',
        name: 'Açaí com Morango',
        description: 'Açaí, morango, xarope de guaraná e leite',
        price: 'R$ 16,90',
      },
      {
        id: 'vitamina-super-acai-banana',
        name: 'Super Açaí com Banana',
        description: 'Açaí, banana, xarope de guaraná, granola, amendoim e leite',
        price: 'R$ 17,90',
      },
      {
        id: 'vitamina-super-acai-morango',
        name: 'Super Açaí com Morango',
        description: 'Açaí, morango, xarope de guaraná, granola, amendoim e leite',
        price: 'R$ 19,90',
      },
    ],
  },
  {
    id: 'acai',
    name: 'Açaí',
    emoji: '🍇',
    note: 'Acompanhamentos (escolha 2): Banana, Granola, Leite condensado, Leite em pó, Amendoim, Aveia. Adicional morango: +R$ 8,00',
    items: [
      {
        id: 'acai-pequeno',
        name: 'Açaí Pequeno',
        description: 'Com 2 acompanhamentos à escolha',
        price: 'R$ 19,90',
      },
      {
        id: 'acai-grande',
        name: 'Açaí Grande',
        description: 'Com 2 acompanhamentos à escolha',
        price: 'R$ 27,90',
      },
    ],
  },
  {
    id: 'smoothies',
    name: 'Smoothies',
    emoji: '🧃',
    items: [
      {
        id: 'smoothie-snowboard',
        name: 'Snowboard',
        description: 'Manga, hortelã e sorvete de creme',
        price: 'R$ 16,90',
      },
      {
        id: 'smoothie-esqui',
        name: 'Esquí',
        description: 'Abacaxi, morango e sorvete de creme',
        price: 'R$ 16,90',
      },
      {
        id: 'smoothie-hoquei',
        name: 'Hóquei',
        description: 'Abacaxi, manga, gengibre e sorvete de creme',
        price: 'R$ 16,90',
      },
      {
        id: 'smoothie-bobslad',
        name: 'Bobslad',
        description: 'Morango, maçã, banana e sorvete de creme',
        price: 'R$ 16,90',
      },
    ],
  },
  {
    id: 'sucos',
    name: 'Sucos',
    emoji: '🍊',
    note: 'Disponíveis em Copo ou Jarra. Opções: Simples, Detox e Especiais.',
    items: [
      {
        id: 'suco-abacaxi',
        name: 'Abacaxi / Acerola / Cajá / Limão / Manga',
        description: 'Sucos simples de polpa',
        price: 'Copo R$ 7,90 / Jarra R$ 15,90',
      },
      {
        id: 'suco-caju-uva',
        name: 'Cajú / Uva',
        description: 'Sucos simples',
        price: 'Copo R$ 8,90 / Jarra R$ 17,90',
      },
      {
        id: 'suco-acai-laranja',
        name: 'Açaí / Laranja / Maçã / Maracujá',
        description: 'Sucos simples de polpa',
        price: 'Copo R$ 9,90 / Jarra R$ 19,90',
      },
      {
        id: 'suco-morango',
        name: 'Morango',
        description: 'Suco simples de morango',
        price: 'Copo R$ 10,90 / Jarra R$ 21,90',
      },
      {
        id: 'suco-detox-limao',
        name: 'Detox Limão',
        description: 'Limão, couve e gengibre',
        price: 'Copo R$ 8,90 / Jarra R$ 17,90',
      },
      {
        id: 'suco-detox-verde',
        name: 'Detox Verde / Rosa / Amarelo / Maracujá',
        description: 'Sucos detox especiais',
        price: 'Copo R$ 10,90 / Jarra R$ 21,90',
      },
      {
        id: 'suco-detox-morango',
        name: 'Detox Morango',
        description: 'Morango, hortelã e gengibre',
        price: 'Copo R$ 11,90 / Jarra R$ 23,90',
      },
      {
        id: 'suco-especial-abacaxi',
        name: 'Especial: Abacaxi c/ Hortelã / Abacaxi c/ Uva / Limão c/ Hortelã',
        description: 'Sucos especiais combinados',
        price: 'Copo R$ 8,90 / Jarra R$ 17,90',
      },
      {
        id: 'suco-especial-laranja',
        name: 'Especial: Laranja c/ Mamão / Digestivo / Refrescante',
        description: 'Sucos especiais combinados',
        price: 'Copo R$ 9,90 / Jarra R$ 19,90',
      },
      {
        id: 'suco-especial-morango',
        name: 'Especial: Morango c/ Maracujá / Morango c/ Abacaxi / Anticelulite / Revigorante',
        description: 'Sucos especiais combinados',
        price: 'Copo R$ 10,90 / Jarra R$ 21,90',
      },
      {
        id: 'suco-rejuvenescedor',
        name: 'Rejuvenescedor',
        description: 'Morango, uva e maçã',
        price: 'Copo R$ 11,90 / Jarra R$ 23,90',
      },
    ],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    emoji: '🍨',
    items: [
      {
        id: 'sobremesa-cartola',
        name: 'Mini Crepe Cartola / Delícia de Abacaxi',
        description: 'Mini crepe recheado',
        price: 'R$ 19,90',
      },
      {
        id: 'sobremesa-nutella-banana',
        name: 'Mini Crepe Nutella Banana',
        description: 'Mini crepe com nutella e banana',
        price: 'R$ 20,90',
      },
      {
        id: 'sobremesa-nutella-morango',
        name: 'Mini Crepe Nutella Morango / Sweet Banana',
        description: 'Mini crepe com nutella e morango ou sweet banana',
        price: 'R$ 22,90',
      },
      {
        id: 'sobremesa-sweet-morango',
        name: 'Mini Crepe Sweet Morango',
        description: 'Mini crepe sweet morango, acompanha sorvete',
        price: 'R$ 24,90',
      },
      {
        id: 'sobremesa-sorvete',
        name: 'Bola de Sorvete',
        description: 'Sorvete de creme com calda de chocolate ou leite condensado',
        price: 'R$ 6,00',
      },
      {
        id: 'sobremesa-taca-acai',
        name: 'Taça de Açaí',
        description: 'Taça com açaí e um acompanhamento (exceto morango)',
        price: 'R$ 10,90',
      },
      {
        id: 'sobremesa-taca-abacaxi-banana',
        name: 'Taça Delícia de Abacaxi / Taça Delícia de Banana',
        description: 'Taça de sobremesa com frutas',
        price: 'R$ 12,90',
      },
      {
        id: 'sobremesa-taca-acai-delicia',
        name: 'Taça Delícia de Açaí',
        description: 'Açaí, abacaxi, sorvete de creme e leite condensado',
        price: 'R$ 15,90',
      },
      {
        id: 'sobremesa-cartola-banana',
        name: 'Cartola',
        description: 'Banana frita, muçarela, açúcar e canela',
        price: 'R$ 16,90',
      },
      {
        id: 'salada-frutas-aveia',
        name: 'Salada de Frutas com Aveia e Mel',
        description: 'Banana, maçã, mamão, abacaxi, laranja, uva-passa, aveia e mel',
        price: 'R$ 13,90',
      },
      {
        id: 'salada-frutas-sorvete',
        name: 'Salada de Frutas com Sorvete e Leite Condensado',
        description: 'Banana, maçã, mamão, abacaxi, uva-passa, sorvete de creme e leite condensado',
        price: 'R$ 17,90',
      },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    emoji: '🥃',
    items: [
      {
        id: 'bebida-agua',
        name: 'Água Mineral',
        price: 'R$ 5,00',
      },
      {
        id: 'bebida-agua-gas',
        name: 'Água com Gás',
        price: 'R$ 6,00',
      },
      {
        id: 'bebida-refri',
        name: 'Refrigerante Lata',
        price: 'R$ 7,00',
      },
      {
        id: 'bebida-cafe',
        name: 'Café Expresso',
        price: 'R$ 6,00',
      },
      {
        id: 'bebida-cafe-leite',
        name: 'Café Expresso com Leite',
        price: 'R$ 7,00',
      },
    ],
  },
];
