import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './projects.css';
import '../../components/project/project.css';

import Projcard from './Projcard';
// import { Cards } from "../constants/constant";

const Projects = () => {
  const [data, setData] = useState([]);

  // const info = await axios
  //   .get("http://localhost:3001/post")
  //   .then((res) => res.data.post)
  //   .catch((err) => console.log(err));
  // setData(info);

  const deleteProj = async (_id, title) => {
    if (window.confirm(`Delete ${title}`)) {
      const response = await axios.delete(`http://localhost:3001/post/${_id}`);
      console.log(response);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/post');
      const data = await response.json();

      setData(data?.post);
    };
    fetchData();
  }, []);
  //console.log(data);

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
          <FaTrash onClick={() => deleteProj(item._id, item.title)} />
          {/* <FaBars onClick={() => updateProj()} /> */}
        </div>
      );
    });
  //console.log(data);

  return (
    <section name="project" className="project">

        <div className="project-head-text">
          <h3>projects</h3>
        </div>
        
          <div className="project-card"> {card} </div>

        <Link to={'/new-proj'} className="proj-button">
          <button className="proj-new">New Project</button>
        </Link>
    </section>
  );
};

export default Projects;
