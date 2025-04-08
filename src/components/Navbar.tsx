
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-purple-600">
            Diptajit Basak
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-purple-500 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-3">
              <a href="https://github.com/diptajitbasak" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-700 hover:text-purple-500 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/diptajit-basak-1b06a4143/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-700 hover:text-purple-500 transition-colors duration-300" />
              </a>
              <a href="mailto:diptajitbasak@yahoo.com">
                <Mail className="h-5 w-5 text-gray-700 hover:text-purple-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-purple-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://github.com/diptajitbasak" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-gray-700 hover:text-purple-500 transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/diptajit-basak-1b06a4143/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-700 hover:text-purple-500 transition-colors duration-300" />
                </a>
                <a href="mailto:diptajitbasak@yahoo.com">
                  <Mail className="h-5 w-5 text-gray-700 hover:text-purple-500 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
