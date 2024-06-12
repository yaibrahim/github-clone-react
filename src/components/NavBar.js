import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function NavBar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center p-4">
        <a href="https://github.com/yaibrahim" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <FontAwesomeIcon icon={faGithub} className="text-black dark:text-white text-2xl" />
          <h1 className="text-black dark:text-white ml-2 text-lg font-bold">Ibrahim Azeem</h1>
        </a>
        <nav className="hidden md:flex space-x-4">
          <Link to="repositories" smooth={true} duration={500} className="cursor-pointer text-black dark:text-white">Repositories</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer text-black dark:text-white">Experience</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-black dark:text-white">Skills</Link>
          <Link to="aboutme" smooth={true} duration={500} className="cursor-pointer text-black dark:text-white">About Me</Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer text-black dark:text-white">Education</Link>
          <button onClick={toggleDarkMode} className="text-black dark:text-white focus:outline-none">
            {darkMode ? <FontAwesomeIcon icon={faSun} className="text-black dark:text-white text-2xl" /> : <FontAwesomeIcon icon={faMoon} className="text-black dark:text-white text-2xl" />}
          </button>
        </nav>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-black dark:text-white focus:outline-none mr-4">
            Menu
          </button>
          <button onClick={toggleDarkMode} className="text-black dark:text-white focus:outline-none">
            {darkMode ? <FontAwesomeIcon icon={faSun} className="text-black dark:text-white text-2xl" /> : <FontAwesomeIcon icon={faMoon} className="text-black dark:text-white text-2xl" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-900 p-4 space-y-2">
          <Link to="repositories" smooth={true} duration={500} className="block cursor-pointer text-black dark:text-white" onClick={toggleMenu}>Repositories</Link>
          <Link to="experience" smooth={true} duration={500} className="block cursor-pointer text-black dark:text-white" onClick={toggleMenu}>Experience</Link>
          <Link to="skills" smooth={true} duration={500} className="block cursor-pointer text-black dark:text-white" onClick={toggleMenu}>Skills</Link>
          <Link to="aboutme" smooth={true} duration={500} className="block cursor-pointer text-black dark:text-white" onClick={toggleMenu}>About Me</Link>
          <Link to="education" smooth={true} duration={500} className="block cursor-pointer text-black dark:text-white" onClick={toggleMenu}>Education</Link>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
