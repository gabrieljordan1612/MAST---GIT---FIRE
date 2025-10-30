import React from 'react';

const SocialIcon: React.FC<{href: string, icon: React.ReactNode}> = ({ href, icon }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
        {icon}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                         <a href="#" className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 11-12h-9z" /></svg>
                            </div>
                            <span className="text-2xl font-bold">MAST</span>
                        </a>
                        <p className="mt-4 text-gray-400">Agentes de IA que automatizan el trabajo, escalan las operaciones y devuelven tiempo a tu equipo.</p>
                        <div className="flex space-x-4 mt-6">
                            <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9V12h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>} />
                            <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.153 2.153c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.153 2.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.153-2.153c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.153-2.153c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>} />
                            <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>} />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-1">
                        <h4 className="font-semibold text-white tracking-wider">Empresa</h4>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreras</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white tracking-wider">Producto</h4>
                         <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-white tracking-wider">Newsletter</h4>
                        <p className="mt-4 text-gray-400">Recibe consejos, actualizaciones de productos y noticias de la industria directamente en tu bandeja de entrada.</p>
                        <form className="mt-6 flex flex-col sm:flex-row gap-2">
                            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button type="submit" className="bg-primary text-white font-semibold py-3 px-5 rounded-md hover:bg-primary-hover transition-colors flex-shrink-0">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} MAST. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;