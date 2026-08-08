import { getWhatsAppUrl } from '../data/config';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      id="whatsapp-float-btn"
      aria-label="Falar com o restaurante pelo WhatsApp"
      title="Chamar no WhatsApp"
    >
      <div className="whatsapp-float-pulse" aria-hidden="true" />
      <span role="img" aria-hidden="true">💬</span>
    </a>
  );
}
