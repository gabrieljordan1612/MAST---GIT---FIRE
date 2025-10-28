import React from 'react';

const TimelineCard: React.FC<{ plan: string; days: number }> = ({ plan, days }) => (
  <div className="bg-white rounded-xl shadow-lg text-center text-brand-dark overflow-hidden transform transition-all duration-300 hover:scale-105">
    <div className="bg-brand-light-gray py-2">
      <p className="font-semibold text-sm">{plan}</p>
    </div>
    <div className="py-4 px-6">
      <p className="text-6xl font-extrabold">{days}</p>
      <p className="text-brand-dark font-semibold">Días</p>
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <section 
        className="py-20 bg-brand-blue text-white"
        style={{
            backgroundImage: `
                radial-gradient(circle at 15% 25%, rgba(182, 176, 159, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 85% 75%, rgba(182, 176, 159, 0.1) 0%, transparent 50%)
            `,
            backgroundColor: '#000000'
        }}
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Tu página web en <br />
            <span 
              className="text-brand-accent"
              style={{textShadow: '0 0 10px rgba(182, 176, 159, 0.3)'}}
            >
              tiempo récord
            </span>
          </h2>
          <p className="mt-6 text-lg opacity-80 max-w-md mx-auto lg:mx-0">
            Con nuestra metodología ágil, no esperes más para lanzar tu web.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            ¿Empezamos Hoy?
          </a>
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <TimelineCard plan="Plan Profesional" days={5} />
          <TimelineCard plan="Plan Empresarial" days={10} />
          <TimelineCard plan="Plan Corporativo" days={15} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;