// Fix: Replaced placeholder content with a valid React component.
import React from 'react';
import type { Testimonial } from '../types';
import { QuoteIcon } from './icons';

const testimonials: Testimonial[] = [
  {
    quote: 'MAST superó todas nuestras expectativas. El equipo es profesional, atento y entregó un producto final de una calidad increíble. ¡Totalmente recomendados!',
    name: 'Ana García',
    title: 'CEO de InnovaTech',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    quote: 'El proceso de desarrollo fue transparente y muy colaborativo. Entendieron nuestra visión desde el primer día y la hicieron realidad. Estamos encantados con nuestra nueva web.',
    name: 'Carlos Rodríguez',
    title: 'Fundador de MarketUP',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d'
  },
   {
    quote: 'La atención al detalle y el compromiso con la calidad son impresionantes. Gracias a MAST, nuestra tienda online ha visto un aumento significativo en ventas.',
    name: 'Laura Fernández',
    title: 'Gerente de E-commerce, ModaEstilo',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full relative border border-brand-light-gray/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <QuoteIcon className="absolute top-6 right-6 w-12 h-12 text-brand-light-gray/60" />
        <p className="text-brand-gray italic flex-grow z-10">"{testimonial.quote}"</p>
        <div className="flex items-center mt-6 z-10">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-accent/50" />
            <div>
                <p className="font-bold text-brand-dark">{testimonial.name}</p>
                <p className="text-sm text-brand-gray">{testimonial.title}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="clientes">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-snug">
                Lo que dicen <span className="text-brand-accent">nuestros clientes</span>
            </h2>
            <p className="mt-4 text-lg text-brand-gray">
                Nuestra mayor satisfacción es el éxito y la confianza de quienes trabajan con nosotros.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;