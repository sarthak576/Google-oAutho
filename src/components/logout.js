// src/components/Logout.js
import { googleLogout } from "@react-oauth/google";
import React from "react";

function Logout() {
  const onLogout = () => {
    googleLogout();
    console.log("Logout Success !! @GuptaJi ");
  };

  return (
    <div id="signOutButton">
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Logout;
