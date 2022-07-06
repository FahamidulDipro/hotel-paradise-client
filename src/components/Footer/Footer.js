import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {
    return (
        <>
        <div
          style={{ margin: "0" }}
          className="bg-dark text-light p-3 d-flex justify-content-center"
        >
          <div>
            <Row className="container">
              <Col lg={3}>
                <div className="text-start container my-3">
                  <h3 className="mb-3">OFFICE</h3>
                  <hr />
                  <p>220E Front St. Burlington NC 27215</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="text-start container my-3">
                  <h3 className="mb-3">CONTACT</h3>
                  <hr />
                  <p>
                    <BsFillTelephoneFill className="me-3"></BsFillTelephoneFill>
                    (007) 123 456 7890
                  </p>
                  <p>
                    <AiFillMail className="me-3"></AiFillMail>support@example.com
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="text-start container my-3">
                  <h3 className="mb-3">OPENING HOURS</h3>
                  <hr />
                  <p>
                    {" "}
                    Monday – Friday: 09:00AM – 09:00PM <br></br>
                    Saturday: 09:00AM – 07:00PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="text-start container my-3 ">
                  <h3 className="mb-3">KEEP IN TOUCH</h3>
                  <hr />
                  <p>
                    Keep up on our always evolving products features and
                    technology. Enter your e-mail and subscribe to our newsletter.
                  </p>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control my-3"
                  />
                  <Button variant="danger w-100 mb-3">SUBSCRIBE</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
  
        <section
          className=" d-flex justify-content-between mt-0 p-3 "
          style={{ backgroundColor: "black" }}
        >
          <p className="text-secondary w-50 ms-5">©Copyright 2022 HOTEL PARADISE</p>
          <div className="text-light w-50">
            <FaFacebookF
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></FaFacebookF>
            <FaGoogle
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></FaGoogle>
            <FaGithub
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></FaGithub>
          </div>
        </section>
      </>
    );
};

export default Footer;