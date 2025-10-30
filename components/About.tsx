import React, { useState } from 'react';
import { PlusIcon, MinusIcon, CheckIcon } from '@heroicons/react/24/outline';
import AnimatedSection from './AnimatedSection';

const AboutHero = () => (
    <section className="pt-40 pb-20 text-center bg-white" style={{ background: 'radial-gradient(circle, rgba(243,244,246,0.5) 0%, rgba(255,255,255,1) 30%)' }}>
        <div className="container mx-auto px-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex -space-x-2">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Agente feliz 1"/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e586910b323f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Agente feliz 2"/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Agente feliz 3"/>
                </div>
                <div>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                    </div>
                    <p className="text-sm text-text-secondary">+10,000 Agentes Felices</p>
                </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary max-w-4xl mx-auto leading-tight">
                Agentes de IA para menos trabajo manual
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mt-6">
                Nuestra misión es eliminar el trabajo repetitivo con agentes de IA inteligentes para que los equipos puedan centrarse en lo que realmente importa.
            </p>
            <button className="mt-8 bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-primary-hover transition-all duration-300 transform hover:scale-105">
                Obtén Acceso Anticipado &rarr;
            </button>
        </div>
    </section>
);

const ImageScroller = () => {
    const images = [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
        "https://images.unsplash.com/photo-1600508774634-4e54626eda87?q=80&w=800",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    ];
    const duplicatedImages = [...images, ...images];
    return(
        <section className="py-16 bg-white overflow-hidden">
            <div className="relative w-full">
                <div className="flex animate-marquee">
                    {duplicatedImages.map((src, i) => (
                        <div key={i} className="w-64 h-80 bg-gray-200 rounded-2xl shadow-lg flex-shrink-0 mx-3">
                            <img src={src} className="w-full h-full object-cover rounded-2xl" alt={`Imagen de oficina ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ClientsSection = () => {
    const clients = ['Bioplex', 'Zenithia', 'Nexiflow', 'Vortexia', 'LUMITRIX'];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <p className="text-text-secondary mb-8">Con la confianza de más de 10,000 fundadores y dueños de negocios.</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {clients.map(client => (
                        <div key={client} className="flex items-center space-x-2 text-gray-500 text-lg font-medium grayscale hover:grayscale-0 transition-all">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                            <span>{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutSectionContent = () => (
    <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-6">
            <div className="text-left max-w-2xl">
                <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Sobre MAST</span>
                <h2 className="text-4xl font-bold text-text-primary mt-4">Fundada para resolver un problema: demasiado trabajo manual.</h2>
                <p className="mt-4 text-lg text-text-secondary">En MAST, diseñamos agentes impulsados por IA que se encargan de tareas cotidianas como despachos, mensajería, gestión de documentos y más. Con la automatización como pilar, nuestra plataforma permite a las empresas escalar más rápido y trabajar de forma más inteligente sin necesidad de contrataciones adicionales.</p>
            </div>
            <div className="mt-12 relative">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600" alt="Equipo trabajando en una oficina" className="rounded-2xl shadow-2xl w-full" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[{title: 'Agentes para Negocios', value: '10000+'}, {title: 'Tareas Completadas', value: '12M+'}, {title: 'Tasa de Satisfacción', value: '98.6%'}, {title: 'Horas Ahorradas', value: '1.2M+'}].map(stat => (
                            <div key={stat.title} className="bg-white/80 backdrop-blur-md p-4 rounded-xl text-center shadow-lg">
                                <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                                <p className="text-xs sm:text-sm text-text-secondary mt-1">{stat.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const MissionVisionSection = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Impulsados por un Propósito</span>
                    <h2 className="text-4xl font-bold text-text-primary mt-4">¡En lo que creemos y hacia lo que construimos!</h2>
                </div>
                <p className="text-lg text-text-secondary">Creemos en la automatización práctica y centrada en las personas. Nuestra misión es hacer que el trabajo sea más inteligente, no más difícil, para equipos en todas partes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-light-gray p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-text-primary">Nuestra Misión</h3>
                    <p className="mt-2 text-text-secondary">Nuestra misión es eliminar el trabajo manual y repetitivo, capacitando a los equipos con agentes de IA inteligentes. Nuestro objetivo es automatizar tareas diarias como despachos, gestión de documentos e informes para que las empresas prosperen.</p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Tareas de bajo valor mediante la automatización</li>
                        <li className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Escalar más rápido sin aumentar la plantilla</li>
                    </ul>
                </div>
                <div className="bg-light-gray p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-text-primary">Nuestra Visión</h3>
                    <p className="mt-2 text-text-secondary">Visualizamos un futuro donde la IA no solo sea poderosa, sino también práctica, integrada sin problemas en los flujos de trabajo diarios de cada equipo. Un futuro donde la automatización no reemplace a las personas, sino que las potencie.</p>
                     <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Hacer accesible la automatización inteligente</li>
                        <li className="flex items-center gap-3"><CheckIcon className="w-5 h-5 text-primary" /> Construir IA que priorice a las personas y las apoye</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialCard: React.FC<{ quote: string, name: string, title: string, img: string, rating: number }> = ({ quote, name, title, img, rating }) => (
    <div className="bg-light-gray p-8 rounded-2xl">
        <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
        </div>
        <p className="text-text-secondary text-lg">“{quote}”</p>
        <div className="flex items-center mt-6">
            <img className="h-12 w-12 rounded-full object-cover" src={img} alt={name} />
            <div className="ml-4">
                <p className="font-semibold text-text-primary">{name}</p>
                <p className="text-text-secondary text-sm">{title}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        {name: 'Rajiv Sharma', title: 'Líder de Equipo, QuickFlow CRM', quote: 'La solución perfecta para nuestro negocio, especialmente para automatizar tareas rutinarias. Ahorramos horas cada semana y mejoramos la eficiencia general del equipo sin añadir complejidad.', img: 'https://placehold.co/100x100/EFEFEF/333333?text=RS', rating: 5},
        {name: 'Esther Howard', title: 'Gerente de Proyectos', quote: 'Reemplazamos múltiples pasos manuales con agentes de IA, ahorrando más de 40 horas al mes. La configuración fue sencilla y nuestros flujos de trabajo ahora son más rápidos y fiables.', img: 'https://placehold.co/100x100/EFEFEF/333333?text=EH', rating: 5},
        {name: 'Darlene Robertson', title: 'CEO y Co-fundadora', quote: 'Un antes y un después para nosotros: automatiza tareas clave, acorta los ciclos de trabajo, gestiona las tareas rutinarias más rápido, ahorra recursos y mantiene todo funcionando sin problemas.', img: 'https://placehold.co/100x100/EFEFEF/333333?text=DR', rating: 5},
        {name: 'Robert Fox', title: 'Director de Tecnología', quote: 'Es exactamente lo que necesitábamos para gestionar el trabajo rutinario más rápido, ahorrando tiempo, optimizando recursos y mejorando la eficiencia del equipo sin pasos innecesarios.', img: 'https://placehold.co/100x100/EFEFEF/333333?text=RF', rating: 5},
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Testimonios</span>
                <h2 className="text-4xl font-bold text-text-primary mt-4">La elección de equipos modernos</h2>
                <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Nuestra solución permite a equipos con visión de futuro colaborar sin problemas, aumentar la productividad e innovar más rápido.</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                    {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
                </div>
            </div>
        </section>
    );
};


const FaqItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6 last:border-b-0">
            <button className="w-full flex justify-between items-center text-left gap-4" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                <h4 className="text-lg font-medium text-text-primary">{question}</h4>
                {isOpen ? <MinusIcon className="w-6 h-6 text-primary flex-shrink-0" /> : <PlusIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />}
            </button>
            {isOpen && <p className="mt-4 text-text-secondary pr-8">{answer}</p>}
        </div>
    );
};
const FaqSection = () => {
    const faqs = [
        { q: '¿Necesito conocimientos técnicos para la configuración?', a: 'No, nuestro equipo se encarga de todo. Al gestionar tareas repetitivas como despachos, gestión de documentos y chats con clientes, nuestros agentes liberan a tu personal para que se centre en lo que realmente importa.' },
        { q: '¿Qué pueden automatizar sus agentes de IA?', a: 'Casi todo. Desde chats de soporte al cliente hasta entrada de datos, programación y generación de informes complejos. Si es una tarea digital repetitiva, es muy probable que podamos automatizarla.' },
        { q: '¿Qué tan seguros están mis datos?', a: 'La seguridad es nuestra máxima prioridad. Utilizamos protocolos de encriptación y protección de datos líderes en la industria para garantizar que tu información esté siempre segura.' },
        { q: '¿Puedo probar los agentes antes de su implementación?', a: '¡Por supuesto! Ofrecemos un entorno de pruebas (sandbox) donde puedes probar y perfeccionar tus agentes de IA a fondo antes de implementarlos en tus operaciones reales.' },
        { q: '¿Con qué herramientas puedo integrarme?', a: 'Nuestra plataforma se integra sin problemas con cientos de herramientas populares, incluyendo CRMs, ERPs, clientes de correo electrónico y software de gestión de proyectos.' },
        { q: '¿Y si necesito un flujo de trabajo de IA personalizado?', a: 'Nos especializamos en soluciones a medida. Nuestro equipo trabajará contigo para diseñar y construir un flujo de trabajo de IA personalizado y adaptado a tus necesidades exactas.' },
    ];

    return (
        <section className="py-24 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Ayuda y Soporte</span>
                        <h2 className="text-4xl font-bold text-text-primary mt-4">Preguntas Frecuentes</h2>
                        <p className="mt-4 text-text-secondary">Ayudándote a entender cómo MAST AI ofrece seguridad, cumplimiento y una automatización financiera más inteligente.</p>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            {faqs.map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => (
     <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="bg-primary rounded-2xl p-12 text-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.9), rgba(79, 70, 229, 0.9)), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundSize: 'cover' }}>
                <h2 className="text-4xl font-bold">Deja que la IA se encargue del trabajo repetitivo de tu equipo</h2>
                <p className="mt-4 max-w-2xl mx-auto">Desde despachos y documentos hasta mensajes e informes, automatiza las tareas que tu equipo no debería estar haciendo manualmente.</p>
                <button className="mt-8 bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Obtén 14 días de prueba gratis &rarr;
                </button>
            </div>
        </div>
    </section>
);


const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <AnimatedSection>
                <AboutHero />
            </AnimatedSection>
            <AnimatedSection>
                <ImageScroller />
            </AnimatedSection>
            <AnimatedSection>
                <ClientsSection />
            </AnimatedSection>
            <AnimatedSection>
                <AboutSectionContent />
            </AnimatedSection>
            <AnimatedSection>
                <MissionVisionSection />
            </AnimatedSection>
            <AnimatedSection>
                <TestimonialsSection />
            </AnimatedSection>
            <AnimatedSection>
                <FaqSection />
            </AnimatedSection>
            <AnimatedSection>
                <CtaSection />
            </AnimatedSection>
        </div>
    )
}

export default AboutPage;