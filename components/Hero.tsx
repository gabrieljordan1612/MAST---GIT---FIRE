import React from 'react';

const HeroSection: React.FC = () => (
  <section className="pt-32 pb-20 text-center bg-white" style={{ background: 'radial-gradient(circle, rgba(243,244,246,0.5) 0%, rgba(255,255,255,1) 30%)' }}>
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
        <p className="text-sm text-text-secondary">Líderes en Innovación y Diseño Digital</p>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary max-w-4xl mx-auto leading-tight">
        Experiencias Digitales de Vanguardia
      </h1>
      <p className="text-lg text-text-secondary max-w-3xl mx-auto mt-6">
        Desde sitios web impresionantes y aplicaciones robustas hasta bibliotecas virtuales y cursos de desarrollo. Damos vida a tus ideas con tecnología y diseño de élite.
      </p>
      <button className="mt-8 bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary-hover transition-all duration-300 transform hover:scale-105">
        Comienza tu Proyecto
      </button>
      <div className="mt-16 shadow-2xl rounded-xl max-w-6xl mx-auto">
        <img src="https://firebasestorage.googleapis.com/v0/b/mast---3-programas.firebasestorage.app/o/qsq.webp?alt=media&token=5ef46682-334d-45dc-9e9b-f19efa0b3632" alt="Dashboard de Proyectos Digitales" className="rounded-xl w-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;