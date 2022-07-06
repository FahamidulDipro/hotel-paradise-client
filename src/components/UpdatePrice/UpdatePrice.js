import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePrice = () => {
  const { roomId } = useParams("roomId");
  const navigate = useNavigate();
  //Fetching all room data
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  const selectedRoom = rooms.find((room) => room._id === roomId);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.roomId = roomId;
    fetch("http://localhost:5000/updatePrice", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset();
    console.log(data);
    navigate("/");
  };
  const selectedRoomPrice = selectedRoom?.price;
  const [price, setPrice] = useState([]);
  useEffect(() => {
    setPrice(selectedRoomPrice);
  }, [selectedRoomPrice]);
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ marginTop: "150px" }}
    >
      {console.log(selectedRoom)}
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Header
          className="text-uppercase fw-bold  text-primary border-0"
          style={{ fontSize: "30px" }}
        >
          Update Price
        </Card.Header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 border-0 shadow-lg"
        >
          <input
            {...register("price", { required: true })}
            type="number"
            value={price}
            onChange={handleInputChange}
            className="form-control my-3"
          />

          <input
            type="submit"
            className="btn w-100 bg-primary text-light fw-bold border-0"
            value="UPDATE PRICE"
          />
        </form>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default UpdatePrice;
