import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from './icons';

const Logo = () => (
  <a href="#" className="flex items-center text-white">
    <svg className="h-7 w-auto" viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="26" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="700" fill="currentColor">
            M
        </text>
        <path d="M36 27 L45 5 L54 27" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="60" y="26" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="700" fill="currentColor">
            ST
        </text>
    </svg>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { 
      href: '#servicios', 
      label: 'Servicios',
      dropdown: [
        { href: '#servicios', label: 'Diseño y Desarrollo Web' },
        { href: '#servicios', label: 'E-commerce' },
        { href: '#servicios', label: 'Gestión de Redes Sociales' },
        { href: '#servicios', label: 'SEO y SEM' },
      ]
    },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#precios', label: 'Precios' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacto', label: 'Contacto' },
  ];
  
  const linkClasses = "text-white hover:opacity-80 transition-opacity duration-300 font-medium text-lg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between relative py-4 px-6 lg:px-12">
        <Logo />
        <nav className="hidden lg:flex items-center space-x-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div 
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a href={link.href} className={`${linkClasses} flex items-center gap-1`}>
                  {link.label}
                  <ChevronDownIcon className="w-4 h-4" />
                </a>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 animate-fade-in">
                    {link.dropdown.map(item => (
                      <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-background">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.href} href={link.href} className={linkClasses}>
                {link.label}
              </a>
            )
          ))}
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-brand-blue border-t border-white/10">
          <nav className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={linkClasses}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;