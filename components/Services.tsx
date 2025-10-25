import React from 'react';
import type { Service } from '../types';
import { CodeIcon, CartIcon, LibraryIcon } from './icons';

const servicesData: Service[] = [
  {
    icon: <CodeIcon className="w-10 h-10 text-cyan-accent" />,
    title: 'Desarrollo Web a Medida',
    description: 'Creamos sitios y aplicaciones web veloces, seguras y escalables, con un diseño único que refleja la identidad de tu marca.',
  },
  {
    icon: <CartIcon className="w-10 h-10 text-cyan-accent" />,
    title: 'E-commerce de Alto Nivel',
    description: 'Desarrollamos tiendas online robustas y optimizadas para la conversión, ofreciendo una experiencia de compra excepcional.',
  },
  {
    icon: <LibraryIcon className="w-10 h-10 text-cyan-accent" />,
    title: 'Bibliotecas Virtuales',
    description: 'Construimos plataformas digitales para la gestión y acceso a colecciones de documentos, libros y recursos multimedia.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-light-navy p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-accent/10 border border-transparent hover:border-cyan-accent/20">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-lightest-slate mb-2">{service.title}</h3>
    <p className="text-slate">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24">
      <h2 className="text-3xl font-bold text-center text-lightest-slate mb-12">
        <span className="text-cyan-accent font-mono text-xl mr-2">01.</span>
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
