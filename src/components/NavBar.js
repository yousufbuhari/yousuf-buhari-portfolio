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
  const [isAvailable] = useState(true); //Change this for status

  useEffect(() => {
    AOS.init({ duration: 500 });

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
          const element = document.getElementById(sections[i]);
          if (element && window.scrollY >= element.offsetTop - 100) {
            currentSection = sections[i];
            break;
          }
        }

        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink, animationComplete]);

  useEffect(() => {
    const menu = document.querySelector(".navbar-collapse");
    const overlay = document.querySelector(".nav-overlay");
    const preventScroll = (e) => e.preventDefault();

    if (expanded && menu && overlay) {
      menu.addEventListener("touchmove", preventScroll, { passive: false });
      menu.addEventListener("wheel", preventScroll, { passive: false });
      overlay.addEventListener("touchmove", preventScroll, { passive: false });
      overlay.addEventListener("wheel", preventScroll, { passive: false });
    }

    return () => {
      if (menu && overlay) {
        menu.removeEventListener("touchmove", preventScroll);
        menu.removeEventListener("wheel", preventScroll);
        overlay.removeEventListener("touchmove", preventScroll);
        overlay.removeEventListener("wheel", preventScroll);
      }
    };
  }, [expanded]);

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
          <Navbar.Brand href="#home" className="navbar-brand">
            <span className="brand-name" data-aos="fade-down">
              <span className="brand-text">YB</span>
              <span
                className={`status-indicator ${
                  isAvailable ? "available" : "unavailable"
                }`}
              >
                <span className="status-text">
                  {isAvailable ? "Open to Work" : "Not Available"}
                </span>
              </span>
            </span>
          </Navbar.Brand>
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
                <span className="navbar-text">Home</span>
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
                <span className="navbar-text">About Me</span>
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
                <span className="navbar-text">Skills</span>
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
                <span className="navbar-text">Projects</span>
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
                <span className="navbar-text">Connect</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className={`nav-overlay ${expanded ? "active" : ""}`}
        onClick={() => setExpanded(false)}
      />
    </Router>
  );
};
