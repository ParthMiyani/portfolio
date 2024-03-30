import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../../styles/ui/floating-nav.css";

export default function FloatingNav(props) {
  const [navOpacity, setNavOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const startScroll = 650;
      const endScroll = 900;
      let opacity = 0;

      if (currentScrollY >= startScroll && currentScrollY <= endScroll) {
        opacity = (currentScrollY - startScroll) / (endScroll - startScroll);
      } else if (currentScrollY > endScroll) {
        opacity = 1;
      }
      setNavOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="floating-nav" style={{ opacity: navOpacity }}>
      <Link className="nav-link" to="header" smooth={true} duration={1000}>
        ⬆
      </Link>
      <Link className="nav-link" to="skills" smooth={true} duration={1000}>
        Skills
      </Link>
      <Link className="nav-link" to="experiences" smooth={true} duration={1000}>
        Experiences
      </Link>
      <Link className="nav-link" to="projects" smooth={true} duration={1000}>
        Projects
      </Link>
      <Link className="nav-link" to="contact" smooth={true} duration={1000}>
        Contact
      </Link>
    </div>
  );
}
