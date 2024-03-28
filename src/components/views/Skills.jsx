import "../../styles/skills.css";
import SkillCards from "../ui/SkillCards";
import Languages from "../../assets/languages.png";
import Database from "../../assets/database.svg";
import Development from "../../assets/development.svg";
import Tools from "../../assets/tools.png";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skill-div">
        <div className="skill-column">
          <SkillCards
            title="Languages"
            content="JavaScript, TypeScript, Python, Java, SQL, Dart, HTML/CSS"
            icon={Languages}
          />
          <SkillCards
            title="Database"
            content="MySQL, PostgreSQL, MongoDB, Firebase"
            icon={Database}
          />
        </div>
        <div className="skill-column">
          <SkillCards
            title="Development"
            content="React, Redux, React Native, Flutter, Node.js, Spring MVC, 
            Django, REST APIs, GraphQL"
            icon={Development}
          />
          <SkillCards
            title="Tools"
            content="AWS, Git, VS Code, Postman, Docker, JIRA, CI/CD"
            // content="AWS, Git, VS Code, Postman, Docker, JIRA, CI/CD, Jenkins"
            icon={Tools}
          />
        </div>
      </div>
    </div>
  );
}
