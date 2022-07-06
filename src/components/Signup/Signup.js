import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const navigate = useNavigate();

  const addUser = (email, currentUser) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const password = data.password;
    const cpassword = data.cpassword;
    const email = data.email;
    if (password === cpassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setPasswordMatchError(
        <p className="text-danger text-start mt-3">
          Passwords didn't match, try again
        </p>
      );
    }
    console.log(data);
  };

  if (user) {
    const currentUser = { email: user?.user?.email };
    addUser(user?.user?.email, currentUser);
    console.log(user?.user?.email);
    navigate("/");
  }
  let displayError;
  if (error) {
    displayError = <p className="text-danger">{error?.message}</p>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Header className="text-uppercase fw-bold display-6 text-primary border-0">
          Signup
        </Card.Header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 border-0 shadow-lg"
        >
          {displayError}
          <input
            {...register("name", { required: true })}
            type="text"
            className="form-control my-3 "
          />
          <input
            {...register("email", { required: true })}
            type="email"
            className="form-control my-3"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            className="form-control my-3"
          />
          <input
            {...register("cpassword", { required: true })}
            type="password"
            className="form-control my-3"
          />
          {passwordMatchError}

          <input
            type="submit"
            className="btn w-100 bg-primary text-light fw-bold border-0"
            value="SIGNUP"
          />
        </form>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
