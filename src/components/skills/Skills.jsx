import React from 'react';
import './skills.css';
import { skills } from '../constants/constant';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section name="skills" className="skills">

        <div className="skills-head">
          <h3>Skills </h3>
        </div>
       
        <div className="skills-text-head">
          {skills.map((skill) => (
            <SkillCard 
              key={skill.id}
              skil={skill.skil}
            />
          ))}

        </div>

    </section>
  );
};

export default Skills;
