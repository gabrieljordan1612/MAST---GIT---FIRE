import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-light-gray">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#" className="text-3xl font-bold text-brand-blue tracking-tighter">MAST</a>
            <p className="mt-4 text-brand-gray text-sm max-w-xs">
              +10 años creando soluciones que generan un impacto real en nuestros clientes.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>+51 938 236 622</li>
              <li>Av. Almirante Miguel Grau 1380 Int. 605, Barranco, Lima – Perú</li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-brand-dark mb-4">¿Cuéntanos tu proyecto?</h4>
             <a href="mailto:informes@mast.pe" className="text-sm text-brand-gray hover:text-brand-blue">informes@mast.pe</a>
          </div>
          <div>
             <h4 className="font-bold text-brand-dark mb-4">Síguenos en nuestras redes:</h4>
             <div className="flex space-x-4">
                <a href="#" className="text-brand-gray hover:text-brand-blue"><FacebookIcon className="w-6 h-6"/></a>
                <a href="#" className="text-brand-gray hover:text-brand-blue"><InstagramIcon className="w-6 h-6"/></a>
                <a href="#" className="text-brand-gray hover:text-brand-blue"><LinkedInIcon className="w-6 h-6"/></a>
                <a href="#" className="text-brand-gray hover:text-brand-blue"><TikTokIcon className="w-6 h-6"/></a>
             </div>
             <h4 className="font-bold text-brand-dark mt-6 mb-4">Libro de reclamaciones</h4>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-light-gray py-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-sm text-brand-gray">
            <p>&copy; {new Date().getFullYear()} MAST. Todos los derechos reservados</p>
            <p>Powered by MAST *</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
