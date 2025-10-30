import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import AnimatedSection from './AnimatedSection';

const ContactInfoCard: React.FC<{icon: React.ReactNode, title: string, description: string, link: string, linkText: string}> = ({ icon, title, description, link, linkText }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
        <div className="bg-blue-100 p-3 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        <p className="text-text-secondary my-2">{description}</p>
        <a href={link} className="text-primary font-semibold hover:underline break-all">{linkText}</a>
    </div>
);

const FaqItem: React.FC<{question: string, answer: string}> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6 last:border-b-0">
            <button
                className="w-full flex justify-between items-center text-left gap-4"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h4 className="text-lg font-medium text-text-primary">{question}</h4>
                {isOpen ? <MinusIcon className="w-6 h-6 text-primary flex-shrink-0" /> : <PlusIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />}
            </button>
            {isOpen && (
                <p className="mt-4 text-text-secondary pr-8">{answer}</p>
            )}
        </div>
    );
};

const ContactPage: React.FC = () => {
    const faqs = [
        { q: '¿Necesito habilidades técnicas para configurar esto?', a: 'No, nuestro equipo se encarga de toda la configuración técnica. Nos enfocamos en entender tus necesidades para entregar una solución lista para usar.' },
        { q: '¿Qué tipo de procesos pueden automatizar?', a: 'Podemos automatizar una amplia gama de tareas, desde la gestión de documentos y la comunicación con clientes hasta el análisis de datos y la generación de informes.' },
        { q: '¿Qué tan seguros están mis datos?', a: 'La seguridad es nuestra máxima prioridad. Utilizamos encriptación de extremo a extremo y cumplimos con los más altos estándares de seguridad de la industria.' },
        { q: '¿Puedo probar los agentes de IA antes de implementarlos?', a: '¡Por supuesto! Ofrecemos un período de prueba y demostraciones personalizadas para que puedas ver el valor de nuestras soluciones antes de comprometerte.' },
        { q: '¿Con qué herramientas puedo integrarme?', a: 'Nuestra plataforma es flexible y se integra con cientos de herramientas populares como CRMs, ERPs, y plataformas de marketing digital.' },
    ];

    return (
        <div className="bg-light-gray pt-24">
            {/* Contact Info Section */}
            <AnimatedSection>
                <section className="py-24 text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary">Ponte en contacto</h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">Explora nuestras soluciones, estrategias de automatización e historias de éxito de equipos que usan nuestros agentes de IA.</p>
                        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                            <ContactInfoCard 
                                icon={<EnvelopeIcon className="w-8 h-8 text-primary"/>}
                                title="Email"
                                description="Contacta a nuestro equipo directamente por email."
                                link="mailto:contacto@mast.dev"
                                linkText="contacto@mast.dev"
                            />
                            <ContactInfoCard 
                                icon={<PhoneIcon className="w-8 h-8 text-primary"/>}
                                title="Teléfono"
                                description="Habla con nuestro equipo de soporte en cualquier momento."
                                link="tel:+14152347890"
                                linkText="+1 (415) 234-7890"
                            />
                            <ContactInfoCard 
                                icon={<MapPinIcon className="w-8 h-8 text-primary"/>}
                                title="Dirección"
                                description="Visita nuestra oficina o envíanos correspondencia."
                                link="#"
                                linkText="335 Madison, New York, NY 10017"
                            />
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Contact Form & Map Section */}
            <AnimatedSection>
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-4xl font-bold text-text-primary">Escríbenos</h2>
                                <p className="mt-2 text-text-secondary">Contáctanos para preguntas, feedback o consultas.</p>
                                <form className="mt-8 space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input type="text" id="first-name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Apellido</label>
                                            <input type="text" id="last-name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                                        <input type="tel" id="phone-number" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                        <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                                    </div>
                                    <p className="text-xs text-gray-500">Al contactarnos, aceptas nuestra <a href="#" className="font-medium text-primary hover:underline">Política de Privacidad</a>.</p>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                            Enviar Mensaje &rarr;
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg mt-10 lg:mt-0">
                                 <img src="https://firebasestorage.googleapis.com/v0/b/mast---3-programas.firebasestorage.app/o/map.png?alt=media&token=c194e8a4-0a37-4f40-a352-7236d9d48b11" alt="Ubicación de la oficina en un mapa" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            {/* FAQ Section */}
            <AnimatedSection>
                <section className="py-24 bg-light-gray">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                 <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Ayuda y Soporte</span>
                                 <h2 className="text-4xl font-bold text-text-primary mt-4">Preguntas Frecuentes</h2>
                                 <p className="mt-4 text-text-secondary">Ayudándote a entender cómo nuestras soluciones de IA entregan seguridad, inteligencia y automatización más inteligente.</p>
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
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="bg-primary rounded-2xl p-12 text-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.9), rgba(79, 70, 229, 0.9)), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")' , backgroundSize: 'cover' }}>
                            <h2 className="text-4xl font-bold">Deja que la IA elimine el trabajo pesado de tu equipo</h2>
                            <p className="mt-4 max-w-2xl mx-auto">Desde el despacho y documentos hasta mensajes y reportes, automatiza las tareas que no deberían hacerse manualmente.</p>
                            <button className="mt-8 bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                                Obtén 14 días de prueba gratis &rarr;
                            </button>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default ContactPage;