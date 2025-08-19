import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

// Componente do rodapé
const Footer: React.FC = () => {
  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Christyan Roberto</h2>
            <p className="text-gray-400">Desenvolvedor de Sistemas em Formação</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/christyan2311" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/christyan-roberto-53951b266" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:christyanroberto31@gmail.com"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+5511949970283"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Telefone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Christyan Roberto. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <span className="mr-2">Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;