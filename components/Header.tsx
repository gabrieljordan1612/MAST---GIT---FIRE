import React, { useState, useEffect } from 'react';

const LightningIcon = () => (
    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 11-12h-9z" />
        </svg>
    </div>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

interface HeaderProps {
    onNavigate: (page: 'home' | 'contact' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 20); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (page: 'home' | 'contact' | 'about') => {
        onNavigate(page);
        setIsMenuOpen(false);
    }

    const navLinks = (
        <>
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="text-text-secondary hover:text-primary font-medium transition-colors">Inicio</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} className="text-text-secondary hover:text-primary font-medium transition-colors">Servicios</a>
            <a href="#proyectos" className="text-text-secondary hover:text-primary font-medium transition-colors">Proyectos</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} className="text-text-secondary hover:text-primary font-medium transition-colors">Contacto</a>
        </>
    );

    return (
        <>
            <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
                <div
                    className={`
                        transition-all duration-500 ease-in-out bg-white/80 backdrop-blur-lg rounded-full border border-gray-200/60 shadow-lg
                        flex items-center w-full h-16
                        ${isScrolled ? 'max-w-6xl justify-between px-6' : 'max-w-3xl justify-center px-6 gap-8'}
                    `}
                >
                    <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="flex items-center gap-2">
                        <LightningIcon />
                        <span className="text-xl font-bold text-text-primary">MAST</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks}
                    </nav>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} className="hidden md:flex items-center gap-2 group bg-white text-text-primary font-semibold py-2 px-4 rounded-full border border-gray-300 hover:border-gray-400 transition-all">
                        Agendar una demo <ArrowRightIcon />
                    </a>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                             <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16"} /></svg>
                        </button>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <div className="fixed top-24 left-4 right-4 z-40 md:hidden">
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/80 p-4">
                        <nav className="flex flex-col items-center gap-4">
                            {navLinks}
                            <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} className="mt-2 group flex items-center gap-2 bg-white text-text-primary font-semibold py-2 px-4 rounded-full border border-gray-300 hover:border-gray-400 transition-all">
                                Agendar una demo <ArrowRightIcon />
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;