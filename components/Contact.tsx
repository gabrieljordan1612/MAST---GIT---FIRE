import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon, ChevronDownIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section 
      id="contacto" 
      className="py-16"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(rgba(182, 176, 159, 0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 text-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Hagamos algo grande</h2>
            <p className="text-lg opacity-80 mb-10 max-w-lg">
              Cuéntanos sobre tu idea, empresa o marca y nos encargaremos de brindarte soluciones reales.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-brand-accent" />
                <span className="text-lg">+51 938 236 622</span>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6 text-brand-accent" />
                <span className="text-lg">info@mast.pe</span>
              </div>
              <div className="flex items-center gap-4">
                <LocationIcon className="w-6 h-6 text-brand-accent" />
                <span className="text-lg">Av. Almirante Miguel Grau 1380, Barranco, Lima – Perú</span>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Nombres y Apellidos*" className="w-full bg-white text-brand-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Correo" className="w-full bg-white text-brand-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent" />
              <input type="tel" placeholder="Celular" className="w-full bg-white text-brand-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            </div>
             <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                    <select className="w-full bg-white text-brand-dark p-4 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-brand-accent">
                        <option>¿Quién soy?</option>
                    </select>
                    <ChevronDownIcon className="w-5 h-5 text-brand-dark/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <input type="text" placeholder="Empresa" className="w-full bg-white text-brand-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent" />
             </div>
            <div className="relative">
                <select className="w-full bg-white text-brand-dark p-4 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-brand-accent">
                    <option>Necesito</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-brand-dark/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <input type="text" placeholder="Cuéntanos cual es tu presupuesto" className="w-full bg-white text-brand-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent" />
            <textarea placeholder="Cuéntanos un poco de tus requerimientos" rows={4} className="w-full bg-white text-brand-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"></textarea>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="privacy" className="h-5 w-5 rounded border-gray-300 text-brand-accent focus:ring-brand-accent" />
              <label htmlFor="privacy" className="text-sm opacity-80">He leído la política de privacidad de MAST y acepto recibir sus comunicaciones.</label>
            </div>
            <button type="submit" className="w-full bg-brand-accent text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;