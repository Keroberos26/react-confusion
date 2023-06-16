import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row,
} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            var comments = this.renderComments(dish.comments);

            return (
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
            );
        } else return <></>;
    }

    renderComments(comments) {
        if (comments != null) {
            var showComments = comments.map((cmt) => {
                return (
                    <li key={cmt.id}>
                        <p>{cmt.comment}</p>
                        <p>
                            -- {cmt.author}, {cmt.date}
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

    render() {
        const dish = this.renderDish(this.props.selectedDish);
        return dish;
    }
}

export default DishDetail;
