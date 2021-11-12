import React, { useState } from 'react';
import './listItem.scss';
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className='listItem'
        style={{
          left: isHovered && index * 225 - 50 + index * 2.5,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src='https://imgr.search.brave.com/4pRcddQMyzuxts_NrjPDRjm9bB5KrMk5JuzMIH6xyTk/fit/1200/1080/ce/1/aHR0cHM6Ly9oZC1i/YWNrZ3JvdW5kLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNi9CZWFzdC1N/b3ZpZS1XYWxscGFw/ZXIuanBn'
          alt=''
        />
        <div className='itemInfo'>
          <div className='icons'>
            <PlayArrow />
            <Add />
            <ThumbUpAltOutlined />
            <ThumbDownOutlined />
          </div>
          <div className='itemInfoTop'>
            <span>2hr 32mins</span>
            <span className='limit'>+18</span>
            <span>2021</span>
          </div>
          <div className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            neque magnam? Veritatis at consectetur animi quos. Aut vel cumque
            maiores!
          </div>
          <div className='genren'>Action</div>
        </div>
      </div>
    </>
  );
}
