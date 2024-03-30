import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";

export default function Header(props) {
  return (
    <div className="header">
      <nav>
        <NavLink className="name" to="/portfolio">
          {props.name}
        </NavLink>
        <NavLink className="nav-link" to="/portfolio/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/portfolio/photography">
          Photography
        </NavLink>
      </nav>
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
