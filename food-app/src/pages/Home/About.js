import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/AboutStyle.css";
import aboutImg from "../../assets/about/about-1.jpg"; // replace with any image you have

const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="about-title">About Us</h2>
            <p className="about-subtitle">
              Welcome to <strong>PizzaHub</strong> – Where Every Bite is Happiness 🍕
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Image */}
          <Col md={6} className="text-center mb-4">
            <img
              src={aboutImg}
              alt="About PizzaHub"
              className="img-fluid about-img"
            />
          </Col>

          {/* Content */}
          <Col md={6}>
            <Card className="about-card p-4">
              <h4>🍕 Who We Are</h4>
              <p>
                PizzaHub started with one goal – to serve fresh, cheesy, and
                mouth-watering pizzas that bring friends and families together.
              </p>

              <h4>🥗 What We Offer</h4>
              <p>
                From classic Margherita to loaded cheese burst, from healthy
                salads to quick doorstep delivery – we have something for
                everyone!
              </p>

              <h4>🚀 Our Mission</h4>
              <p>
                To make PizzaHub the most loved pizza brand by combining great
                taste, quick delivery, and pocket-friendly prices.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
