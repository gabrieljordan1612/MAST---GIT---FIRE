import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-off-white font-poppins">
      <CustomCursor />
      <Header />
      <main className="container mx-auto px-6 sm:px-10 md:px-16">
        <Hero />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;