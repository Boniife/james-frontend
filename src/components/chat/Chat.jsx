import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./chat.css";

const initalState = {
  email: "",
  password: "",
};

const Chat = () => {
  const history = useNavigate();

  const [login, setLogin] = useState(initalState);
  const [reg, setReg] = useState(initalState);

  function loginClick(event) {
    const { name, value } = event.target;
    setLogin((prevReg) => ({
      ...prevReg,
      [name]: value,
    }));
  }

  function regClick(event) {
    const { name, value } = event.target;
    setReg((prevReg) => ({
      ...prevReg,
      [name]: value,
    }));
  }

  async function loginSubmit(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:3001/users/signIn", login)
      .then((res) => {
        if (res.data.message === "signin sucessfull") {
          history("/live", { state: { id: login.email } });
        }
      })
      .catch((err) => alert(err));
    setLogin(initalState);
  }

  async function regSubmit(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:3001/users/signUp", reg)
      .then((result) => alert(result.data.message))
      .catch((err) => alert("User already exist"));
    setReg(initalState);
  }

  return (
    <section name="chat" className="chat">
      <div className="chat-main">
        <div className="chat-head-text">
          <h3 className="chat-head">Chat us</h3>
        </div>
        <div className="chat-head-p">
          <p className="chat-head-p-text"> Create An Account To Contact Us</p>
        </div>
        <form onSubmit={regSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={reg.email}
            onChange={regClick}
            required
            className="chat-create"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={reg.password}
            onChange={regClick}
            required
            className="chat-create"
          />
          <div>
            <button disabled={!login.email || !login.password}>Sign up</button>
          </div>
        </form>

        <div className="chat-head-p">
          <p className="chat-head-p-text">
            Login If You Already Have An Account
          </p>
        </div>

        <form onSubmit={loginSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={login.email}
            onChange={loginClick}
            required
            className="chat-create"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={login.password}
            onChange={loginClick}
            required
            className="chat-create"
          />
          <div>
            <button disabled={!login.email || !login.password}>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Chat;
