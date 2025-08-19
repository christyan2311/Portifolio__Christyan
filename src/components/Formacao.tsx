import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

// Tipo para formação acadêmica
interface Formacao {
  id: number;
  curso: string;
  instituicao: string;
  periodo: string;
  descricao: string;
}

// Componente da seção de formação acadêmica
const Formacao: React.FC = () => {
  // Lista de formações acadêmicas
  const formacoes: Formacao[] = [
    {
      id: 1,
      curso: "Bacharelado em Análise e Desenvolvimento de Sistemas",
      instituicao: "Centro Universitário Senac Santo Amaro",
      periodo: "2024 - 2026",
      descricao: "Formação em andamento, focada no desenvolvimento de sistemas, programação, banco de dados e engenharia de software."
    },
    {
      id: 2,
      curso: "Ensino Médio com Qualificação Profissional em Marketing",
      instituicao: "Etec Prof. Adhemar Batista Heméritas",
      periodo: "2021 - 2023",
      descricao: "Ensino médio integrado com curso técnico em Marketing, incluindo fundamentos de administração, marketing digital e comportamento do consumidor."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Formação Acadêmica</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {formacoes.map((formacao) => (
            <div key={formacao.id} className="card relative flex">
              {/* Ícone de formação */}
              <div className="absolute -left-3 top-4 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full border-4 border-white shadow-md">
                <GraduationCap size={24} className="text-primary" />
              </div>
              
              {/* Conteúdo da formação */}
              <div className="pl-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <h3 className="text-xl font-bold text-gray-800">{formacao.curso}</h3>
                  
                  {/* Período estilizado */}
                  <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="text-primary font-medium text-sm">
                      {formacao.periodo}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-primary font-medium mt-2 mb-3">{formacao.instituicao}</h4>
                <p className="text-gray-600">{formacao.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formacao;