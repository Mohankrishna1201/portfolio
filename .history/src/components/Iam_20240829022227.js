import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dev from "../assets/img/dev.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import "../App.css"
export default function Iam() {
    return (

        <Container>
            <section style={{ paddingBottom: '100px', paddingTop: '100px', paddingLeft: '5px', paddingRight: '5px' }}>
                <h2>Who I am</h2>
                <Row style={{ padding: '0', }}>
                    <Col sm={8}>
                        <p style={{ textAlign: 'left', }}>I am <span style={{ color: '#7f3398', fontWeight: 'bolder' }}>Mohan Krishna Kattamuri</span>. I'm a MERN stack developer, React Native Developer & UI/UX designer, also a BlockChain Enthusiast and Problem solving Enthusiast as well.</p>
                        <p style={{ textAlign: 'left', }} >In my professional life, I thrive as both a UI/UX designer and a web developer. With a quick learning curve and a fervent self-learning attitude, I relish the opportunity to delve into new technologies. My passion lies in problem-solving, whether it's crafting intuitive user experiences or architecting robust web solutions. I enjoy embracing the diverse stacks of software engineering, finding inspiration in the challenges they present.
                            My current stack includes React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Bootstrap, HTML5, CSS, Figma, Version Control: Git/Github.I am profecient in C, C++, Javascript.</p>
                    </Col>
                    <Col sm={4}>  <img src={dev} alt="" /></Col>
                </Row>
            </section>

        </Container>
    );
}



