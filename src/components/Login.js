import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

import React from "react";

import firebase from "firebase";

import { auth } from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <div id="login-container">
          <h2>Welcome to WeMeet!</h2>
          <div className="login-button google">
            <GoogleOutlined /> Sign in with google
          </div>
          <br></br>
          <br></br>
          <div className="login-button facebook">
            <FacebookOutlined /> Sign in with facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
