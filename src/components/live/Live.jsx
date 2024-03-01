import { React, useState } from "react";
import "./live.css";
import io from "socket.io-client";
import Msg from "./Msg";

import { useLocation } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

const Live = () => {
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="live">
      <div className="live-head">
        <h2> {location.state.id}</h2>
      </div>
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Name..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="fill in 'room 3000'"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button onClick={joinRoom}> Join A Room</button>
        </div>
      ) : (
        <Msg socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default Live;
