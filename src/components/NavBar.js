import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const handleToggle = () => setExpanded(!expanded);
  const handleNavClick = () => setExpanded(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = ["home", "aboutMe", "skills", "experience", "projects", "connect"];

    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      if (animationComplete || window.scrollY > 100) {
        let currentSection = activeLink;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop - 100;
            if (window.scrollY >= top) {
              currentSection = section;
              break;
            }
          }
        }

        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink, animationComplete]);

  return (
    <Router>
      <Navbar
        expand="lg"
        className={`${scrolled ? "scrolled" : ""} ${
          expanded ? "expanded" : ""
        }`}
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            className={`nav-right ${expanded ? "expanded" : ""}`}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-right">
              <Nav.Link
                as={HashLink}
                smooth
                to="#home"
                className={
                  activeLink === "home" && (animationComplete || scrolled)
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={handleNavClick}
              >
                <span className="navbar-text" data-aos="fade-down">
                  Home
                </span>
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#aboutMe"
                className={
                  activeLink === "aboutMe" && (animationComplete || scrolled)
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={handleNavClick}
              >
                <span className="navbar-text" data-aos="fade-down">
                  About Me
                </span>
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#skills"
                className={
                  activeLink === "skills" && (animationComplete || scrolled)
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={handleNavClick}
              >
                <span className="navbar-text" data-aos="fade-down">
                  Skills
                </span>
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#experience"
                className={
                  activeLink === "experience" && (animationComplete || scrolled)
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={handleNavClick}
              >
                <span className="navbar-text" data-aos="fade-down">
                  Experience
                </span>
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#projects"
                className={
                  activeLink === "projects" && (animationComplete || scrolled)
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={handleNavClick}
              >
                <span className="navbar-text" data-aos="fade-down">
                  Projects
                </span>
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#connect"
                className={
                  activeLink === "connect" && (animationComplete || scrolled)
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={handleNavClick}
              >
                <span className="navbar-text" data-aos="fade-down">
                  Connect
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
