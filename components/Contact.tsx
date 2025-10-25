import React, { useState } from 'react';
import { TwitterIcon, LinkedInIcon, GithubIcon } from './icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle form submission (e.g., send to an API)
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-lightest-slate mb-4">
          <span className="text-cyan-accent font-mono text-xl mr-2">04.</span>
          Hablemos de tu Proyecto
        </h2>
        <p className="text-lg text-slate max-w-2xl mx-auto mb-12">
          ¿Tienes una idea? Estamos aquí para ayudarte a hacerla realidad. Rellena el formulario o contáctanos directamente.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
            <div className="mb-8">
                <h3 className="text-xl font-bold text-lightest-slate mb-2">Dirección</h3>
                <p className="text-slate">Calle de la Innovación 123, 28080 Madrid, España</p>
            </div>
            <div className="mb-8">
                <h3 className="text-xl font-bold text-lightest-slate mb-2">Contacto Directo</h3>
                <p className="text-slate">Email: hola@mast.dev</p>
                <p className="text-slate">Teléfono: +34 912 345 678</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-lightest-slate mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-slate hover:text-cyan-accent transform hover:-translate-y-1 transition-all duration-300"><TwitterIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-slate hover:text-cyan-accent transform hover:-translate-y-1 transition-all duration-300"><LinkedInIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-slate hover:text-cyan-accent transform hover:-translate-y-1 transition-all duration-300"><GithubIcon className="w-6 h-6" /></a>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-light-slate mb-2">Nombre</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-light-navy border border-lightest-navy/50 rounded py-2 px-3 text-white transition-shadow duration-300 focus:outline-none focus:border-cyan-accent" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-light-slate mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-light-navy border border-lightest-navy/50 rounded py-2 px-3 text-white transition-shadow duration-300 focus:outline-none focus:border-cyan-accent" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-light-slate mb-2">Mensaje</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-light-navy border border-lightest-navy/50 rounded py-2 px-3 text-white transition-shadow duration-300 focus:outline-none focus:border-cyan-accent"></textarea>
          </div>
          <button type="submit" className="w-full bg-cyan-accent text-navy font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
