import { Link } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../styles/header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div>
        <Link className="name" to="home" smooth={true} duration={1000}>
          {props.name}
        </Link>
        <Link className="nav-link" to="skills" smooth={true} duration={1000}>
          Skills
        </Link>
        <Link
          className="nav-link"
          to="experiences"
          smooth={true}
          duration={1000}
        >
          Experiences
        </Link>
        <Link className="nav-link" to="projects" smooth={true} duration={1000}>
          Projects
        </Link>
        <Link className="nav-link" to="contact" smooth={true} duration={1000}>
          Contact
        </Link>
      </div>
      <ButtonGroup>
        <IconButton aria-label="LinkedIn">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/parth-miyani/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </IconButton>
        <IconButton aria-label="GitHub">
          <a
            className="icon-link"
            href="https://github.com/ParthMiyani"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconButton>
      </ButtonGroup>
    </div>
  );
}
