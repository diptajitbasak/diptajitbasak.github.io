
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
