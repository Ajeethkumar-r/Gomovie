import React from 'react';
import './home.scss';
import '@material-ui/core';
import '@material-ui/icons';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img
        src='https://imgr.search.brave.com/Oz7vKh9mZY1V955C3ipkbgp-OdOH_sVPrDcVIBc1t-E/fit/844/225/ce/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/UEEtUnQzdkx1ZE5T/anE5czJwNlFnSGFF/SyZwaWQ9QXBp'
        alt=''
      />
    </div>
  );
};

export default Home;
