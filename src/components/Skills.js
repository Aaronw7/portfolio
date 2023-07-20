import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
       breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-box">
            <h2>Languages</h2>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML" />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS" />
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" />
                <h5>Javascript</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <h5>Python</h5>
              </div>
            </Carousel>
          </div>
          <div className="skill-box2">
            <h2>Libraries and Frameworks</h2>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" />
                <h5>ReactJS</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" alt="Django" />
                <h5>Django</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" alt="Flask" />
                <h5>Flask</h5>
              </div>
            </Carousel>
          </div>
          <div className="skill-box">
            <h2>Databases</h2>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                <h5>PostgreSQL</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <h5>MySQL</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <h5>MongoDB</h5>
              </div>
              <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                <h5>SQLite</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}