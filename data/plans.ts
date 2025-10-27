export interface Plan {
  name: string;
  price: string;
  normalPrice: string;
  target: string;
  features: { text: string; bold?: boolean }[];
  launchTime: string;
  renewalFee: string;
  highlighted: boolean;
  ctaText: string;
}

export const pricingPlans: Plan[] = [
  {
    name: 'Profesional',
    price: '1250',
    normalPrice: '1500',
    target: 'Emprendedores y PYMES',
    features: [
      { text: '1 Página Interna', bold: true },
      { text: '10 Bloques o Secciones', bold: true },
      { text: '100% Administrable' },
      { text: 'Whatsapp' },
      { text: 'Google SEO' },
      { text: 'WordPress Theme' },
      { text: '5 Correo profesionales*' },
      { text: 'Hosting + COM + SSL*' },
      { text: 'Soporte, capacitación y mucho más ...' },
    ],
    launchTime: '¡Lanza tu web en 5 días!',
    renewalFee: '450',
    highlighted: false,
    ctaText: 'Genera tu Cotización',
  },
  {
    name: 'Empresarial',
    price: '1750',
    normalPrice: '2000',
    target: 'Negocios en Crecimiento',
    features: [
      { text: '5 Páginas Internas', bold: true },
      { text: '25 Bloques o Secciones', bold: true },
      { text: '100% Administrable' },
      { text: 'Whatsapp' },
      { text: 'Google SEO' },
      { text: 'WordPress Theme' },
      { text: '5 Correo profesionales*' },
      { text: 'Hosting + COM + SSL*' },
      { text: 'Soporte, capacitación y mucho más ...' },
    ],
    launchTime: '¡Lanza tu web en 10 días!',
    renewalFee: '450',
    highlighted: true,
    ctaText: 'Genera tu Cotización',
  },
  {
    name: 'Corporativo',
    price: '2250',
    normalPrice: '2500',
    target: 'Empresas Consolidadas',
    features: [
      { text: '10 Páginas Internas', bold: true },
      { text: '50 Bloques o Secciones', bold: true },
      { text: '100% Administrable' },
      { text: 'Whatsapp' },
      { text: 'Google SEO' },
      { text: 'WordPress Theme' },
      { text: '5 Correo profesionales*' },
      { text: 'Hosting + COM + SSL*' },
      { text: 'Soporte, capacitación y mucho más ...' },
    ],
    launchTime: '¡Lanza tu web en 15 días!',
    renewalFee: '450',
    highlighted: false,
    ctaText: 'Genera tu Cotización',
  },
];
