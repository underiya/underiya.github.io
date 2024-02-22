import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const downloadResume = () => {
    const resumeUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className=" w-full fixed opacity-0.5 bg-slate-300 p-4 mb-5">
        <div className="flex justify-between w-11/12 m-auto items-center">
          <div className="text-5xl" style={{ fontFamily: "cursive" }}>
            <a href="#home">Deepak</a>
          </div>
          <div id="nav-menu" className="hidden md:flex md:items-center">
            <ul className="flex justify-between gap-8 text-2xl bg-slate-300 font-semibold ">
              <li className="hover:text-3xl">
                <AnchorLink href="#home" className="nav-link home">
                  Home
                </AnchorLink>
              </li>
              <li className="hover:text-3xl">
                <AnchorLink href="#about" className="nav-link about">
                  About
                </AnchorLink>
              </li>
              <li className="hover:text-3xl">
                <AnchorLink href="#skills" className="nav-link skills">
                  Skills
                </AnchorLink>
              </li>
              <li className="hover:text-3xl">
                <AnchorLink href="#projects" className="nav-link projects">
                  Project
                </AnchorLink>
              </li>
              <li className="hover:text-3xl">
                <AnchorLink href="#Stats">Statistics</AnchorLink>
              </li>
              <li className="hover:text-3xl">
                <AnchorLink href="#contact" className="nav-link contact">
                  Contact
                </AnchorLink>
              </li>
              <li className="  text-white hover:text-4xl">
                <AnchorLink
                  id="resume-link-1"
                  className="nav-link resume"
                  href="#home"
                  onClick={downloadResume}
                  target="_blank"
                >
                  <button id="resume-button-1"> RESUME</button>
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <i className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
            </button>
          </div>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black z-50">
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-white">
                  <i className="bx bx-x"></i>
                </button>
              </div>
              <ul className="flex flex-col items-center gap-3 font-semibold text-white text-3xl">
                <li>
                  <AnchorLink href="#home" onClick={toggleMenu}>
                    Home
                  </AnchorLink>
                </li>

                <li>
                  <AnchorLink href="#about" onClick={toggleMenu}>
                    About
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#skills" onClick={toggleMenu}>
                    Skills
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#projects" onClick={toggleMenu}>
                    Project
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact" onClick={toggleMenu}>
                    Contact
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#Stats" onClick={toggleMenu}>
                    Statistics
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#home"
                    onClick={toggleMenu}
                    id="resume-link-1"
                  >
                    RESUME
                  </AnchorLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
