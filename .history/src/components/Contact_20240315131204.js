import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rd9qjwo', 'template_zfv38gh', form.current, {
        publicKey: 'gkS2yVIJfC9nkzLVs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <section>
            <h2 style={{ textAlign: 'center' }}>Get In Touch!!!</h2>
            <Row className="align-items-center">

              <Col size={12} md={6}>
                <TrackVisibility>

                  {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                  }
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>   <section >
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </section> </Col>
            </Row>
          </section>

        </Container>
      </section>
    </>
  )
}



