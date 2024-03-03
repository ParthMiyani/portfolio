import "../../styles/home.css";

export default function Home(props) {
  return (
    <div className="home">
      <p>Hello World, I'm</p>
      <p>{props.firstName}</p>
      <p>{props.role}</p>
    </div>
  );
}
