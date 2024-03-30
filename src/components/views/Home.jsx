import "../../styles/home.css";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import FloatingNav from "../ui/FlaotingNav";

export default function Home(props) {
  return (
    <>
      <div className="home">
        <div className="upper-div">
          <p className="title-location">Based in Phoenix</p>
          <p>✦ Status → Open to Work</p>
        </div>
        <p className="title-name">Hi, this is Parth.</p>
        <p className="title-job-role">Full Stack Developer @ PNYX</p>
      </div>
      <FloatingNav />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
}
