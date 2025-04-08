
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
