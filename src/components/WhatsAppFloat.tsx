import { getWhatsAppUrl } from '../data/config';
import { IconWhatsApp } from '../lib/icons';

/** Botão flutuante do WhatsApp (desktop). No mobile o lugar é a barra de pedido. */
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
