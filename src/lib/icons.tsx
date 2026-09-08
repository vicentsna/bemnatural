// Conjunto de ícones em SVG inline — traço 1.6, currentColor
import type { SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  width: '1em',
  height: '1em',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const IconWhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21a9 9 0 1 0-7.87-4.61L3 21l4.77-1.25A8.96 8.96 0 0 0 12 21Z" />
    <path d="M8.8 8.4c-.2 0-.5.07-.7.35-.24.3-.9.88-.9 2.12s.92 2.45 1.05 2.62c.13.17 1.8 2.87 4.45 3.9 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.25.22-.62.22-1.15.15-1.26-.07-.11-.24-.17-.5-.3-.27-.14-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.17.26-.68.86-.83 1.03-.15.18-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3-.78-.68-1.3-1.53-1.46-1.79-.15-.26-.02-.4.12-.53.12-.12.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.98-.2-.5-.4-.44-.55-.44Z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconScooter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="17" r="2.5" />
    <circle cx="18" cy="17" r="2.5" />
    <path d="M8.5 17h6.2l2.3-7H19M14 6h2.2l1.6 4" />
    <path d="M14.7 10 12 17M5 10h5l1.5 4" />
  </svg>
);

export const IconBag = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 8h12l-1 12H7L6 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const IconStore = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
    <path d="M3 6h18l-1.4 4.2a2 2 0 0 1-3.8 0 2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-3.8 0L3 6Z" />
    <path d="M10 20v-4h4v4" />
  </svg>
);

export const IconInstagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </svg>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconCard = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M3 10h18M6.5 14.5h3" />
  </svg>
);

export const IconArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const IconLeaf = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M20 4C9 4 4 11 4 20c9 0 16-5 16-16Z" />
    <path d="M4 20c4-8 8-11 14-13" />
  </svg>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);
