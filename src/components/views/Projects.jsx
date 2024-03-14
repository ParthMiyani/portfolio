import "../../styles/projects.css";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <div className="projects">
      <div className="title">Projects</div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <p>
              {project.type} · {project.techStack}
            </p>
            <h1>{project.name}</h1>
            <ul>
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
