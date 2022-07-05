import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header className="text-uppercase fw-bold display-6 text-primary border-0">
            Login
          </Card.Header>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-3 border-0 shadow-lg"
          >
        
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