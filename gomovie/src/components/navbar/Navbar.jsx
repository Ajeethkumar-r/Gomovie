import React from 'react';
import './navbar.scss';
import '@material-ui/core';
import '@material-ui/icons';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='left'>
          <img
            src='
            https://imgr.search.brave.com/GAWh4mkxAqNHCWfLj8fk1bdTbAlBGEfMVERXQuNzJpg/fit/1200/562/ce/1/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy8yLTIzMjM2X3Ry/YW5zcGFyZW50LW5l/dGZsaXgtbG9nby0y/MDE4LWNsaXBhcnQu/cG5n'
            alt=''
            style={{
              height: '25px',
            }}
          />
          <span>Homepage</span>
          <span>Movies</span>
          <span>Series</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search />
          <span>KID</span>
          <Notifications />
          <img src='' alt='' />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
