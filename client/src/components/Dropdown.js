import { Button } from '@mui/material';
import React from 'react'
import '../Styles/Dropdown.css'
import { useNavigate } from "react-router-dom";

function Dropdown({ room, setRoom, socket, setUser }) {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }

    navigate('/main', {replace: true});
  };

  return (
    <div className="joinChatContainer">
      <h3>Whatsapp Rooms</h3>

      <select className="input" onChange={(e) => setRoom(e.target.value)}>
        <option>-- Select Room --</option>
        <option value="general">General</option>
        <option value="developers">Developers</option>
        <option value="cat">Cat Lovers</option>
        <option value="dog">Dog Lovers</option>
      </select>

      <Button onClick={joinRoom}>Join Room</Button>
    </div>
  );
}

export default Dropdown