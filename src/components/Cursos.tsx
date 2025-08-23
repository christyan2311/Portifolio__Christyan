import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

// Tipo para Formação
interface Formacao {
  nome: string;
  cursos: string[];
  expanded: boolean;
}

// Tipo para categoria de cursos (Instituição)
interface CategoriaFornecedor {
  nome: string;
  expanded: boolean;
  formacoes?: Formacao[];
  cursos?: string[];
}

const Cursos: React.FC = () => {
  const [categorias, setCategorias] = useState<CategoriaFornecedor[]>([
    {
      nome: 'Alura',
      expanded: false,
      formacoes: [
        {
          nome: 'A partir do zero: HTML e CSS para projetos web',
          expanded: false,
          cursos: [
            'HTML e CSS: Ambientes de desenvolvimento, estrutura de arquivos e tags',
            'HTML e CSS: Classes, posicionamento e Flexbox',
            'HTML e CSS: Cabeçalho, footer e variáveis CSS',
            'HTML e CSS: Trabalhando com responsividade e publicação de projetos',
            'HTML e CSS: Praticando HTML/CSS',
            'HTML e CSS: Responsividade com mobile-first',
          ]
        },
        {
          nome: 'Desenvolvimento Front-end: cursos para criar aplicações web com HTML, CSS e JavaScript',
          expanded: false,
          cursos: [
            'JavaScript: construindo páginas dinâmicas',
            'JavaScript: entendendo promises e async/await',
            'JavaScript: métodos de array',
            'JavaScript: manipulando elementos no DOM',
            'JavaScript: explorando a manipulação de elementos e da localStorange',
            'JavaScript: implementando CRUD com requisições HTTP',
            'JavaScript: evoluindo a sua aplicação com ES6+',
            'Node.js e terminal: dominando o ambiente de desenvolvimento front-end'
          ]
        },
        {
          nome: 'Formação Inteligência Artificial',
          expanded: false,
          cursos: [
            'IA Generativa no Front-end: Trabalhando com acessibilidade, semântica e HTML',
            'Gestão do conhecimento: Otimize busca e organização de informações com IA',
            'ChatGPT: Desvendando a IA em conversas e suas aplicações',
            'ChatGPT: Aumente sua produtividade no front-end',
            'Aprendizagem: personalizado sua rotina de estudos com ChatGPt',
            'ChatGPT e programação: aumente sua produtividade'
          ]
        },
        {
          nome: 'Git, GitHub e Terminal',
          expanded: false,
          cursos: [
            'Git e GitHub: Compartilhando e colaborando em projetos'
          ]
        },

        {
          nome: 'React: desenvolva aplicações web usando JSX e Hooks',
          expanded: false,
          cursos: [
            'React: construindo componentes com JSX',
            'Node.js e terminal: dominando o ambiente de desenvolvimento front-end',
            'React: configurando e estruturando projetos com Vite'
          ]
        },
        {
          nome: 'Next.js 14: desenvolvendo aplicações robustas com alta produtividade',
          expanded: false,
          cursos: [
            'Next.js: conheça o framework React'
          ]
        }
      ]
    },
    {
      nome: 'Cisco Networking Academy',
      expanded: false,
      cursos: [
        'Introduction to Data Science'
      ]
    },
    {
      nome: 'SENAI',
      expanded: false,
      cursos: [
        'Competência Transversal - Lógica de Programação'
      ]
    }
  ]);

  // Alternar instituição
  const toggleCategoria = (index: number) => {
    setCategorias(categorias.map((cat, i) => 
      i === index ? { ...cat, expanded: !cat.expanded } : cat
    ));
  };

  // Alternar formação dentro de uma instituição
  const toggleFormacao = (catIndex: number, formIndex: number) => {
    setCategorias(categorias.map((cat, i) => {
      if (i === catIndex && cat.formacoes) {
        const novasFormacoes = cat.formacoes.map((form, j) =>
          j === formIndex ? { ...form, expanded: !form.expanded } : form
        );
        return { ...cat, formacoes: novasFormacoes };
      }
      return cat;
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Cursos e Certificações</h2>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {categorias.map((categoria, index) => (
          <div key={index} className="card">
            {/* Nível 1 - Instituição */}
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategoria(index)}
            >
              <div className="flex items-center">
                <Award size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-bold text-gray-800">{categoria.nome}</h3>
              </div>
              {categoria.expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {categoria.expanded && (
              <div className="mt-4 pl-9 space-y-2 animate-fadeIn">
                {/* Se a categoria tiver formações */}
                {categoria.formacoes && categoria.formacoes.map((formacao, fIndex) => (
                  <div key={fIndex} className="mb-3">
                    {/* Nível 2 - Formação */}
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFormacao(index, fIndex)}
                    >
                      <div className="flex items-center">
                        <h4 className="text-lg font-semibold">{formacao.nome}</h4>
                      </div>
                      {formacao.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {formacao.expanded && (
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        {formacao.cursos.map((curso, cIndex) => (
                          <li key={cIndex}>{curso}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Se a categoria não tiver formações, mostra cursos direto */}
                {categoria.cursos && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    {categoria.cursos.map((curso, i) => (
                      <li key={i}>{curso}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
