import React, { useState } from 'react';
import { Code, FileCode, LayoutDashboard, ListTodo, Cloud, HardDrive, Terminal, Palette, Globe, Database } from 'lucide-react';
// Componente da seção de habilidades técnicas
const Habilidades: React.FC = () => {
  // Estado para controlar a animação das barras de progresso
  const [isVisible, setIsVisible] = useState(false);

  // Ativa animação ao montar o componente
  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  // Lista de habilidades com seus níveis
  const skills = [
    { name: 'HTML', level: 85, icon: <FileCode size={20} className="mr-2" /> },
    { name: 'CSS', level: 90, icon: <FileCode size={20} className="mr-2" /> },
    { name: 'JavaScript', level: 80, icon: <Code size={20} className="mr-2" /> },
    { name: 'React', level: 65, icon: <LayoutDashboard size={20} className="mr-2" /> },
    { name: 'Manipulação de Arrays', level: 60, icon: <ListTodo size={20} className="mr-2" /> },
    { name: 'Requisições a API', level: 50, icon: <Cloud size={20} className="mr-2" /> },
    { name: 'Persistência de Dados (localStorage)', level: 40, icon: <HardDrive size={20} className="mr-2" /> },
    { name: 'Node.js', level: 30, icon: <Terminal size={20} className="mr-2" /> },
    { name: 'Figma', level: 25, icon: <Palette size={20} className="mr-2" /> },
    { name: 'Vite', level: 20, icon: <Terminal size={20} className="mr-2" /> },
    { name: 'Vercel', level: 20, icon: <Globe size={20} className="mr-2" /> },
    { name: 'MySQL', level: 20, icon: <Database size={20} className="mr-2" /> },
  ];

  // Ferramentas utilizadas
  const tools = ['VS Code', 'Visual Studio', 'Git', 'GitHub', 'Figma', 'Notion', 'Trello', 'NPM'];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Habilidades Técnicas</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Níveis de habilidades */}
        <div className="card">
          <h3 className="text-xl font-bold text-primary mb-6">Competências</h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {skill.level >= 70 ? 'Avançado' : 
                     skill.level >= 40 ? 'Intermediário' : 'Básico'}
                  </span>
                </div>
                
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ferramentas e conhecimentos adicionais */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-6">Ferramentas</h3>
            
            <div className="flex flex-wrap">
              {tools.map((tool, index) => (
                <span key={index} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-6">Idiomas</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Português</span>
                  <span className="text-sm text-gray-500">Nativo</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Inglês</span>
                  <span className="text-sm text-gray-500">Intermediário/Aprendiz</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '40%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;