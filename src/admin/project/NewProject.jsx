import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import "./NewProject.css";
import { useNavigate } from "react-router-dom";

const initalState = {
  title: "",
  descripton: "",
  link: "",
  img: "",
};

const NewProject = () => {
  const baseUrl = process.env.REACT_APP_PUBLIC_BASE_URL;

  const history = useNavigate();
  const [proj, setProj] = useState(initalState);
  // const [imgFile, setImgFile] = useState("");

  function projClick(event) {
    const { name, value } = event.target;

    setProj((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  async function formSubmit(event) {
    event.preventDefault();

    await axios
      .post(`${baseUrl}/post/`, proj)
      .then((res) => {
        if (res.status === 201) {
          history("/");
        }
      })
      .catch((err) => console.log(err));
    setProj(initalState);
  }

  return (
    <div className="new">
      <form className="newproject" onSubmit={formSubmit}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setProj({ ...proj, img: base64 })}
        />

        <input
          placeholder="Title"
          type="text"
          className="input"
          value={proj.title}
          onChange={projClick}
          name="title"
        />
        <input
          placeholder="descripton"
          type="text"
          className="input"
          value={proj.descripton}
          onChange={projClick}
          name="descripton"
        />
        <input
          placeholder="link"
          type="text"
          className="input"
          value={proj.link}
          onChange={projClick}
          name="link"
        />
        <input type="submit" className="submit" />
      </form>
      Image should not be more than 80kb
    </div>
  );
};

export default NewProject;
