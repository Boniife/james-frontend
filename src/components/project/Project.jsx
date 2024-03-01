import React, { useState, useEffect } from 'react';

import './project.css';

import Projcard from '../../admin/project/Projcard';

const Project = () => {
  const baseUrl = process.env.REACT_APP_PUBLIC_BASE_URL;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/post`);
      const data = await response.json();

      setData(data?.post);
    };
    fetchData();
  }, []);

  const card =
    data.length > 0 &&
    data.map((item) => {
      return (
        <div>
          <Projcard
            key={item._id}
            img={item.img}
            title={item.title}
            link={item.link}
            description={item.descripton}
          />
        </div>
      );
    });
  //console.log(data);

  return (
    // <section name="project" className="proj">
      <div className="project">

        <div className="project-head-text">
          <h3>projects</h3>
        </div>
      
          <div className="project-card"> {card} </div>

      </div>
    // </section>
  );
};

export default Project;
