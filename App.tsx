import React, { useState } from 'react';
import AnimatedSection from './components/AnimatedSection';
import Header from './components/Header';
import HeroSection from './components/Hero';
import FeaturesSection from './components/Offerings';
import AutomationSection from './components/WhyChooseUs';
import SetupSection from './components/Timeline';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/About';

const ClientsSection: React.FC = () => {
    const clients = ['Bioplex', 'Zenithia', 'Nexiflow', 'Vortexia', 'LUMITRIX'];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <p className="text-text-secondary mb-8">Con la confianza de más de 10,000 fundadores y dueños de negocios.</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {clients.map(client => (
                        <div key={client} className="flex items-center space-x-2 text-text-secondary text-lg font-medium">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            <span>{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const IntegrationsSection: React.FC = () => {
    const integrations = [
        { name: 'React', desc: 'Para interfaces de usuario interactivas y de alto rendimiento.', logo: 'https://logo.clearbit.com/reactjs.org' },
        { name: 'Node.js', desc: 'Para construir backends rápidos, escalables y eficientes.', logo: 'https://logo.clearbit.com/nodejs.org' },
        { name: 'TypeScript', desc: 'Para un código más seguro y mantenible a gran escala.', logo: 'https://logo.clearbit.com/typescriptlang.org' },
        { name: 'Figma', desc: 'Para el diseño colaborativo de interfaces y prototipos.', logo: 'https://logo.clearbit.com/figma.com' },
        { name: 'Vercel', desc: 'Para despliegues continuos y un rendimiento web de primera.', logo: 'https://logo.clearbit.com/vercel.com' },
        { name: 'PostgreSQL', desc: 'Para bases de datos robustas, fiables y potentes.', logo: 'https://logo.clearbit.com/postgresql.org' },
        { name: 'GitHub', desc: 'Para el control de versiones y colaboración en el código fuente.', logo: 'https://logo.clearbit.com/github.com' },
        { name: 'Visual Studio Code', desc: 'Editor de código fuente ligero pero potente para el desarrollo moderno.', logo: 'https://logo.clearbit.com/code.visualstudio.com' },
        { name: 'SQL Server', desc: 'Sistema de gestión de bases de datos relacionales de Microsoft.', logo: 'https://logo.clearbit.com/microsoft.com' },
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold bg-blue-100 text-primary py-1 px-3 rounded-full">Tecnologías</span>
                    <h2 className="text-4xl font-bold text-text-primary mt-4">Tecnologías con las que Trabajamos</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {integrations.map((int, i) => (
                        <div key={i} className="bg-light-gray p-6 rounded-2xl text-center">
                            <img src={int.logo} alt={int.name} className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-text-primary">{int.name}</h3>
                            <p className="text-sm text-text-secondary mt-1">{int.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => (
    <>
        <AnimatedSection>
            <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
            <ClientsSection />
        </AnimatedSection>
        <AnimatedSection>
          <FeaturesSection />
        </AnimatedSection>
        <AnimatedSection>
          <AutomationSection />
        </AnimatedSection>
        <AnimatedSection>
          <IntegrationsSection />
        </AnimatedSection>
        <AnimatedSection>
          <SetupSection />
        </AnimatedSection>
    </>
);


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: 'home' | 'contact' | 'about') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white text-text-primary font-inter antialiased">
      <Header onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;