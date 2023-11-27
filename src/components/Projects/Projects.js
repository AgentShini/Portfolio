import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              description="I spearheaded the development of a dynamic chat application, showcasing my proficiency in cutting-edge technologies. The frontend, crafted with precision in ReactJS, seamlessly interacts with a robust backend powered by NodeJS and ExpressJS, with MongoDB as the database foundation. The user interface boasts a responsive design, styled to perfection using TailwindCSS and DaisyUI. This application excels in real-time communication, thanks to WebSocket integration, and ensures user security through JWT-based authentication. Noteworthy features include private chats, events, and group functionalities, empowering users to create and join discussions effortlessly."
              ghLink="https://sns-client.onrender.com"
              demoLink="https://sns-client.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Certified"
              description="I engineered a bespoke certificate generator using Laravel, leveraging the Intervention library and the Spatie media library. This innovative solution seamlessly produces certificates by dynamically incorporating predefined inputs and a meticulously designed certificate template. Through the power of Laravel's robust framework, the Intervention library's image manipulation capabilities, and the media management features of Spatie, this generator ensures a flexible and efficient process. The certificate generation process is not only tailored to specific inputs but is also visually harmonized with a customizable template. This project underscores my proficiency in PHP development, Laravel framework."
              ghLink="https://github.com/AgentShini/certified"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-COMMERCE"
              description="I architected a comprehensive e-commerce website using Laravel, encompassing a sophisticated admin dashboard for streamlined order processing and listings management. The website seamlessly integrates front-end and back-end functionalities, offering users an intuitive and secure online shopping experience. The Laravel framework, known for its robust features, forms the backbone of the website, ensuring scalability and reliability."
              ghLink="https://github.com/AgentShini/ecommerce"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sociallife"
              description="I am actively developing a cutting-edge social media scheduling tool using ExpressJS and NodeJS, designed to empower users with efficient post scheduling capabilities. Currently in the development phase, this tool is poised to revolutionize social media management by allowing users to schedule the creation and posting of content seamlessly."
              ghLink="https://github.com/AgentShini/sociallife"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MayoralBlog"
              description="I have developed an interactive blog platform using Laravel, where users can seamlessly read, create, and engage through comments on posts. This Laravel-based blog is designed to provide a user-friendly experience, fostering a dynamic and collaborative community."
              ghLink="https://github.com/AgentShini/mayoral_blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fantasy One"
              description="A web3 representation of the fantasy premier league, here users have a budget of which they select 11 from 15 players to complete their lineup, the smart contracts was written in solidity"
              ghLink="https://github.com/AgentShini/Fantasy-One-DAPP-V1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
