import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import logo192 from './assets/logo192.png';

// import { Welcome, Greeting, PI } from './component/Welcome';
// import Component from './component/Welcome';
import Component, { Welcome, Greeting, PI } from './component/Welcome';
// import * as W from './component/Welcome';

function App1() {
  return (
    <div>
      <img src="https://picsum/100/100" />
      <Welcome />
      <Greeting />
      <Component />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
