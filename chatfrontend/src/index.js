import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// import App from "./App";
import rootReducers from "./store/reducer/index";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

