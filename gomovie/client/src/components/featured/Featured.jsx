import React from 'react';
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

export default function Featured({ type }) {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name='genere' id='genere'>
            <option>Genere</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        src='https://imgr.search.brave.com/M88gstvXvDbji4Qlrs3Bae0YC0D2j9eY2IGu760THiQ/fit/1200/1200/ce/1/aHR0cHM6Ly93d3cu/aGR3YWxscGFwZXJz/LmluL2Rvd25sb2Fk/L3ZpamF5X2luX3Nh/cmthcl9tb3ZpZV80/ay1IRC5qcGc'
        alt=''
      />
      <div className='info'>
        <img
          src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1'
          alt=''
        />
        <span className='desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          accusamus totam at officia maxime dolor nihil perspiciatis quasi natus
          voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cum numquam magnam sapiente similique fugit doloribus nihil illo eum,
          nulla voluptate.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
