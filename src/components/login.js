// src/components/Login.js
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React from "react";

function Login() {
  const onSuccess = (credentialResponse) => {
    console.log("Login Success !! current user: ", credentialResponse);
  };

  return (
    <div id="signInButton">
      <GoogleLogin onSuccess={onSuccess} onError={() => console.log("Failed To Login Bro!!")} />
    </div>
  );
}

export default Login;
