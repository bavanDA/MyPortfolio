import React, { useState, useEffect } from "react";
import girlAvatar from "@/assets/girl-avatar.png";

const AboutMe: React.FC = () => {
  const staticText = "Creating tools that ";
  const [displayedText, setDisplayedText] = useState(staticText);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isReplacing, setIsReplacing] = useState(false);
  const textParts = [
    "make things easier 💻✨",
    "save time ⏳⚡",
    "improve workflows 🛠️⚙️",
  ];

  // Typing effect function
  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentText = textParts[currentTextIndex];
      if (!currentText) return;
      if (displayedText.length < staticText.length + currentText.length) {
        setDisplayedText(
          (prev) => prev + currentText[displayedText.length - staticText.length]
        );
      } else if (
        displayedText.length === staticText.length + currentText.length &&
        !isReplacing
      ) {
        setIsReplacing(true); // Start replacing
        setTimeout(() => {
          setDisplayedText(staticText);
          setIsReplacing(false);
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % textParts.length
          ); // Move to next part
        }, 1500); // Pause before replacing
      }
    }, 100); // Speed of typing effect

    return () => clearInterval(typingInterval);
  }, [displayedText, currentTextIndex, isReplacing]);

  return (
    <section
      id="about-me"
      className=" flex items-center justify-center pt-12 dark:bg-gray-900 transition-colors pb-10"
    >
      <div className="max-w-8xl w-4/5  flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center  md:text-left md:ml-20 text-gray-800 dark:text-gray-200 ">
          <h1 className="text-4xl font-bold mb-4 dark:text-glow">
            Hi, I'm Bavan DA
          </h1>
          <h2 className="text-xl font-semibold mb-4 dark:text-glow">
            Software Engineer with over 4 Years of Experience{" "}
            <span className="animate-pulse">🚀</span>
          </h2>
          <h1 className="text-lg font-medium mb-6 dark:text-glow">
            {displayedText}
            <span className="animate-blinkCaret">|</span> {/* Blinking caret */}
          </h1>

          <a
            href="/Resume.pdf"
            download
            className="relative inline-block text-lg group mb-10"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight  text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 dark:bg-gray-600 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Download CV</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear dark:bg-gray-600 bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center ">
          <img
            src={girlAvatar}
            alt="Girl coding"
            className="w-64 md:w-4/5 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-auto transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
