import React from 'react';
import { pricingPlans } from '../data/plans';
import type { Plan } from '../data/plans';
import { CheckIcon } from './icons';

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div className={`
      bg-white rounded-2xl shadow-lg border-2 flex flex-col transition-all duration-300
      ${plan.highlighted ? 'border-brand-accent scale-105' : 'border-brand-light-gray/50 hover:-translate-y-2'}
    `}>
      {/* Header */}
      <div className={`p-6 rounded-t-xl text-center ${plan.highlighted ? 'bg-brand-accent' : 'bg-brand-blue'}`}>
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      </div>
      
      {/* Price */}
      <div className="p-8 text-center bg-white">
        <p className="text-5xl font-extrabold text-brand-dark">
          <span className="text-3xl font-semibold align-top mr-1">S/</span>
          {plan.price}
        </p>
        <p className="text-brand-gray mt-2">Normal: S/ {plan.normalPrice}</p>
        <p className="font-semibold text-brand-blue mt-4">{plan.target}</p>
      </div>

      {/* Separator */}
      <div className="px-8"><div className="border-t border-brand-light-gray"></div></div>

      {/* Features */}
      <div className="p-8 flex-grow">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
              <span className={`text-brand-gray ${feature.bold ? 'font-semibold text-brand-dark' : ''}`}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Launch Time & Renewal */}
      <div className="px-8">
         <p className="text-center font-bold text-brand-accent text-lg my-4">{plan.launchTime}</p>
         <div className="border-t border-brand-light-gray"></div>
         <p className="text-center text-sm text-brand-gray my-4">* Renovación Anual: S/ {plan.renewalFee}</p>
      </div>

      {/* CTA */}
      <div className="p-8 pt-0">
        <a href="#contacto" className={`
          w-full block text-center font-bold py-3 px-6 rounded-lg transition-all duration-300
          ${plan.highlighted ? 'bg-brand-accent text-white hover:bg-opacity-90' : 'bg-brand-blue text-white hover:bg-opacity-90'}
        `}>
          {plan.ctaText}
        </a>
      </div>
    </div>
  );
};


const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-0">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-left max-w-3xl mb-16">
          <p className="font-semibold text-brand-gray mb-2">Precios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-snug">
            Planes de diseño de páginas web en Perú
          </h2>
          <p className="mt-4 text-lg text-brand-gray">
            ¡Empieza hoy! Todos nuestros planes son escalables y crecen contigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="text-center text-xs text-brand-gray mt-12 max-w-2xl mx-auto space-y-2">
            <p>* Te brindamos el primer año GRATIS de Hosting, Dominio .COM, 5 Correos y SSL.</p>
            <p>* Los precios no incluyen I.G.V. Válidos para compras desde Perú.</p>
            <p>* Por favor, lee aquí los términos y condiciones.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
