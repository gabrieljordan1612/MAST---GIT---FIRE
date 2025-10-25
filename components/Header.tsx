
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Por qué elegirnos' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-off-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4 md:px-12">
        <a href="#hero" className="text-2xl font-bold text-dark-slate tracking-wider">
          MAST
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-slate hover:text-primary-blue transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="border border-primary-blue text-primary-blue px-4 py-2 rounded hover:bg-primary-blue/10 transition-colors duration-300">
            Solicitar tu web
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark-slate focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-off-white/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={() => setIsOpen(false)} className="text-slate hover:text-primary-blue transition-colors duration-300 text-lg">
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setIsOpen(false)} className="border border-primary-blue text-primary-blue px-6 py-2 rounded hover:bg-primary-blue/10 transition-colors duration-300 mt-4">
              Solicitar tu web
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;