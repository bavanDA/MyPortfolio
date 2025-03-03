import React from "react";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="about-me" className="h-screen bg-gray-100 p-10">About Me</section>
      <section id="my-projects" className="h-screen bg-gray-200 p-10">My Projects</section>
      <section id="work-experience" className="h-screen bg-gray-300 p-10">Work Experience</section>
      <section id="contact-me" className="h-screen bg-gray-400 p-10">Contact Me</section>
    </>
  );
};

export default App;
