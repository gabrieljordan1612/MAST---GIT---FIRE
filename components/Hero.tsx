
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto -mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4">
          Creamos Experiencias Digitales que Impulsan tu Negocio
        </h1>
        <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto">
          Desarrollo web premium, e-commerce de alto impacto y bibliotecas virtuales innovadoras.
        </p>
        <a 
          href="#contacto"
          className="bg-cyan-accent text-navy font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
        >
          Solicita tu Web
        </a>
      </div>
    </section>
  );
};

export default Hero;
