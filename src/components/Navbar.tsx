import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Componente da barra de navegação
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Controla a mudança de aparência da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-primary font-heading font-bold text-xl">
          Christyan Roberto
        </a>

        {/* Menu para Desktop */}
        <nav className="hidden md:flex space-x-8">
          {['objetivo', 'habilidades', 'projetos', 'cursos', 'formacao', 'experiencia', 'contato'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-4 pt-20 pb-6 space-y-6">
          {['objetivo', 'habilidades', 'projetos', 'cursos', 'formacao', 'experiencia', 'contato'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-200"
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;