import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="SNS"
              description="I developed a dynamic chat application using ReactJS for the frontend, powered by NodeJS and ExpressJS on the backend with MongoDB as the database. The user interface is styled using TailwindCSS and DaisyUI, ensuring a responsive design across devices. The application supports real-time communication through WebSocket integration and secure user authentication using JWT  it involves a backend developed from scratch and has the following functionalities: private chats,events,group chats,group and events creation,user signup and login"
              ghLink="https://sns-client.onrender.com"
              demoLink="https://sns-client.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Certified"
              description="A custom certificate generator developed with Laravel and the Intervention library and the Spatie media library, it generates a certificate based on the predefined inputs provided and a certificate template"
              ghLink="LINK TO  CERTIFIED"
              demoLink="LINK TO CERTIFIED"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-COMMERCE"
              description="A complete e-commerce website developed with laravel that comes with an admin dashboard for order processing and listings"
              ghLink="ECOMMERCE"
              demoLink="ECOMMERCE"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sociallife"
              description="A social media scheduling tool that can help users to schedule post creation, developed with ExpressJS and NodeJS **STILL IN DEVELOPMENT**"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="MayoralBlog"
              description="A blog where users can read,create and comment on posts developed with Laravel"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fantasy One"
              description="A web3 representation of the fantasy premier league, here users have a budget of which they select 11 from 15 players to complete their lineup, the smart contracts was written in solidity"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
