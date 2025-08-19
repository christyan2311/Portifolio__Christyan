import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

// Componente da seção de experiência profissional
const Experiencia: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Experiência Profissional</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="card">
          <div className="flex items-start">
            <div className="mr-4 p-3 bg-blue-100 rounded-full">
              <Briefcase size={24} className="text-primary" />
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Auxiliar de Serviços Administrativos - Aprendiz</h3>
                <div className="flex items-center text-gray-500 mt-1 md:mt-0">
                  <Calendar size={16} className="mr-1" />
                  <span>Desde 10/07/2024</span>
                </div>
              </div>
              
              <h4 className="text-primary font-medium mb-4">Potenza Engenharia LTDA</h4>
              
              <div className="text-gray-600">
                <p className="mb-3">
                  Atuando como Aprendiz no setor administrativo, com foco no desenvolvimento de habilidades 
                  profissionais e técnicas em ambiente corporativo.
                </p>
                
                <p>
                  Responsabilidades incluem suporte em atividades administrativas, organização de documentos, 
                  auxílio em processos internos e aprendizado contínuo sobre procedimentos empresariais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;