import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";

export const Projects = () => {

  const projects = [
    {
      title: "Typescript Demo",
      description: "Fullstack PERN with Typescript and Redux",
      imgUrl: projImg1,
      websiteUrl: "https://github.com/Aaronw7/ts-demo",
    },
    {
      title: "BudgetPal",
      description: "Frontend React MUI",
      imgUrl: projImg2,
      websiteUrl: "https://github.com/Aaronw7/budget-pal",
    },
    {
      title: "Minting Web3",
      description: "Frontend React with Basic Solidity Smart Contract",
      imgUrl: projImg3,
      websiteUrl: "https://github.com/Aaronw7/mint-web3",
    },
    {
      title: "Windfall SaaS",
      description: "Fullstack React with Flask",
      imgUrl: projImg4,
      websiteUrl: "https://github.com/Aaronw7/windfall",
    },
    {
      title: "ChatterApp",
      description: "Fullstack MERN with WebSockets",
      imgUrl: projImg5,
      websiteUrl: "http://chatterapp.net",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Feel free to check out the projects I have listed here!</p>
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
