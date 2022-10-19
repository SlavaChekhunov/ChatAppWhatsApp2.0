import "../Styles/App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useState } from "react";
import Login from "./Login";

function App() {

  const [user, setUser] = useState(false);


  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="app_main">
          <Sidebar />
          <Chat />
        </div>
      )}
    </div>
  );
}

export default App;
