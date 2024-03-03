import "../../styles/skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ui>
        <li>
          Languages
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </li>
        <li>
          Web Development
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </li>
        <li>
          Database
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </li>
        <li>
          tools
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </li>
      </ui>
    </div>
  );
}
