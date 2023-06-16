import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";



  function RenderDish({dish}) {
    if (dish != null) {
      var comments = RenderComments(dish);

      return (
        <Container>
          <Row>
            <Col xs={12} md={5} className="m-1">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </Col>

            {comments}
          </Row>
        </Container>
      );
    } else return <></>;
  }

  function RenderComments({comments}) {
    if (comments != null) {
      var showComments = comments.map((cmt) => {
        return (
          <li key={cmt.id}>
            <p>{cmt.comment}</p>
            <p>
              -- {cmt.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(cmt.date)))}
            </p>
          </li>
        );
      });

      return (
        <Col xs={12} md={5} className="m-1">
          <h4>Comment</h4>
          <ul className="list-unstyled">{showComments}</ul>
        </Col>
      );
    } else {
      return <></>;
    }
  }

  const DishDetail = (props) => {
    return RenderDish(props);
  }


export default DishDetail;
