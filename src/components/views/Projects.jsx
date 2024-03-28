import "../../styles/projects.css";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <div className="projects">
      <div className="title">Projects</div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-tech-stack">
              {project.techStack.map((tech) => (
                <p className="tech">{tech}</p>
              ))}
            </div>
            <h2>{project.name}</h2>
            <ul className="project-description">
              {project.description.map((descItem) => (
                <li key={descItem}>{descItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
