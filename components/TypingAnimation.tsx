import React from 'react';
import { WhatsAppIcon } from './icons';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/51938236622"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center group transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <div className="absolute right-full mr-3 hidden group-hover:block bg-white text-brand-dark text-sm font-semibold py-2 px-4 rounded-md shadow-md whitespace-nowrap">
        ¡Hola! ¿En qué podemos ayudarte?
      </div>
    </a>
  );
};

export default WhatsAppButton;
