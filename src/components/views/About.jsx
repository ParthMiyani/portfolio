import "../../styles/about.css";
import Contact from "./Contact";

export default function About() {
  return (
    <>
      <div className="about">
        <p className="about-title">
          Hello World!
          <br /> I’m Parth, <br />a Full Stack Developer <br /> based in
          Phoenix, AZ.
        </p>
        <p className="about-description">
          I am a software developer with a passion for creating innovative
          solutions. I have experience in developing web applications using
          JavaScript, React, Node.js, Express and Django. I am a quick learner
          and always eager to learn new technologies. I am currently looking for
          opportunities to work on exciting projects.
        </p>
      </div>

      <Contact />
    </>
  );
}
