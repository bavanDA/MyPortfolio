import React from "react";
import Navbar from "@/components/navbar";
import AboutMe from "./pages/about-me";
import WorkExperience from "./pages/work-experience";
import ProjectsPage from "./pages/project-page";
import Separator from "./components/text-separator";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="my-projects" className="dark:bg-gray-900">
        <ProjectsPage />
      </section>
      <section id="work-experience" className="dark:bg-gray-900">
        <WorkExperience />
      </section>
      <section id="contact-me" className="h-screen bg-gray-400 p-10">
        Contact Me
      </section>
    </>
  );
};

export default App;
