import React, { useState } from 'react';
import { ArrowRight, BookOpen, Package2, StickyNote, ShoppingBag, Share, BookCopy, Target } from 'lucide-react';

// Tipo para projeto
interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  icone: React.ReactNode;
}

// Componente da seção de projetos acadêmicos
const Projetos: React.FC = () => {
  // Lista de projetos
  const projetos: Projeto[] = [
    {
      id: 1,
      titulo: "Sistema de Controle de Estoque (C#)",
      descricao: "Software desenvolvido com funcionalidades para cadastro, controle e consulta de estoque para pequenos negócios. Implementa cadastro de produtos, gerenciamento de estoque, relatórios e controle de entrada/saída.",
      tecnologias: ["C#", ".NET", "SQL Server", "Windows Forms"],
      icone: <Package2 size={40} className="text-primary" />
    },
    {
      id: 2,
      titulo: "Website Responsivo com Mobile-First",
      descricao: "Site focado na venda de livros, com seu principal objetivo sendo aplicar responsividade em diferentes tamanhos de tela. Implementação de técnicas mobile-first para garantir boa experiência em todos os dispositivos.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Mobile-First"],
      icone: <BookOpen size={40} className="text-primary" />
    },
    {
      id: 3,
      titulo: "Landing Page",
      descricao: "Landing page para a plataforma Alura+, construída com HTML5 e CSS3. O projeto utiliza display: grid para o layout responsivo, garantindo adaptação a diferentes dispositivos. O CSS foi estruturado com variáveis (:root) para facilitar a manutenção e padronizar o visual.",
      tecnologias: ["HTML", "CSS"],
      icone: <StickyNote size={40} className="text-primary" />
    },
    {
      id: 4,
      titulo: "Aplicação Web de Lista de Compras",
      descricao: "Uma aplicação web de lista de compras que permite a inserção, edição e exclusão de itens de forma dinâmica. O projeto também inclui a funcionalidade de marcar itens como comprados e exibe a data e hora de criação.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      icone: <ShoppingBag size={40} className="text-primary" />
    },
    {
      id: 5,
      titulo: "CodeConnect - Formulário de Publicação",
      descricao: "Um formulário web para publicação de novos projetos, permitindo o envio de imagens e a inclusão de tags dinâmicas.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      icone: <Share size={40} className="text-primary" />
    },

    {
      id: 6,
      titulo: "AluraBooks - Catálogo de Livros Online",
      descricao: "Uma página web dinâmica que simula um e-commerce de livros. A aplicação consome dados de uma API externa para exibir os livros, e permite que o usuário filtre-os por categoria, disponibilidade e os ordene por preço.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Fetch API","Manipulação de Arrays"],
      icone: <BookCopy size={40} className="text-primary" />
    },
    {
       id: 7,
      titulo: "Fokus",
      descricao: "O projeto Fokus é uma aplicação web interativa desenvolvida para otimizar a produtividade. Ele combina um temporizador (Técnica Pomodoro) com um sistema de gerenciamento de tarefas, permitindo ao usuário alternar entre sessões de foco e descanso. As funcionalidades incluem adicionar, editar, remover e marcar tarefas como concluídas.",
      tecnologias: ["HTML", "CSS", "JavaScript", "localStorage", "setInterval"],
      icone: <Target size={40} className="text-primary" />
    }

  ];

  // Estado para controlar o projeto selecionado e o "ver todos"
  const [projetoAtivo, setProjetoAtivo] = useState<number | null>(null);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  // Decide quais projetos exibir (4 ou todos)
  const projetosVisiveis = mostrarTodos ? projetos : projetos.slice(0, 4);

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Projetos Acadêmicos</h2>
      
      {/* Grid 2x2 */}
      <div className="grid md:grid-cols-2 gap-8">
        {projetosVisiveis.map((projeto) => (
          <div 
            key={projeto.id}
            className={`card group cursor-pointer ${projetoAtivo === projeto.id ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setProjetoAtivo(projetoAtivo === projeto.id ? null : projeto.id)}
          >
            <div className="flex items-start mb-4">
              <div className="mr-4">
                {projeto.icone}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {projeto.titulo}
                </h3>
                
                <p className="text-gray-600">
                  {projetoAtivo === projeto.id 
                    ? projeto.descricao 
                    : `${projeto.descricao.substring(0, 100)}...`}
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex flex-wrap mb-3">
                {projeto.tecnologias.map((tech, index) => (
                  <span key={index} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                className="flex items-center text-primary font-medium hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  setProjetoAtivo(projetoAtivo === projeto.id ? null : projeto.id);
                }}
              >
                {projetoAtivo === projeto.id ? 'Ver menos' : 'Ver mais'}
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botão Ver Todos */}
      {projetos.length > 4 && (
        <div className="text-center mt-8">
          <button 
            className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
            onClick={() => setMostrarTodos(!mostrarTodos)}
          >
            {mostrarTodos ? "Ver menos" : "Ver todos"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projetos;
