import React from 'react';
import './home.scss';
import '@material-ui/core';
import '@material-ui/icons';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
    </div>
  );
};

export default Home;
