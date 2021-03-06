import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navigation.css";
const Navigation = () => {
  const [user] = useAuthState(auth);
  //Loading Users from database
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://serene-badlands-89080.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const selectedUser = users.find(u=>u.email===user?.email)
  const adminStatus = selectedUser?.role;
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
      
        <Container>
          <NavLink to="/" className="text-decoration-none ">
            <Navbar.Brand className="text-primary fw-bold text-uppercase">
              Hotel Paradise
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Home
              </NavLink>
             
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Statistics
              </NavLink>
             {
              adminStatus? <><NavLink
              to="/userDetails"
              className={({ isActive }) =>
                isActive ? "active-link" : "link"
              }
            >
              User Details
            </NavLink><NavLink
              to="/addRoom"
              className={({ isActive }) =>
                isActive ? "active-link" : "link"
              }
            >
             Add Room
            </NavLink></> :null
             }

              {user ? (
                <>
                  <span className="m-2 fw-bold text-info">{user?.email} </span>
                  <button
                    className="btn btn-primary text-uppercase fw-bold"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    Signup
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
