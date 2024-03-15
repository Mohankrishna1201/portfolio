import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/oc.png";
import deliFresh from "../assets/img/Delifresh.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import razorpayclone from "../assets/img/razorpay.jpeg"
import shoestore from "../assets/img/shoestore.png"
import moviesearch from "../assets/img/movisearch.png"
import Zinios from "../assets/img/zinios.png"
import Modulux from "../assets/img/modulux.png"
import saas from "../assets/img/saas.jpeg"
import es from "../assets/img/es.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../App.css'
import TrackVisibility from 'react-on-screen';
import Iam from "./Iam";

export const Projects = () => {

  const projects = [
    {
      title: "Online Compiler",
      description: "MERN STACK",
      imgUrl: projImg1,
      url: "https://github.com/Mohankrishna1201/oc",
    },
    {
      title: "ESUMMIT'24 IIT BHUBANESWAR",
      description: "HTML,CSS,JS,BOOTSTRAP,FIREBASE",
      imgUrl: es,
      url: "https://e-summit-iitbbs.com/",
    },
    {
      title: "Shoe Store",
      description: "REACT,API",
      imgUrl: shoestore,
      url: "https://final-products-list.vercel.app/",
    },
    {
      title: "MovieSearch",
      description: "HTML,CSS,JS,API",
      imgUrl: moviesearch,
      url: "https://mohankrishna1201.github.io/moviesearch/",
    },
    {
      title: "Razorpay Clone",
      description: "HTML,CSS,JS,TAILWIND CSS",
      imgUrl: razorpayclone,
      url: "https://finalrazorpayclone.vercel.app/",
    },

  ];
  const projects2 = [
    {
      title: "Modulux (5th in inter IIT CULT'24)",
      description: "Figma, prototyping, UI/UX",
      imgUrl: Modulux,
      url: "https://www.figma.com/community/file/1349837023290174027",
    },
    {

      title: "DeliFresh (6th in INTER IIT CULT'23",
      description: "Figma, prototyping, UI/UX",
      imgUrl: deliFresh,
      url: "https://www.figma.com/community/file/1287334522116685911",
    },
    {
      title: "Zinios",
      description: "Figma, prototyping, UI/UX",
      imgUrl: Zinios,
      url: "https://www.figma.com/community/file/1349837818044254796",
    },

    {
      title: "Saas-Landing page",
      description: "Figma, UI/UX",
      imgUrl: saas,
      url: "https://www.figma.com/community/file/1349914440709008001",
    },
  ];
  const projects3 = [
    {
      title: "WebnD",
      description: "PS,AI",
      imgUrl: "https://oxidized-orange-2c8.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc74cce48-cf05-4a15-ab7a-8fbe029384f9%2Fb77027c2-127f-4d2c-b6a2-d852b2cc6089%2F924a3fd3-4161-41cf-bba4-8ba23e8e0958.jpeg?table=block&id=32b595c3-322f-430e-86fa-070bdd37d0e6&spaceId=c74cce48-cf05-4a15-ab7a-8fbe029384f9&width=2000&userId=&cache=v2",
      url: "https://oxidized-orange-2c8.notion.site/WebnD-06cb6fd8928f4558be4d8f7336a1b4bb",
    },
    {
      title: "ESUMMIT & FEBS",
      description: "PS,AI",
      imgUrl: "https://oxidized-orange-2c8.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc74cce48-cf05-4a15-ab7a-8fbe029384f9%2Fedba5a50-973d-4185-ba0d-d3a4c35ab8d9%2FPUB-ES-F.jpg?table=block&id=7c025712-0ba7-42d5-a022-4cf3630de6b6&spaceId=c74cce48-cf05-4a15-ab7a-8fbe029384f9&width=2000&userId=&cache=v2",
      url: "https://oxidized-orange-2c8.notion.site/ESUMMIT-and-febs-43426c315daa4c8abd0b4a7e5f709ef0",
    },
    {
      title: "Logos",
      description: "PS,AI",
      imgUrl: "https://oxidized-orange-2c8.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc74cce48-cf05-4a15-ab7a-8fbe029384f9%2F773ace30-f65c-4eb9-96d9-6575dc33b1db%2Fa96126a4-f7f5-4c68-9f8e-86da3143bf55.jpeg?table=block&id=7de8493c-b453-4689-b341-d77525f34495&spaceId=c74cce48-cf05-4a15-ab7a-8fbe029384f9&width=2000&userId=&cache=v2",
      url: "https://oxidized-orange-2c8.notion.site/Logos-cea39f5c32364ddebcbede2812cc3106",
    },

  ];

  return (
    <>

      <section className="project" id="projects">

        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>


                    <h2>Projects</h2>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first" className="tab">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second" className="tab">UI/UX</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third" className="tab">Graphic Design</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              projects2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              projects3.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>
  )
}
