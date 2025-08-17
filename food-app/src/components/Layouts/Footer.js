import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>Krishan Nagar</p>
                <p>Plot no 12 , Royal Apartment</p>
                <p>Giridih Jharkhand India</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:9693245119" className="calling">
                    9693245119
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="https://facebook.com/Ujjwal Kumar Roy">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="https://instagram.com/mr.roy.52">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://portfolio-rayu.vercel.app/">
                      <span> 📷 Personal Website</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                       <span>Ujjwal</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
