import React, { Component } from "react";
import {
  Col,
  Container,
  Jumbotron,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <Container>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </Container>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row header className="row-header">
              <Col xs={12} sm={6}>
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
