import React from 'react';
import './skillCard.css';

const SkillCard = ({skil}) => {
  return (
    <div className='skill-card'>

      <div className='skill-wrapper'>
        <h2>{skil}</h2>
      </div>
    </div>
  )
}

export default SkillCard