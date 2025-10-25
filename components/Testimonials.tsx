import React from 'react';
import type { Testimonial } from '../types';
import { QuoteIcon } from './icons';

const testimonialsData: Testimonial[] = [
  {
    quote: 'El equipo de MAST transformó nuestra visión en una realidad digital impresionante. Su atención al detalle y profesionalismo son inigualables. Nuestro e-commerce nunca ha funcionado mejor.',
    name: 'Ana García',
    title: 'CEO de Tech Innovators',
    avatar: 'https://i.pravatar.cc/100?u=anagarcia',
  },
  {
    quote: 'Trabajar con MAST fue una experiencia fluida y eficiente. Entregaron nuestra biblioteca virtual antes de lo previsto y el resultado final superó todas nuestras expectativas.',
    name: 'Carlos Martínez',
    title: 'Director de Ediciones Digitales',
    avatar: 'https://i.pravatar.cc/100?u=carlosmartinez',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24">
      <h2 className="text-3xl font-bold text-center text-dark-slate mb-12">
        <span className="text-primary-blue font-mono text-xl mr-2">03.</span>
        Lo Que Dicen Nuestros Clientes
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="relative bg-white p-8 rounded-lg shadow-lg">
            <QuoteIcon className="absolute top-4 right-4 w-12 h-12 text-light-slate" aria-hidden="true" />
            <p className="text-slate italic mb-6 relative z-10">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-primary-blue" />
              <div>
                <p className="font-bold text-dark-slate">{testimonial.name}</p>
                <p className="text-sm text-slate">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;