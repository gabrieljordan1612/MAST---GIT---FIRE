export interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const serviceDetailsData: ServiceDetails[] = [
  {
    id: 'web-pages',
    title: 'Desarrollo de paginas web',
    description: 'Creamos sitios web a medida, funcionales y optimizados para buscadores, alineados a los objetivos comerciales de tu empresa. Combinamos estrategia digital, tecnología y diseño UI/UX para que tu marca tenga una presencia sólida y moderna.',
    image: 'https://storage.googleapis.com/aistudio-hosting/transfer-learning/showcase-image.png'
  },
  {
    id: 'virtual-libraries',
    title: 'Bibliotecas virtuales',
    description: 'Desarrollamos plataformas de gestión documental y bibliotecas virtuales intuitivas y seguras. Facilitamos el acceso, la organización y la distribución de conocimiento para instituciones educativas y empresas, con herramientas de búsqueda avanzada y gestión de usuarios.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'web-apps',
    title: 'Creacion de aplicaciones web',
    description: 'Construimos aplicaciones web robustas y escalables para optimizar procesos y ofrecer servicios innovadores. Desde sistemas de gestión interna hasta plataformas complejas para clientes, transformamos tus ideas en soluciones de software a medida.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  }
];