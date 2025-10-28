import React from 'react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    { title: 'Desarrollo Web a Medida', description: 'Creamos sitios web únicos, rápidos y optimizados para el SEO que capturan la esencia de tu marca.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { title: 'Creación de Aplicaciones', description: 'Desarrollamos aplicaciones móviles y web intuitivas y potentes para iOS, Android y la web.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { title: 'Bibliotecas Virtuales', description: 'Diseñamos y construimos plataformas robustas para la gestión y acceso a contenido digital.', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { title: 'Diseño UI/UX de Vanguardia', description: 'Nos enfocamos en la experiencia del usuario para crear interfaces atractivas y fáciles de usar.', icon: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' },
    { title: 'Cursos de Desarrollo', description: 'Aprende a programar con nuestros cursos prácticos impartidos por expertos de la industria.', icon: 'M12 6.253v11.494m-9-5.747h18' },
    { title: 'Mantenimiento y Soporte', description: 'Ofrecemos planes de soporte continuo para asegurar que tu proyecto siempre funcione a la perfección.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  ];
  return (
    <section id="servicios" className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-xl">
          <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Soluciones</span>
          <h2 className="text-4xl font-bold text-text-primary mt-4">Nuestros Servicios para el Éxito Digital</h2>
        </div>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          Ofrecemos un conjunto completo de servicios para cubrir todas tus necesidades digitales, desde la concepción de la idea hasta el lanzamiento y el crecimiento.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {solutions.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} /></svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 text-text-secondary">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
