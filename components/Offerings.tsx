import React, { useState } from 'react';
import { serviceDetailsData } from '../data/services';
import type { ServiceDetails } from '../data/services';

const Offerings: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(serviceDetailsData[0].id);
  const activeService = serviceDetailsData.find(service => service.id === activeServiceId);

  return (
    <section id="proyectos">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-snug">
            Nuestros <span className="text-brand-accent">Proyectos Destacados</span>
          </h2>
          <p className="mt-4 text-lg text-brand-gray">
            Explora cómo hemos transformado las ideas de nuestros clientes en soluciones digitales exitosas y funcionales.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Left Column: Service Tabs */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {serviceDetailsData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-6 rounded-lg text-left transition-all duration-300 w-full ${
                  activeServiceId === service.id
                    ? 'bg-white shadow-lg scale-105 ring-2 ring-brand-accent/50'
                    : 'bg-brand-background hover:bg-white hover:shadow-md'
                }`}
              >
                <h3 className={`font-bold text-xl ${
                    activeServiceId === service.id ? 'text-brand-blue' : 'text-brand-dark'
                }`}>
                    {service.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Column: Active Service Details */}
          <div className="lg:col-span-2 relative min-h-[500px]">
            {activeService && (
              <div
                key={activeService.id}
                className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in"
              >
                <div className="w-full h-80 rounded-xl shadow-lg overflow-hidden mb-8">
                  <img 
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{activeService.title}</h3>
                <p className="text-brand-gray leading-relaxed">{activeService.description}</p>
                <a href="#contacto" className="inline-block mt-6 bg-transparent text-brand-blue font-semibold py-2 px-6 border-2 border-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-colors duration-300">
                  Saber más
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;