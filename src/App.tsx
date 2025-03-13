import React from "react";
import Navbar from "@/components/navbar";
import AboutMe from "./pages/about-me";
import WorkExperience from "./pages/work-experience";
import ProjectsPage from "./pages/project-page";
import Separator from "./components/text-separator";
import ContactMe from "./pages/contact-me";

const App: React.FC = () => {
  return (
    <div className="bg-seashell ">
      <Navbar />
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="projects" className="dark:bg-gray-900">
        <ProjectsPage />
      </section>
      <section id="work-experiences" className="dark:bg-gray-900">
        <WorkExperience />
      </section>
      <section id="contact-me" className="dark:bg-gray-900 ">
        <ContactMe />
      </section>
    </div>
  );
};

export default App;
