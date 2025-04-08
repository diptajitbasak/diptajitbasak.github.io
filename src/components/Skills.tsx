
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const skillCategories = [
    { id: "frontend", label: "Frontend" },
    { id: "frameworks", label: "Frameworks & Libraries" },
    { id: "tools", label: "Tools & Testing" }
  ];
  
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
    frameworks: ["Redux", "React Router", "Redux Thunk", "Bootstrap", "Materialize", "Vue.js"],
    tools: ["Webpack", "Git", "Mocha", "Bash", "Gulp", "VS Code", "Chrome DevTools"]
  };

  return (
    <section className="py-16 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Skills</h2>
        
        <div className="mb-10">
          <div className="flex flex-wrap mb-4 border-b">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "px-4 py-2 text-sm md:text-base font-medium transition-all duration-200 relative",
                  activeTab === category.id 
                    ? "text-purple-600" 
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {category.label}
                {activeTab === category.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skills[activeTab as keyof typeof skills].map((skill) => (
              <div 
                key={skill}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-purple-200 transition-all duration-200 hover:bg-purple-50"
              >
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
