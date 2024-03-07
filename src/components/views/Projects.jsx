import "../../styles/projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div>
        <h4>Parker</h4>
        <p>Mobile app – Flutter, JAVA, REST API</p>
        <p>
          Created end-to-end parking assistance utilizing Flutter and Google
          Authentication to provide a seamless user experience.
          <br />
          Integrated Java server to handle API calls, identify nearest available
          parking spot, and payment system for parking charges.
          <br />
          Designed sensor-based system to automate parking availability checks,
          reducing in 50% reduction in time on manual checks and improving
          efficiency.
        </p>
        <h4>Soccer Tournament</h4>
        <p>Web app – Spring MVC, JSP, PostgreSQL, REST API</p>
        <p>
          Led a team of 5 developers to build a soccer tournament web
          application with help of agile methodology.
          <br />
          Incorporated scheduling for tournaments, registration for teams and
          tournament news leveraging spring MVC.
          <br />
          Utilized PostgreSQL to store player and team information, and
          implemented REST API to fetch and update data.
          <br />
          Revamped website flows and features, performing robust error handling
          and unit testing, achieving test coverage by 95%.
        </p>
        <h4>Career Mentor</h4>
        <p>mobile app – Flutter, Dart Firebase, FireStore, REST APIs</p>
        <p>
          In a team of 5, built a Flutter app, using user responses to provide
          personalized career guidance based on analyzed data.
          <br />
          Utilized Google APIs for authentication and Dart to build a good user
          interface.
          <br />
          Incorporated Cloud Firestore to store user data and provide dynamic
          questionnaires to users based on the answer.
          <br />
          Applied Fuzzy decision tree algorithm to evaluate responses and
          provide optimal career choices with an 85% accuracy rate.
        </p>
        <h4>Cricket Events Detection</h4>
        <p>Web app – Python, SPARQL, AWS</p>
        <p>
          Applied a spaCy-based named entity recognition and relation extraction
          model to identify sport events from Twitter data, reducing manual time
          and effort by 70%.
          <br />
          Constructed a linked dataset of detected events on AWS Lambda and
          displayed data based on user-entered keywords through SPARQL queries
          with prescribed cricket ontology.
          <br />
          Submitted paper to Semantic Data IntegrationWorkshop (SDI 2022),
          showcasing expertise in semantic data integration.
        </p>
      </div>
    </div>
  );
}
