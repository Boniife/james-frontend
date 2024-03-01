import React from "react";
import "./education.css";
import EduCard from "./EduCard";
import { Edu } from "../constants/constant";

const Education = () => {
  return (
    <section name="education" className="edu">

        <div className="edu-head-text">
          <h3 className="edu-head">Education</h3>
        </div>

        <div className="edu-uni">
          {Edu.map((edu) => (
            <EduCard
              key={edu.id}
              year={edu.year}
              school={edu.school}
            />
          ))}
        </div>
    </section>
  );
};

export default Education;
