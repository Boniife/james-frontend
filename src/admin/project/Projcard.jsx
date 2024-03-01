import React from "react";
import "./projcard.css";

const Projcard = ({ title, description, link, img }) => {
  return (
    <div className="proj-card-container">
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="proj-card-container"
      >
        {img && <img src={img} alt={title} className="proj-card-proj-img" />}
        {title && <h3 className="proj-card-proj-title">{title}</h3>}
        {description && <p className="proj-card-proj-desc">{description}</p>}
      </a>
    </div>
  );
};

export default Projcard;
