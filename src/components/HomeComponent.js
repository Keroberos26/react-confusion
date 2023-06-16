import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <Container>
      <Row className="align-items-start">
        <Col xs={12} md className="m-1">
          <RenderCard item={props.dish} />
        </Col>
        <Col xs={12} md className="m-1">
          <RenderCard item={props.promotion} />
        </Col>
        <Col xs={12} md className="m-1">
          <RenderCard item={props.leader} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
