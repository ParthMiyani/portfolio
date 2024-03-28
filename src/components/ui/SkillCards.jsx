import "../../styles/ui/skill-cards.css";

export default function SkillCards(props) {
  return (
    <div className="skill-cards">
      <div className="skill-row">
        <div className="skill-circle">
          <img className="skill-icon" src={props.icon} alt={props.title} />
        </div>
        <h2 className="skill-title">{props.title}</h2>
      </div>
      <div className="skill-row">
        <div className="skill-line"></div>
        <p className="skill-content">{props.content}</p>
      </div>
    </div>
  );
}
