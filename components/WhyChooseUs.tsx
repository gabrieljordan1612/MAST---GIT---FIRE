import React from 'react';
import type { Benefit } from '../types';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const benefitsData: Benefit[] = [
  {
    title: 'Calidad Insuperable',
    description: 'Nos obsesionamos con los detalles. Cada línea de código y cada pixel está diseñado para alcanzar la perfección y superar tus expectativas.',
  },
  {
    title: 'Entrega Rápida y Eficiente',
    description: 'Valoramos tu tiempo. Implementamos metodologías ágiles para garantizar que tu proyecto se complete en los plazos acordados, sin sacrificar calidad.',
  },
  {
    title: 'Soporte Continuo',
    description: 'Tu éxito es nuestro éxito. Ofrecemos soporte y mantenimiento post-lanzamiento para asegurar que tu plataforma funcione siempre a la perfección.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-lightest-slate mb-4">
          <span className="text-cyan-accent font-mono text-xl mr-2">02.</span>
          Por qué Elegirnos
        </h2>
        <p className="text-lg text-slate max-w-3xl mx-auto mb-12">
          En MAST, no solo construimos sitios web, creamos alianzas estratégicas para impulsar tu crecimiento digital.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="bg-light-navy/50 text-center p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-accent/10 border border-transparent hover:border-cyan-accent/20">
            <div className="flex justify-center mb-4">
              <CheckIcon className="w-12 h-12 text-cyan-accent" />
            </div>
            <h3 className="text-xl font-bold text-lightest-slate mb-2">{benefit.title}</h3>
            <p className="text-slate">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
