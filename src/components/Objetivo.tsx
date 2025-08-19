import React from 'react';
import { Target } from 'lucide-react';

// Componente da seção de objetivos
const Objetivo: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Target size={28} className="text-primary mr-3" />
          <h2 className="section-title">Objetivo Profissional</h2>
        </div>
        
        <div className="card">
          <p className="text-lg text-gray-700 mb-4">
            Busco contribuir para soluções tecnológicas e crescer profissionalmente como estagiário 
            ou trainee em Análise e Desenvolvimento de Sistemas, aplicando conhecimentos adquiridos 
            na graduação e cursos complementares.
          </p>
          
          <p className="text-lg text-gray-700">
            Estou comprometido em desenvolver minhas habilidades técnicas e aplicá-las em projetos 
            inovadores, contribuindo para o sucesso da equipe enquanto aprendo com profissionais 
            experientes da área.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objetivo;