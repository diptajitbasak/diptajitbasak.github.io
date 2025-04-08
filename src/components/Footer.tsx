
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} Diptajit Basak. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/diptajitbasak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/diptajit-basak-1b06a4143/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:diptajitbasak@yahoo.com"
              className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
