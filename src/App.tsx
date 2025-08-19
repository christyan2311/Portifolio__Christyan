import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objetivo from './components/Objetivo';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Cursos from './components/Cursos';
import Formacao from './components/Formacao';
import Experiencia from './components/Experiencia';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Controla animação de entrada
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
        <section id="objetivo" className="py-16 bg-white">
          <Objetivo />
        </section>
        
        <section id="habilidades" className="py-16 bg-gray-50">
          <Habilidades />
        </section>
        
        <section id="projetos" className="py-16 bg-white">
          <Projetos />
        </section>
        
        <section id="cursos" className="py-16 bg-gray-50">
          <Cursos />
        </section>
        
        <section id="formacao" className="py-16 bg-white">
          <Formacao />
        </section>
        
        <section id="experiencia" className="py-16 bg-gray-50">
          <Experiencia />
        </section>
        
        <section id="contato" className="py-16 bg-white">
          <Contato />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;