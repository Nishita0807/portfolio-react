import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postman from "../../Assets/Projects/postman.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import crypto from "../../Assets/Projects/crypto.png";
import portal from "../../Assets/Projects/onlineportal.jpg";
import shopping from "../../Assets/Projects/shopping.png";

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
              imgPath={crypto}
              isBlog={false}
              title="Crypto-Tracker"
              description="Crypto Tracker build with react.js, Material-UI, and Framer-motion. Have features which allows user for realtime analysing and comparing different coins fetched from real-time APIs."
              ghLink="https://github.com/Nishita0807/crypto-coin-project.git"
              demoLink="https://crypto-coin-nishita.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping-Cart-Redux"
              description="In this project , using redux management tool using react-app. Featured the functionality of calculating price as per the selection of items. "
              ghLink="https://github.com/Nishita0807/shopping-cart-redux.git"
              demoLink="https://shopping-cart-redux-six-lyart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb-clone"
              description="This project help to show the details and location of the hotels available for the date set as an filter by user."
              ghLink="https://github.com/Nishita0807/js-airbnb.git"
              demoLink="https://nishita0807.github.io/js-airbnb/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postman}
              isBlog={false}
              title="Blogging Backend"
              description="Here we are using Postman and REST API to fetch and put details using the App which is created using Express js and a MongoDB connection established to hold the content."
              ghLink=" https://github.com/Nishita0807/backend.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portal}
              isBlog={false}
              title="Online Job portal"
              description="This is a complete java development project including technologies maven , mySQL, Java , Java Servlet Pages provide a complete application for jobs."
              ghLink="https://github.com/Nishita0807/OnlineJobPortal.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Using 'Natural Launguage Processing' for the detection of cricket pose and user's emotions helping in estimation of real-time analysis."
              ghLink="https://github.com/Nishita0807/Cricket-pose-IBM.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
