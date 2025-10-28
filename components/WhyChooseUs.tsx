import React from 'react';

const AutomationSection: React.FC = () => {
    const automations = [
        { title: 'Desarrollo Ágil y Transparente', description: 'Trabajamos en sprints cortos y mantenemos una comunicación constante para que siempre estés al tanto del progreso y puedas dar tu feedback.', image: 'https://placehold.co/500x350/ffffff/4f46e5?text=Desarrollo+Ágil' },
        { title: 'Tecnología Robusta y Escalable', description: 'Utilizamos las tecnologías más modernas y probadas para construir productos que no solo funcionan hoy, sino que están preparados para crecer en el futuro.', image: 'https://placehold.co/500x350/ffffff/4f46e5?text=Tecnología+Escalable' },
    ];
    return (
        <section className="py-24 bg-light-gray">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Nuestra Filosofía</span>
                    <h2 className="text-4xl font-bold text-text-primary mt-4">Innovación y Calidad en Cada Proyecto</h2>
                </div>
                <div className="space-y-16">
                    {automations.map((a, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
                                <img src={a.image} alt={a.title} className="rounded-xl"/>
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold text-text-primary">{a.title}</h3>
                                <p className="mt-4 text-lg text-text-secondary">{a.description}</p>
                                <a href="#" className="mt-6 inline-flex items-center text-primary font-semibold">
                                    Conocer Más
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutomationSection;
