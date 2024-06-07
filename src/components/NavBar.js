import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100">
      <div className="flex justify-between items-center p-4">
        <a href="https://github.com/yaibrahim" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <FontAwesomeIcon icon={faGithub} className="text-black text-2xl" />
          <h1 className="text-black ml-2 text-lg font-bold">Ibrahim Azeem</h1>
        </a>
        <nav className="hidden md:flex space-x-4">
          <Link to="repositories" smooth={true} duration={500} className="cursor-pointer text-black">Repositories</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer text-black">Experience</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-black">Skills</Link>
          <Link to="aboutme" smooth={true} duration={500} className="cursor-pointer text-black">About Me</Link>
          
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            Menu
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 p-4 space-y-2">
          <Link to="repositories" smooth={true} duration={500} className="block cursor-pointer text-black" onClick={toggleMenu}>Repositories</Link>
          <Link to="experience" smooth={true} duration={500} className="block cursor-pointer text-black" onClick={toggleMenu}>Experience</Link>
          <Link to="aboutme" smooth={true} duration={500} className="block cursor-pointer text-black" onClick={toggleMenu}>About Me</Link>
          <Link to="skills" smooth={true} duration={500} className="block cursor-pointer text-black" onClick={toggleMenu}>Skills</Link>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
