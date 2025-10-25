import React from 'react';
import { TwitterIcon, LinkedInIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 text-center text-slate flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p>&copy; {new Date().getFullYear()} MAST. Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-4">
            <a href="#" aria-label="Twitter de MAST" className="text-slate hover:text-cyan-accent transform hover:-translate-y-1 transition-all duration-300"><TwitterIcon className="w-6 h-6" /></a>
            <a href="#" aria-label="LinkedIn de MAST" className="text-slate hover:text-cyan-accent transform hover:-translate-y-1 transition-all duration-300"><LinkedInIcon className="w-6 h-6" /></a>
            <a href="#" aria-label="Github de MAST" className="text-slate hover:text-cyan-accent transform hover:-translate-y-1 transition-all duration-300"><GithubIcon className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
