import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import React from "react";
import "firebase/app";
import firebase from "firebase/app";
import { auth } from "firebase/app";


function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <div id="login-container">
          <h2>Welcome to WeMeet!</h2>
          <div
            className="login-button google"
            onClick={async () => await auth.signInWithRedirect(
              new firebase.auth.GoogleAuthProvider()
            )}
          >
            <GoogleOutlined /> Sign in with google
          </div>
          <br></br>
          <br></br>
          <div className="login-button facebook" onClick={async () => await auth.signInWithRedirect(
            new firebase.auth.FacebookAuthProvider()
          )}>
            <FacebookOutlined /> Sign in with facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
