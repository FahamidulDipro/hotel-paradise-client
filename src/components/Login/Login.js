import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInWithEmailAndPassword(email, password);
    console.log(data);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  let displayError;
  if (error) {
    displayError = <p className="text-danger">{error?.message}</p>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card border="light" style={{ width: "18rem",marginTop: "150px" }}>
        <Card.Header className="text-uppercase fw-bold display-6 text-primary border-0">
          Login
        </Card.Header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 border-0 shadow-lg"
        >
          {displayError}
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
            type="submit"
            className="btn w-100 bg-primary text-light fw-bold border-0"
            value="LOGIN"
          />
        </form>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default Login;
