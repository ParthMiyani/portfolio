import "../../styles/about.css";

export default function About() {
  return (
    <div className="about">
      {/* <p className="open-sans-font">
        Hello World!
        <br /> I’m Parth, <br />a Full Stack Developer <br /> based in Phoenix,
        AZ.
      </p> */}
      <div className="upper-div">
        <p className="title-location">Based in Phoenix</p>
        <p>✦ Status → Open to Work</p>
      </div>
      <p className="title-name">Hi, this is Parth.</p>
      <p className="title-job-role">Full Stack Developer @ PNYX</p>
    </div>
  );
}
