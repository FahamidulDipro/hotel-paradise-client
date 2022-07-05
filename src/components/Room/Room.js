import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Room = ({ room }) => {
  const { _id, roomType, price, reservationStatus } = room;
  const [user] = useAuthState(auth);

  //Updating the status
  const updateStatus = (id) => {
    const reservationInfo = {
      reservationStatus: true,
    };
    fetch(`http://localhost:5000/rooms/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reservationInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  //Adding into reservation
  const handleReservation = (id) => {
    const reservationInfo = {
      roomType: roomType,
      price: price,
      reservationStatus: true,
      email: user?.email,
    };
    fetch("http://localhost:5000/reservations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reservationInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        updateStatus(id);
        console.log(data);
        window.location.reload();
      });
  };
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
            <Button
              variant="primary"
              onClick={() => {
                handleReservation(_id);
              }}
            >
              Book Reservation
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Room;
