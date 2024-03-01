import React from 'react';
import './eduCard.css';

const EduCard = ({year, school}) => {
  return (
    <div className='edu-card'>
        <p>{year}</p>
        <h3>{school}</h3>
    </div>
  )
}

export default EduCard