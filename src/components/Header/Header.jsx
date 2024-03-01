import { React, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './header.css';
const Header = ({ introRef, contactRef, aboutRef }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <header className="header">
      <nav ref={navRef} className="nav">
        <div className="nav-menu show-menu">
          <ul className="">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={showNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={showNavbar}
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={showNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={showNavbar}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={showNavbar}
              >
                Education
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="chat"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={showNavbar}
              >
                Chat Us
              </Link>
            </li> */}
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
