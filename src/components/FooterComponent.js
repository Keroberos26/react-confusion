import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="justify-content-center">
            <Col xs={{ size: 4, offset: 1 }} sm={2}>
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="contactus.html">Contact</a>
                </li>
              </ul>
            </Col>
            <Col xs={7} sm={5}>
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope fa-lg"></i>:{" "}
                <a href="mailto:confusion@food.net">confusion@food.net</a>
              </address>
            </Col>
            <Col xs={12} sm={4} className="align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
