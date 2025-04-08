
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Notary Near Me",
      description: "A SEO-friendly web application built with Next.js that connects users with notary services. Implemented server-side rendering and optimized metadata for better search engine ranking.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Next.js", "React", "SEO", "SSR"],
      url: "https://www.notarynearme.com",
      github: ""
    },
    {
      id: 2,
      title: "Closewise",
      description: "Led the front-end development for a real estate transaction management platform. Integrated payment processing with Stripe and third-party services like Google Maps and Calendar.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "Stripe", "Google APIs", "Redux"],
      url: "https://www.closewise.com",
      github: ""
    },
    {
      id: 3,
      title: "Ethcode",
      description: "An Ethereum Development Plugin for VS Code with in-editor Solidity Compiler, Debugger, and Test Runner. Published on Microsoft Visual Studio Marketplace.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["VS Code Extension", "React", "Solidity", "Blockchain"],
      url: "https://marketplace.visualstudio.com/items?itemName=7finney.ethcode",
      github: "https://github.com/7finney/ethcode"
    },
    {
      id: 4,
      title: "TrueFanz",
      description: "Designed and developed a multi-tier payment module supporting multiple payment gateways. Implemented PWA support and managed the Admin Panel.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "Payment Gateways", "PWA", "Admin Panel"],
      url: "https://www.truefanz.com",
      github: ""
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Featured Projects</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={item}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-purple-600 hover:text-purple-700 flex items-center transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>View Site</span>
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-gray-800 flex items-center transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
