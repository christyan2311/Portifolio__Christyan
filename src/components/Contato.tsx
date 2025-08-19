import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contato: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12 text-3xl font-bold">Entre em Contato</h2>
      
      <div className="max-w-5xl mx-auto card">
        <h3 className="text-2xl font-bold text-primary mb-8">Informações de Contato</h3>
        
        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 - Email */}
          <div className="flex items-start space-x-4">
            <Mail className="text-primary mt-1" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
              <a href="mailto:christyanroberto31@gmail.com" className="text-lg text-gray-700 hover:text-primary transition-colors">
                christyanroberto31@gmail.com
              </a>
            </div>
          </div>

          {/* Item 2 - Telefone */}
          <div className="flex items-start space-x-4">
            <Phone className="text-primary mt-1" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h4>
              <a href="tel:+5511949970283" className="text-lg text-gray-700 hover:text-primary transition-colors">
                (55) 11 94997-0283
              </a>
            </div>
          </div>

          {/* Item 3 - LinkedIn */}
          <div className="flex items-start space-x-4">
            <Linkedin className="text-primary mt-1" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/christyan-roberto-53951b266" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-primary transition-colors"
              >
                linkedin.com/in/christyan-roberto-53951b266
              </a>
            </div>
          </div>

          {/* Item 4 - GitHub */}
          <div className="flex items-start space-x-4">
            <Github className="text-primary mt-1" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">GitHub</h4>
              <a 
                href="https://github.com/christyan2311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-primary transition-colors"
              >
                github.com/christyan2311
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
