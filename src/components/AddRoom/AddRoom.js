import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addRoom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "150px" }}
    >
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Header
          className="text-uppercase fw-bold  text-primary border-0"
          style={{ fontSize: "30px" }}
        >
          Add Room
        </Card.Header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 border-0 shadow-lg"
        >
          <input
            {...register("roomType", { required: true })}
            type="text"
            className="form-control my-3"
            placeholder="Room Type"
          />
          <input
            {...register("description", { required: true })}
            type="text"
            className="form-control my-3"
            placeholder="Short Description"
          />
          <input
            {...register("img", { required: true })}
            type="text"
            className="form-control my-3"
            placeholder="Image"
          />
          <input
            {...register("price", { required: true })}
            type="number"
            className="form-control my-3"
            placeholder="Price"
          />

          <input
            type="submit"
            className="btn w-100 bg-primary text-light fw-bold border-0"
            value="ADD ROOM"
          />
        </form>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default AddRoom;
