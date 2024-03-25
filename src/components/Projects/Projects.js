import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Autonomus Ocean Cleaning Robot"
              description="An ocean cleaning robot which uses AI to navigate its path, trained an AI model using custom dataset and tensorflow and used it with openCV to detect trash and other objects. An prototype idea for my school exehibiton."
              ghLink="https://github.com/DREXYOP/Project-AOCR"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Doctor AI"
              description="An AI based doctor which can be used to server less developed and rural areas. An prototype project for school exehibition."
              ghLink="https://github.com/DREXYOP/Doctor-AI"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Solanity Music"
              description="An discord music bot which uses shoukaku wrapper and lavalink to play music."
              ghLink="https://github.com/RhythmzTech/solanitymusic"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ImaginePedia"
              description="My company which makes custom softwares and also works on AI/ML."
              ghLink="https://github.com/Imaginepedia"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="other projects"
              description="Checkout my github page for my other projects."
              ghLink="https://github.com/DREXYOP"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
