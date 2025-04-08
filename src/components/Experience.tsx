
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("logicsquare");
  
  const experienceData = {
    logicsquare: {
      title: "Team Lead (Front End)",
      company: "Logic Square Technologies",
      period: "Jun 2020 - Present",
      description: "As a Frontend Team Lead, I drive the architectural decisions, technical strategy, and execution of front-end projects while mentoring and managing a team of developers. My role includes fostering a culture of innovation, implementing best practices, and ensuring high-quality, scalable solutions.",
      projects: [
        {
          name: "Closewise",
          url: "https://www.closewise.com",
          responsibilities: [
            "Led the front-end team, defining best practices and ensuring scalable, maintainable React architecture.",
            "Spearheaded Stripe integration, optimizing payment flows for seamless transactions.",
            "Designed and implemented reusable component libraries to improve development speed.",
            "Collaborated with backend engineers to enhance RESTful API integration.",
            "Integrated third-party services like Google Maps API and Google Calendar API.",
            "Conducted code reviews, mentoring sessions, and knowledge-sharing workshops for the team."
          ]
        },
        {
          name: "Notary Near Me",
          url: "https://www.notarynearme.com",
          responsibilities: [
            "Guided the front-end team in developing a SEO-friendly web application using Next.js.",
            "Ensured optimized performance and server-side rendering (SSR) for better search engine ranking.",
            "Implemented best practices for structured data, metadata, and page load optimization.",
            "Conducted team mentoring, focusing on scalable architecture and clean code principles.",
            "Collaborated with backend engineers and SEO specialists to enhance site visibility and user engagement."
          ]
        },
        {
          name: "Grouped",
          url: "https://grouped.com",
          responsibilities: [
            "Led the development of a high-performance web application using Next.js and TypeScript.",
            "Architected a custom video player with HTML5, CSS3, JavaScript, supporting HLS streaming.",
            "Ensured scalability and performance optimizations for smooth user experience."
          ]
        },
        {
          name: "TrueFanz",
          url: "https://www.truefanz.com",
          responsibilities: [
            "Designed and developed an independent multi-tier payment module supporting Stripe, RazorPay, Square, and Humboldt.",
            "Implemented PWA support for enhanced performance and offline capabilities.",
            "Managed and maintained the Admin Panel, ensuring an independent content management system.",
            "Led architectural improvements for scalability, reusability, and optimized front-end workflows."
          ]
        }
      ]
    },
    mathcody: {
      title: "Software Developer",
      company: "Math & Cody",
      period: "Jun 2019 - May 2020",
      description: "Worked on innovative software development projects, focusing on blockchain technology and mobile applications.",
      projects: [
        {
          name: "Ethcode",
          url: "https://marketplace.visualstudio.com/items?itemName=7finney.ethcode",
          responsibilities: [
            "Developed Ethcode, an Ethereum Development Plugin for VS Code with in-editor Solidity Compiler, Debugger, and Test Runner.",
            "UI development in React; VS Code API for Background Tasks and connecting with external tools such as Solidity Compiler.",
            "Published the Plugin in Microsoft Visual Studio Marketplace and maintaining builds and nightly releases."
          ]
        },
        {
          name: "DUSMINUTE",
          url: "",
          responsibilities: [
            "10 minutes delivery app. Worked as a Full Stack Developer in Vendor Admin Panel and Mobile Application in React And React Native respectively.",
            "Implemented CRUD operations in MongoDB."
          ]
        }
      ]
    }
  };

  const companies = [
    { id: "logicsquare", name: "Logic Square Technologies" },
    { id: "mathcody", name: "Math & Cody" }
  ];

  return (
    <section className="py-16 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-1 overflow-x-auto md:overflow-visible">
              {companies.map((company) => (
                <button
                  key={company.id}
                  onClick={() => setActiveTab(company.id)}
                  className={cn(
                    "px-4 py-3 text-left rounded-lg transition-all duration-200 whitespace-nowrap md:whitespace-normal",
                    activeTab === company.id 
                      ? "bg-purple-100 text-purple-700 font-medium" 
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {company.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-gray-800">
                  {experienceData[activeTab as keyof typeof experienceData].title}
                </h3>
                <h4 className="text-lg text-purple-600">
                  {experienceData[activeTab as keyof typeof experienceData].company}
                </h4>
                <p className="text-gray-500">
                  {experienceData[activeTab as keyof typeof experienceData].period}
                </p>
                <p className="mt-3 text-gray-600">
                  {experienceData[activeTab as keyof typeof experienceData].description}
                </p>
              </div>
              
              <div className="space-y-8">
                {experienceData[activeTab as keyof typeof experienceData].projects.map((project) => (
                  <div key={project.name} className="border-t pt-6">
                    <h5 className="text-xl font-medium text-gray-800 mb-2">
                      {project.name}
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-purple-500 ml-2 hover:text-purple-700"
                        >
                          {project.url.replace(/(^\w+:|^)\/\//, '')}
                        </a>
                      )}
                    </h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
