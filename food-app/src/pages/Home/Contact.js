import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/ContactStyle.css";
import contactImg from "../../assets/about/pizza.png"; // replace with any image you have

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Get in touch with PizzaHub – the best pizza in town 🍕
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Contact Info */}
          <Col md={6} className="mb-4">
            <Card className="contact-card p-4">
              <h4>📞 Phone</h4>
              <p>+91 98765 43210</p>

              <h4>📧 Email</h4>
              <a href=""><p>notmentioned@gmail.com</p></a>

              <h4>📷 Instagram</h4>
              <p>
                <a href="https://instagram.com/mr.roy.52" target="_blank" rel="noreferrer">
                  @pizzahub
                </a>
              </p>

              <h4>📷 LinkedIn</h4>
              <p>
                <a href="https://portfolio-rayu.vercel.app/" target="_blank" rel="noreferrer">
                  Personal Website
                </a>
              </p>

              <h4>ℹ️ About Us</h4>
              <p>
                PizzaHub is your one-stop destination for delicious pizzas, 
                fresh salads, and fast delivery. We bring happiness in every bite! 🍕
              </p>
            </Card>
          </Col>

          {/* Contact Image */}
          <Col md={6} className="text-center">
            <img
              src={contactImg}
              alt="Contact Pizza"
              className="img-fluid contact-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
