import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIdx, setPhraseIdx] = useState(0);

  const typingDelay = 120;
  const erasingDelay = 60;
  const newPhraseDelay = 2000; // Delay after a phrase is fully typed

  const phrasesToRotate = ["Agencia Digital en Perú", "Creamos Páginas Web", "Posicionamos en Google"];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      // Typing effect
      if (displayText.length < phrasesToRotate[phraseIdx].length) {
        timeout = setTimeout(() => {
          setDisplayText(phrasesToRotate[phraseIdx].slice(0, displayText.length + 1));
        }, typingDelay);
      } else {
        // Phrase is fully typed, wait then start erasing
        timeout = setTimeout(() => setIsTyping(false), newPhraseDelay);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingDelay);
      } else {
        // Phrase is fully erased, switch to next phrase and start typing
        setIsTyping(true);
        setPhraseIdx((prev) => (prev + 1) % phrasesToRotate.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, phraseIdx]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(182, 176, 159, 0.1) 0%, transparent 35%), radial-gradient(circle at 85% 75%, rgba(182, 176, 159, 0.05) 0%, transparent 40%)'
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 h-24 md:h-40 flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
            <span>{displayText}</span>
            <span className="cursor-blink">|</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Creamos páginas web y las posicionamos en Google, para negocios que están listos para crecer.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contacto" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Escríbenos Aquí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;