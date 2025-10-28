import React from 'react';

const FeaturesSection: React.FC = () => {
    const features = [
        { title: 'Plataforma E-learning Interactiva', description: 'Una plataforma completa para cursos en línea, con seguimiento de progreso, evaluaciones y certificados.', image: 'https://placehold.co/600x400/f3f4f6/4f46e5?text=E-learning' },
        { title: 'Aplicación Móvil de Gestión', description: 'App para la gestión de equipos y proyectos en tiempo real, mejorando la productividad y comunicación.', image: 'https://placehold.co/600x400/f3f4f6/4f46e5?text=App+Móvil' },
        { title: 'Sitio Web Corporativo Moderno', description: 'Un portal web elegante que sirve como el centro de la presencia digital de una marca líder.', image: 'https://placehold.co/400x300/f3f4f6/4f46e5?text=Web+Corporativa' },
        { title: 'Dashboard de Analíticas', description: 'Visualización de datos complejos de forma sencilla para la toma de decisiones estratégicas.', image: 'https://placehold.co/400x300/f3f4f6/4f46e5?text=Dashboard' },
        { title: 'Biblioteca Virtual Especializada', description: 'Un sistema de archivo y consulta digital para una institución académica de prestigio.', image: 'https://placehold.co/400x300/f3f4f6/4f46e5?text=Biblioteca+Virtual' },
    ];
    return (
        <section id="proyectos" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Proyectos</span>
                    <h2 className="text-4xl font-bold text-text-primary mt-4">Proyectos que Marcan la Diferencia</h2>
                    <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Nos enorgullece crear soluciones que no solo cumplen objetivos, sino que también establecen nuevos estándares de calidad y diseño.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {features.slice(0, 2).map((f, i) => (
                        <div key={i} className="bg-light-gray p-8 rounded-2xl flex flex-col">
                           <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 aspect-[3/2]">
                             <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                           </div>
                           <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-text-primary">{f.title}</h3>
                                <p className="mt-2 text-text-secondary">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {features.slice(2).map((f, i) => (
                        <div key={i} className="bg-light-gray p-8 rounded-2xl flex flex-col">
                           <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 aspect-[4/3]">
                             <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                           </div>
                           <div className="flex-grow">
                            <h3 className="text-xl font-semibold text-text-primary">{f.title}</h3>
                            <p className="mt-2 text-text-secondary">{f.description}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
