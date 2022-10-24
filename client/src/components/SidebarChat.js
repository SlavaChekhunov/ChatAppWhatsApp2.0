import { Avatar } from "@mui/material";
import React from "react";
import "../Styles/SidebarChat.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function SidebarChat() {
const [user] = useAuthState(auth);

  return (
    <>
    <div className="sidebarChat">
      <Avatar src={user?.photoURL || ""} />
      <div className="sidebarChat_container">
        <h2>{user.displayName || 'Guest User'}</h2>
      </div>
    </div>
    <div className="sidebarChat">
      <Avatar src={""} />
      <div className="sidebarChat_container">
        <h2>Guest User</h2>
      </div>
    </div>
    </>
  );
}

export default SidebarChat;
