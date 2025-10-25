
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-8 border-t border-lightest-navy/20">
      <div className="container mx-auto text-center text-slate">
        <p>&copy; {new Date().getFullYear()} MAST. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Diseñado y desarrollado con pasión por MAST.</p>
      </div>
    </footer>
  );
};

export default Footer;
