import React from 'react';
import { BrandingIcon, SeoIcon, SocialMediaIcon, WebDevIcon } from './icons'; // Reusing icons for demonstration

const ValueIcon: React.FC<{ icon: React.ElementType; title: string }> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-4">
    <div className="bg-brand-light-gray/50 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-brand-blue" />
    </div>
    <span className="font-semibold text-brand-dark">{title}</span>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const values = [
    { title: 'Marca', icon: BrandingIcon },
    { title: 'Posicionamiento', icon: SeoIcon },
    { title: 'Fidelización', icon: SocialMediaIcon },
    { title: 'Más clientes', icon: WebDevIcon },
  ];

  return (
    <section id="nosotros" className="py-0">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-snug">
            Aseguramos resultados <span className="text-brand-accent">exitosos para tus proyectos</span>
          </h2>
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
            alt="Equipo de trabajo colaborando en un proyecto"
            className="rounded-2xl shadow-xl mt-8 w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-brand-dark">
                Somos una agencia digital que lleva más de 10 años ayudando a empresas a impulsar su crecimiento con <span className="text-brand-blue">soluciones digitales integrales.</span>
            </h3>
            <p className="text-brand-gray leading-relaxed">
                Nuestro enfoque combina estrategia, creatividad y tecnología para desarrollar proyectos efectivos desde el primer clic. Brindamos servicios especializados en Diseño y Desarrollo Web, E-commerce, Gestión de Redes Sociales, Branding, SEO y SEM, Producción Audiovisual y Desarrollo de Software a medida.
            </p>
            <p className="font-semibold text-brand-dark">Todas nuestras soluciones están enfocadas en:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {values.map((item) => (
                    <ValueIcon key={item.title} icon={item.icon} title={item.title} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;