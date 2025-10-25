import React from 'react';

const BackgroundParticles = () => (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="particle" style={{ width: '50px', height: '50px', top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ width: '100px', height: '100px', top: '30%', left: '80%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ width: '25px', height: '25px', top: '70%', left: '5%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ width: '75px', height: '75px', top: '80%', left: '60%', animationDelay: '3s' }}></div>
    </div>
);

const ScrollIndicator = () => (
    <a href="#servicios" aria-label="Ir a la sección de servicios" className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
        <div className="w-6 h-10 border-2 border-slate rounded-full p-1">
            <div className="w-full h-2 bg-slate rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
        </div>
    </a>
)


const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <BackgroundParticles />
      <div className="relative z-10 text-center max-w-4xl mx-auto -mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-lightest-slate to-slate mb-4">
          Creamos Experiencias Digitales que Impulsan tu Negocio
        </h1>
        <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto">
          Desarrollo web premium, e-commerce de alto impacto y bibliotecas virtuales innovadoras.
        </p>
        <a 
          href="#contacto"
          className="bg-cyan-accent text-navy font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-accent/20"
        >
          Solicita tu Web
        </a>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
