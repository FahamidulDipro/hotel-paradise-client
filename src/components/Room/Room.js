import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Room = ({ room }) => {
  const { roomType, price, reservationStatus } = room;
  return (
    <Col lg={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{roomType}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>
            <b>Price:</b> {price}
          </p>
          <p>
            <b>Status:</b> {reservationStatus ? "booked" : "not booked yet"}
          </p>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Room;
