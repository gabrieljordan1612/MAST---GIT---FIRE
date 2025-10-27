import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Offerings from './components/Offerings';
import Pricing from './components/Pricing';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/TypingAnimation';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-brand-background text-brand-gray font-sans antialiased">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        
        <section className="bg-white py-24 md:py-32">
          <AnimatedSection>
            <Services />
          </AnimatedSection>
        </section>

        <section className="bg-brand-background py-24 md:py-32">
          <AnimatedSection>
            <WhyChooseUs />
          </AnimatedSection>
        </section>

        <section className="bg-white py-24 md:py-32">
          <AnimatedSection>
            <Offerings />
          </AnimatedSection>
        </section>

        <section className="bg-brand-background py-24 md:py-32">
          <AnimatedSection>
            <Pricing />
          </AnimatedSection>
        </section>

        <AnimatedSection>
            <Timeline />
        </AnimatedSection>

        <section className="bg-white py-24 md:py-32">
            <AnimatedSection>
                <Testimonials />
            </AnimatedSection>
        </section>
        
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;