import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

// Componente da seção principal/hero
const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Círculos decorativos */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-300 opacity-10"></div>
      
      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fadeIn">
          Christyan Roberto
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Análista e Desenvolvedor de Sistemas em Formação
        </h2>
        
        <p className="max-w-2xl text-gray-200 mb-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Estagiário em Análise e Desenvolvimento de Sistemas, 
          buscando aplicar conhecimentos técnicos e crescer profissionalmente.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <a href="#contato" className="btn btn-primary">
            Entre em Contato
          </a>
          <a href="#projetos" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
            Ver Projetos
          </a>
        </div>
        
        <div className="flex space-x-6 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <a href="https://github.com/christyan2311" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/christyan-roberto-53951b266" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:christyanroberto31@gmail.com" className="text-white hover:text-blue-200 transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:+5511949970283" className="text-white hover:text-blue-200 transition-colors">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;