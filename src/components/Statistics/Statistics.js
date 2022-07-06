import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ChartComponent from "../ChartComponent/ChartComponent";

const Statistics = () => {
  const [users, setUsers] = useState([]);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch("https://serene-badlands-89080.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch("https://serene-badlands-89080.herokuapp.com/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);
  const filteredReservation = (email) => {
    const selectedReservations = reservations.filter(
      (reservation) => reservation.email === email
    );
    return selectedReservations;
  };
  const dataForChart = users.map((user) => ({
    userMail: user.email,
    numberOfReservation: filteredReservation(user?.email).length,
  }));
  return (
    <div style={{marginTop:"60px"}}>
      <Table striped bordered hover className="container" >
        <thead>
          <tr>
            <th>#</th>
            <th>Users</th>
            <th>Reservation Made</th>
            <th>Number of Reservation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, count = 0) => (
            <tr key={user._id}>
              <td>{count + 1}</td>
              <td>{user?.email}</td>
              <td>
                {filteredReservation(user?.email)[0]?.email ? (
                  <span className="text-success fw-bold">Yes</span>
                ) : (
                  <span className="text-danger fw-bold">No</span>
                )}
              </td>
              <td>{filteredReservation(user?.email).length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ChartComponent dataForChart={dataForChart}></ChartComponent>
    </div>
  );
};

export default Statistics;
