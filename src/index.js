import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const el = React.createElement('div',null,'hello!');
ReactDOM.render(el,document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

