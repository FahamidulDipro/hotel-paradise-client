import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/rooms")
        .then((res) => res.json())
        .then((data) => setRooms(data));
    }, []);
    return (
        <div className='d-flex justify-content-center my-5'>
          <Row className='container g-5'>
            {
                rooms.map(room=><Room key={room._id} room={room}></Room>)
            }
          </Row>
        </div>
    );
};

export default Rooms;