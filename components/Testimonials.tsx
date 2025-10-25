
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: 'El equipo de MAST transformó nuestra visión en una realidad digital impresionante. Su atención al detalle y profesionalismo son inigualables. Nuestro e-commerce nunca ha funcionado mejor.',
    name: 'Ana García',
    title: 'CEO de Tech Innovators',
    avatar: 'https://picsum.photos/id/237/100/100',
  },
  {
    quote: 'Trabajar con MAST fue una experiencia fluida y eficiente. Entregaron nuestra biblioteca virtual antes de lo previsto y el resultado final superó todas nuestras expectativas.',
    name: 'Carlos Martínez',
    title: 'Director de Ediciones Digitales',
    avatar: 'https://picsum.photos/id/238/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24">
      <h2 className="text-3xl font-bold text-center text-lightest-slate mb-12">
        Lo Que Dicen Nuestros Clientes
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-light-navy p-8 rounded-lg shadow-lg">
            <p className="text-light-slate italic mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-accent" />
              <div>
                <p className="font-bold text-lightest-slate">{testimonial.name}</p>
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
