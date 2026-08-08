// ============================================================
// CONFIGURAÇÕES CENTRAIS DO SITE - Edite apenas aqui
// ============================================================

export const siteConfig = {
  // Restaurante
  restaurantName: 'Bem Natural Candeias',
  slogan: 'Comer bem pode ser a melhor parte do seu dia',
  tagline: 'Alimentação saudável, saborosa e prática para todos os momentos do seu dia.',

  // Endereço
  address: 'Rua das Flores, 123 – Candeias, Salvador/BA',
  addressShort: 'Candeias, Salvador/BA',

  // Telefone e Contato
  phone: '(71) 99999-9999', // PLACEHOLDER: substituir pelo número real
  whatsappNumber: '5571999999999', // PLACEHOLDER: substituir pelo número real (com código do país)
  whatsappMessage: 'Olá! Gostaria de fazer um pedido.',

  // Redes Sociais e Delivery
  instagramHandle: '@bemnaturalcandeias',
  instagramUrl: 'https://instagram.com/bemnaturalcandeias', // PLACEHOLDER: verificar URL real

  ifoodUrl: 'https://www.ifood.com.br', // PLACEHOLDER: substituir pelo link real do iFood
  googleMapsUrl: 'https://maps.google.com/?q=Bem+Natural+Candeias', // PLACEHOLDER: substituir pelo link real

  // Horários de Funcionamento
  hours: [
    { day: 'Segunda a Sexta', time: '09h – 20h' },
    { day: 'Sábado', time: '09h – 18h' },
    { day: 'Domingo', time: 'Fechado' },
  ],

  // Formas de Atendimento
  services: [
    { label: 'Presencial', icon: '🍽️' },
    { label: 'Retirada', icon: '📦' },
    { label: 'iFood', icon: '🛵' },
    { label: 'WhatsApp', icon: '💬' },
  ],

  // Pagamento
  payment: 'Cartões de crédito e débito • PIX • Não aceitamos cartões refeição/alimentação',
};

export const getWhatsAppUrl = () => {
  const { whatsappNumber, whatsappMessage } = siteConfig;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
