// src/App.js
import React from "react";
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId = "6869876952-9ckskksajugc49bivcb2l3mlbf1v8bhu.apps.googleusercontent.com";
// client Secret = "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"
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <h2>Google Login with OAuth</h2>
<Login/>
<Logout/>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
