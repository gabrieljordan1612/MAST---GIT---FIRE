import React from 'react';

const SetupSection: React.FC = () => {
    const steps = [
        { title: '1. Descubrimiento y Estrategia', desc: 'Nos reunimos para entender tus objetivos y definir el plan de acción perfecto para tu proyecto.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
        { title: '2. Diseño y Desarrollo', desc: 'Creamos prototipos y desarrollamos el producto con metodologías ágiles y feedback constante.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H21' },
        { title: '3. Lanzamiento y Crecimiento', desc: 'Desplegamos la solución y te acompañamos con soporte y estrategias para su evolución.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    ];
    return (
        <section className="py-24 bg-light-gray">
             <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Nuestro Proceso</span>
                    <h2 className="text-4xl font-bold text-text-primary mt-4">Nuestro Proceso de Colaboración</h2>
                    <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Un proceso claro y colaborativo garantiza que entreguemos resultados excepcionales a tiempo.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                            <p className="mt-2 text-text-secondary">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SetupSection;
