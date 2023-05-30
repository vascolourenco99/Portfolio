/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Card.css"

export default function Card({ data }) {
  return (
    <div className='text-center'>
      <div className='info-container'>
          <h3>{data.title}</h3>
          <hr/>
          {data.skills.map((skill, index) => (
            <p key={index} className='text-skill-style'>{skill}</p>
            ))}
      </div>
    </div>
  );
}