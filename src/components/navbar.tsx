import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";
import React from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900 backdrop-blur-lg shadow-md transition-colors">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold flex items-center  dark:text-gray-200">
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/opensourceparrot.gif"
            alt="Dancing Parrot"
            className="w-10 h-10 ml-2 mr-2"
          />
          BavanDA
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {["About Me", "My Projects", "Work Experience", "Contact Me"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  duration={500}
                  className="relative cursor-pointer text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-all after:block after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {darkMode ? (
              <Sun size={24} className="text-yellow-400" />
            ) : (
              <Moon size={24} className="text-blue-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 bg-white dark:bg-gray-900 py-6 shadow-md">
          {["About Me", "My Projects", "Work Experience", "Contact Me"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  duration={500}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
