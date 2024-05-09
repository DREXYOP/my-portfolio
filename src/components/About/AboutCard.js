import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Debadithya Ray Barman </span>
            from <span className="purple"> Tripura, India.</span>
            <br />
            I am currently working on my personal projects as well as on building my very own company..
            <br />
            I have been coding from almost 4 years and now learning about Servers, Networking and Buisness.
            <br />
            <br />
            Apart from coding, I do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Spend my time thinking new ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Believe you can and you're halfway there."{" "}
          </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
