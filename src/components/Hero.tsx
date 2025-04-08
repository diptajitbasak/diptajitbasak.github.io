
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('experience');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-gray-800 animate-fade-in">
              <span className="block">Hi, I'm</span>
              <span className="text-purple-500 font-semibold">Diptajit Basak</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-600">
              Team Lead | Front-End Developer | React | Next
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Experienced Front-End Developer and Team Lead with expertise in React, Next, and modern web technologies. 
              Proficient in developing scalable applications, integrating APIs, and leading development teams.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-500 hover:bg-purple-600" onClick={scrollToProjects}>
                View My Work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                <a href="/contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-purple-100 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=faces&cs=tinysrgb&fit=crop&h=400&w=400" 
                  alt="Profile" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-purple-500 text-white p-3 rounded-full">
                  <span className="text-sm font-medium">7+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
