import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Room = ({ room }) => {
  const { _id, roomType, price, reservationStatus, img,description } = room;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //Loading Users from database
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://serene-badlands-89080.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const selectedUser = users.find((u) => u.email === user?.email);
  const adminStatus = selectedUser?.role;
  //Updating the status
  const updateStatus = (id) => {
    const reservationInfo = {
      reservationStatus: true,
    };
    fetch(`https://serene-badlands-89080.herokuapp.com/rooms/${id}`, {
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
    fetch("https://serene-badlands-89080.herokuapp.com/reservations", {
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
  const updateHandler = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <Col lg={4} style={{marginTop:"150px"}}>
      <Card style={{ width: "18rem" }} className="text-start border-0 shadow-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-uppercase fw-bold">{roomType}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <p style={{fontSize:"20px"}}>
            <b>Price:</b> $<span className="text-primary">{price}</span>
          </p>
         
            <div >
              {" "}
            
              {adminStatus ? (
                <Button variant="success text-uppercase fw-bold" onClick={() => updateHandler(_id)}>
                  Update Price
                </Button>
              ) :  reservationStatus? <p className="text-danger">
              <b>Booked</b>
            </p>: <Button
              variant="primary me-3 text-uppercase fw-bold"
              onClick={() => {
                handleReservation(_id);
              }}
            >
              Make Reservation
            </Button>}
            </div>
       
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Room;
