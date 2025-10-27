import React, { useState } from 'react';
import { WebDevIcon, EcommerceIcon, SocialMediaIcon, SeoIcon, VideoIcon } from './icons';

// New detailed service data
const servicesData = [
  { 
    id: 'web-dev',
    icon: WebDevIcon, 
    name: 'Diseño y Desarrollo Web',
    description: 'Creamos sitios web a medida, funcionales y optimizados para buscadores, alineados a los objetivos comerciales de tu empresa. Combinamos estrategia digital, tecnología y diseño UI/UX para que tu marca tenga una presencia sólida y moderna.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'e-commerce',
    icon: EcommerceIcon, 
    name: 'E-commerce',
    description: 'Desarrollamos tiendas online robustas y seguras, enfocadas en la experiencia de usuario para maximizar tus ventas. Integramos pasarelas de pago, gestión de inventario y todas las herramientas necesarias para el éxito de tu negocio digital.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'social-media',
    icon: SocialMediaIcon, 
    name: 'Gestión de Redes Sociales',
    description: 'Creamos y gestionamos estrategias de contenido para redes sociales que conectan con tu audiencia y construyen una comunidad fiel a tu marca. Aumentamos tu visibilidad, engagement y conversiones a través de contenido creativo y campañas efectivas.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop'
  },
  { 
    id: 'seo-sem',
    icon: SeoIcon, 
    name: 'SEO y SEM',
    description: 'Optimizamos tu presencia en motores de búsqueda para atraer tráfico cualificado y aumentar tu visibilidad. Implementamos estrategias de SEO técnico, de contenido y link building, complementadas con campañas de SEM para resultados inmediatos.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'video',
    icon: VideoIcon, 
    name: 'Producción Audiovisual',
    description: 'Producimos contenido audiovisual de alta calidad que cuenta la historia de tu marca y cautiva a tu audiencia. Desde videos corporativos hasta contenido para redes sociales, nuestro equipo creativo se encarga de todo el proceso, desde la idea hasta la postproducción.',
    image: 'https://images.unsplash.com/photo-1574717024633-6005c4b4eb6a?q=80&w=2070&auto=format&fit=crop'
  },
];

const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const activeService = servicesData.find(service => service.id === activeServiceId);

  return (
    <section id="servicios">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-snug">
            Soluciones digitales <span className="text-brand-accent">a la medida de tu negocio</span>
          </h2>
          <p className="mt-4 text-lg text-brand-gray">
            Impulsamos el crecimiento de tu empresa con servicios integrales que combinan estrategia, creatividad y tecnología de vanguardia.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Service Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-4 p-5 rounded-lg text-left transition-all duration-300 w-full ${
                  activeServiceId === service.id
                    ? 'bg-white shadow-lg scale-105 ring-2 ring-brand-accent/50'
                    : 'bg-brand-background hover:bg-white hover:shadow-md'
                }`}
              >
                <div className={`p-3 rounded-full transition-colors duration-300 ${
                    activeServiceId === service.id ? 'bg-brand-blue/10' : 'bg-brand-light-gray'
                }`}>
                    <service.icon className={`w-6 h-6 transition-colors duration-300 ${
                        activeServiceId === service.id ? 'text-brand-blue' : 'text-brand-gray'
                    }`} />
                </div>
                <h3 className={`font-bold text-lg ${
                    activeServiceId === service.id ? 'text-brand-blue' : 'text-brand-dark'
                }`}>
                    {service.name}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Column: Active Service Details */}
          <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-[500px]">
            {activeService && (
              <div
                key={activeService.id}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in"
              >
                <div className="w-full h-64 sm:h-80 rounded-xl shadow-lg overflow-hidden mb-8">
                  <img 
                    src={activeService.image}
                    alt={activeService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{activeService.name}</h3>
                <p className="text-brand-gray leading-relaxed">{activeService.description}</p>
                <a href="#contacto" className="inline-flex items-center gap-2 mt-6 bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                  <span>Solicitar Servicio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;