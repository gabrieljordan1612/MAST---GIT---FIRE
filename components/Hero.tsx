import React from 'react';

const ScrollIndicator = () => (
    <a href="#servicios" aria-label="Ir a la sección de servicios" className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-full h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
        </div>
    </a>
)


const Hero: React.FC = () => {
  // REEMPLAZA ESTA URL con la URL de tu imagen en Firebase Storage o cualquier otro servicio.
  const backgroundImageUrl = 'https://firebasestorage.googleapis.com/v0/b/mast---3-programas.firebasestorage.app/o/space1.jpg?alt=media&token=2397d2e1-0ff7-4a82-b54f-bebcd0c975b1';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-dark-slate/70" aria-hidden="true"></div>

        <div className="relative z-20 text-center max-w-4xl mx-auto -mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Creamos Experiencias Digitales que Impulsan tu Negocio
            </h1>
            <p className="text-lg md:text-xl text-light-slate mb-8 max-w-2xl mx-auto">
                Desarrollo web premium, e-commerce de alto impacto y bibliotecas virtuales innovadoras.
            </p>
            <a 
                href="#contacto"
                className="bg-primary-blue text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-blue/30"
            >
                Solicita tu Web
            </a>
        </div>
        <ScrollIndicator />
    </section>
  );
};

export default Hero;