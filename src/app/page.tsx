'use client';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_resume-item.scss';
import './scss/resume.scss';
import { CsharpOriginal, Css3Original, DockerOriginal, DotnetcoreOriginal, 
  GithubOriginal, JavascriptOriginal, LinkedinOriginal, PythonOriginal, ReactOriginal } from 'devicons-react';

export default function Home() {
  return (
    <div id="page-top">

      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Navbar.Brand className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/img/profile.jpeg" alt="" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href='#about'>
              About
            </Nav.Link>
            <Nav.Link href='#experience'>
              Experience
            </Nav.Link>
            <Nav.Link href='#education'>
              Education
            </Nav.Link>
            <Nav.Link href='#skills'>
              Skills
            </Nav.Link>
            <Nav.Link href='#interests'>
              Interests
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid className=" p-0">

        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">Clarence
              <span className="text-primary">Taylor</span>
            </h1>
            <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <Row className="list-inline list-social-icons mb-0" justify-content>
              <Col className="list-inline-item" sm={2}>
                <a href="#">
                  <LinkedinOriginal size={100} />
                </a>
              </Col>
              <Col className="list-inline-item" sm={2}>
                <a href="#">
                  <GithubOriginal size={100} />
                </a>
              </Col>
            </Row>
          </div>
        </section>

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">December 2011 - March 2013</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Junior Web Designer</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">July 2010 - December 2011</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div>

          </div>

        </section>

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">University of Colorado Boulder</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2006 - May 2010</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">James Buchanan High School</h3>
                <div className="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2002 - May 2006</span>
              </div>
            </div>

          </div>
        </section>

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div className="my-auto">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <Row >
              <Col className="list-inline-item" >
                <ReactOriginal size={100}></ReactOriginal>
              </Col>
              <Col className="list-inline-item">
                <Css3Original size={100}></Css3Original>
              </Col>
              <Col className="list-inline-item">
                <JavascriptOriginal size={100}></JavascriptOriginal>
              </Col>
              <Col className="list-inline-item">
                <PythonOriginal size={100}></PythonOriginal>
              </Col>
              <Col className="list-inline-item">
                <CsharpOriginal size={100}></CsharpOriginal>
              </Col>
              <Col className="list-inline-item">
                <DotnetcoreOriginal size={100}></DotnetcoreOriginal>
              </Col>
              <Col className="list-inline-item">
                <DockerOriginal size={100}></DockerOriginal>
              </Col>
            </Row>

            <div className="subheading mb-3">Workflow</div>
            <ListGroup className="fa-ul mb-0">
              <ListGroup.Item>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design</ListGroup.Item>
              <ListGroup.Item>
                <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging</ListGroup.Item>
              <ListGroup.Item>
                <i className="fa-li fa fa-check"></i>
                Cross Functional Teams</ListGroup.Item>
              <ListGroup.Item>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</ListGroup.Item>
            </ListGroup>
          </div>
        </section>

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div className="my-auto">
            <h2 className="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
            <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
          </div>
        </section>

      </Container>


    </div>

  );
}
