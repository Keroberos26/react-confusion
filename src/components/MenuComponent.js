import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Col, Container, Row } from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <Col xs={12} md={5} className="m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </Col>
    );
  });

  return (
    <Container>
      <Row>{menu}</Row>
    </Container>
  );
};

export default Menu;
