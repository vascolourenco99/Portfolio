// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Bio.css';
import { data } from "../../db/bio"

const message = data



export default function Bio() {
  return (
      <div className='info-container-bio'>
        <div className='personal-info'>
          <div className='personal-image'>
            <img src="img/photo_linkdin.jpeg" alt="" />
          </div>
          <div className='personal-text'>
            <div className='title'>
              <h2>About Me</h2>
            </div>
            <p className='text-style'>
              {message}
            </p>
          </div>
        </div>
      </div>
  );
}





