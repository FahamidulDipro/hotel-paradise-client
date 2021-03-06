import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const UserDetails = () => {
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
     
    return (
        <div style={{ marginTop: "60px" }}>
         <Table striped bordered hover className=" container" >
        <thead >
          <tr>
            <th>#</th>
            <th>Users</th>
            <th>Reservation Made</th>
            <th>Number of Reservation</th>
            <th>Reservations</th>
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
              <td>{filteredReservation(user?.email).map(reservation=><span>{reservation.roomType},</span>)}</td>
            </tr>
          ))}
        </tbody>
      </Table>  
        </div>
    );
};

export default UserDetails;