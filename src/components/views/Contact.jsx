import "../../styles/contact.css";
import { useState } from "react";
import resume from "../../parth_miyani.pdf";

export default function Contact() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "MST",
    })
  );

  setInterval(() => {
    setTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "MST",
      })
    );
  }, 1000);

  return (
    <div className="contact">
      <div className="text">
        <h1>Contact me!</h1>
        <p>
          Have a question, a project idea, a job opportunity or just want to say
          hi?
          <br />
          I'd love to hear from you! Feel free to reach out.
          <br />
          Let's chat and make things happen!
        </p>
        <div className="email">
          <p className="arrow">→</p>
          <a
            className="email-link"
            href="mailto:pmiyani42@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            pmiyani42@gmail.com
          </a>
        </div>
      </div>
      <div className="contact-links">
        <div>
          <a className="link" target="_blank" rel="noreferrer" href={resume}>
            Resume
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/parth-miyani/"
          >
            LinkedIn
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ParthMiyani"
          >
            GitHub
          </a>
          {/* <a className="link" href="https://twitter.com/parth_miyani_">→Twitter</a> */}
        </div>
        <div>
          <p>
            <span className="time">{time && time}</span>© Parth Miyani{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
