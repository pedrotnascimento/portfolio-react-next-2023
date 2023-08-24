'use client';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/_resume-item.scss';
import './scss/resume.scss';
import {
  AngularjsOriginal,
  CsharpOriginal, Css3Original, DockerOriginal, DotnetcoreOriginal,
  GithubOriginal, JavascriptOriginal, LinkedinOriginal, PythonOriginal, ReactOriginal
} from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className=" p-0">

        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">Pedro
              <span className="text-primary">Nascimento</span>
            </h1>
            <div className="subheading mb-5">Rua Helvia Bragança · Rio de Janeiro, Brazil · +55 (21) 98017-1775 ·
              <p><a href="mailto:pedrotnascimento@gmail.com" >pedrotnascimento@gmail.com</a></p>
            </div>
            <p className="mb-5">I am experienced in developing softwares from frontend to cloud. The technologies I have great expertise are Angular, React, .Net Core and Python, of course, I'm software engineer I can handle any software issue.</p>
            <Row className="list-inline list-social-icons mb-0" justify-content>
              <Col className="list-inline-item" sm={2}>
                <a target="_blank" href="https://www.linkedin.com/in/pedro-nascimento-2360a5103/">
                  <LinkedinOriginal size={100} />
                </a>
              </Col>
              <Col className="list-inline-item" sm={2}>
                <a href="https://github.com/pedrotnascimento" target="_blank">
                  <GithubOriginal size={100} />
                </a>
              </Col>
              <Col className="list-inline-item" sm={2}>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5521980171775&text=Hi,%20I%20coming%20from%20your%20portfolio,%20I%20would%20like%20to%20make%20business%20with%20you!">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                  </svg>
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
                <h3 className="mb-0">Fullstack developer</h3>
                <div className="subheading mb-3">Ambev Tech</div>
                <p>A widely used B2B marketplace platform where customer could re-sell the company products and partners products.</p>
                <p>Responsible for implementing screen and features using Angular projects.</p>
                <p>Delegate file process to microservices in dotnet core through a message broker.</p>
                <p>Maintained custom libraries which served holded the common shared features across each project and business domains.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Nov 2022 - Aug 2023</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Fullstack developer</h3>
                <div className="subheading mb-3">Radix Engineering and Software</div>
                <p>I've had the privilege of contributing to a variety of impactful web application projects in a fullstack capacity. I've engaged with diverse clientele spanning insurance companies, the plastic industry, gas stations, and even oil companies.</p>
                <p>One standout accomplishment was spearheading an integration test project that streamlined processes across the entire company. This initiative enhanced efficiency and quality, delivering seamless outcomes.</p>
                <p>My tech toolkit included leveraging Azure DevOps and Jenkins to ensure top-tier CI/CD implementation. In addition, I skillfully managed and optimized databases using PostgreSQL and SQL Server.</p>
                <p>Throughout my journey, I remained dedicated to the SOLID principles and championed the importance of Clean Code. Passionate about knowledge-sharing, I took it upon myself to mentor newcomers to our dynamic team.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Feb 2019 - Nov 2022</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">.Net Core Backend Developer</h3>
                <div className="subheading mb-3">BTG Pactual</div>
                <p>Managed and developed microservices that efficiently handled investment fund share transactions for clients and funds. Utilized cutting-edge .Net Core technology and used Azure Service Bus queues to optimize processes.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Aug 2018 - Dec 2018</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">.Net Core and Python Developer</h3>
                <div className="subheading mb-3">GT2 Engineering</div>
                <p>
                  Implemented features and fixed bugs being the only responsible for the GT2 thermoelectric plant simulation system, the company's main product. This system was developed in .Net.
                </p>
                <p>Other activities included generating a python script to ease data analyst tasks.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">Jan 2018 - Aug 2018</span>
              </div>
            </div>

          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Fullstack Developer</h3>
              <div className="subheading mb-3">ATG - Americas Trading Group</div>
              <p>
                A Home broker enterprise sought to modernize data management for products, customers, and licenses. I leaded the development of an internal web app using Angular, interfacing seamlessly with REST APIs in .Net Core. This initiative streamlined operations and optimized data access.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jul 2017 - Nov 2017</span>
            </div>
          </div>
        </section>

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Pontificial Catholic University of Rio de Janeiro (PUC-Rio)</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Bacherlor in Software engineering</div>
                <p>CR: 7.0</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2012 - December 2017</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div className="my-auto">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <Row >
              <Col  >
                <div>
                  <ReactOriginal size={"100%"}></ReactOriginal>
                  <p className='technology-center'>React</p>
                </div>
              </Col>
              <Col >
                <div>
                  <PythonOriginal size={"100%"}></PythonOriginal>
                  <p className='technology-center'>Python</p>
                </div>
              </Col>
              <Col >
                <div>
                  <CsharpOriginal size={"100%"}></CsharpOriginal>
                  <p className='technology-center'>C#</p>
                </div>
              </Col>
              <Col >
                <div>
                  <DotnetcoreOriginal size={"100%"}></DotnetcoreOriginal>
                  <p className='technology-center'>.Net Core</p>
                </div>
              </Col>
              <Col >
                <div>
                  <AngularjsOriginal size={"100%"}></AngularjsOriginal>
                  <p className='technology-center'>Angular</p>
                </div>
              </Col>
              <Col >
                <div>
                  <Css3Original size={"100%"}></Css3Original>
                  <p className='technology-center'>CSS3</p>
                </div>
              </Col>
              <Col >
                <div>
                  <JavascriptOriginal size={"100%"}></JavascriptOriginal>
                  <p className='technology-center'>Javascript</p>
                </div>
              </Col>
              <Col >
                <div>
                  <DockerOriginal size={"100%"}></DockerOriginal>
                  <p className='technology-center'>Docker</p>
                </div>
              </Col>
            </Row>

            <div className="subheading mb-3">Workflow</div>
            <ListGroup >
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Clean code
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Clean Architecture
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                SOLID Principles
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Agile Development &amp; Scrum
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                TDD
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Deployment in Azure Devops and AWS Fargate
              </ListGroup.Item>
            </ListGroup>
          </div>
        </section>
      </Container>
    </div>

  );
}
