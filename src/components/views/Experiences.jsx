import "../../styles/experiences.css";
import experiences from "../../data/experiences.json";

export default function Experiences() {
  return (
    <div className="experiences">
      <div className="title">My Experience</div>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-child">
            <p>
              {experience.date} · {experience.title} · {experience.location}
            </p>
            <h2>{experience.company}</h2>
            <ul>
              {experience.description.map((descItem) => (
                <li key={descItem}>{descItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
