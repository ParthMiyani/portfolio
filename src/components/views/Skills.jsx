import "../../styles/skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skill-div">
        <div className="skill-column">
          <div className="skill-child">
            <h2>Languages</h2>
            <p>JavaScript, TypeScript, Python, Java, SQL, Dart, HTML/CSS</p>
          </div>
          <div className="skill-child">
            <h2>Database</h2>
            <p>MySQL, PostgreSQL, MongoDB, Firebase, SQLite</p>
          </div>
        </div>
        <div className="skill-column">
          <div className="skill-child">
            <h2>Development</h2>
            <p>
              React, Redux, React Native, Flutter, Node.js, Spring MVC, Django,
              REST APIs, GraphQL
            </p>
          </div>
          <div className="skill-child">
            <h2>Tools</h2>
            <p>AWS, Git, VS Code, Postman, Docker, JIRA, CI/CD</p>
            {/* <p>AWS, Git, VS Code, Postman, Docker, JIRA, CI/CD, Jenkins</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
