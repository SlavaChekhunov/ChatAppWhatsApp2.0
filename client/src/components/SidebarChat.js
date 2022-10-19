import { Avatar } from "@mui/material";
import React from "react";
import "../Styles/SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_container">
        <h2>Dance Room</h2>
        <p>This is realtime dance-room!</p>
      </div>
    </div>
  );
}

export default SidebarChat;
