import React from "react";
import Navbar from "@/components/navbar";
import AboutMe from "./pages/about-me";
import WorkExperience from "./pages/work-experience";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="my-projects" className="h-screen bg-gray-200 p-10">
        My Projects
      </section>
      <section id="work-experience" className=" bg-gray-300 ">
        <WorkExperience />
      </section>
      <section id="contact-me" className="h-screen bg-gray-400 p-10">
        Contact Me
      </section>
    </>
  );
};

export default App;
