import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(162, 213, 198, 0.1) 0%, transparent 35%), radial-gradient(circle at 85% 75%, rgba(162, 213, 198, 0.05) 0%, transparent 40%)'
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Agencia Digital en Perú
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Creamos páginas web y las posicionamos en Google, para negocios que están listos para crecer.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contacto" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Escríbenos Aquí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;