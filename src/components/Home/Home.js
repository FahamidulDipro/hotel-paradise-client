import React from 'react';
import Footer from '../Footer/Footer';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    return (
        <div style={{marginTop:"150px"}}>
           <Rooms></Rooms>
           <Footer></Footer>
        </div>
    );
};

export default Home;