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
          {reservationStatus ? (
            <p className="text-danger">
              <b>Booked</b>
            </p>
          ) : (
            <Button variant="primary">Book Reservation</Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Room;