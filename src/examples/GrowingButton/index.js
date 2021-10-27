import React from 'react';
import ReactDOM from 'react-dom';
import GrowingButton from "./Button";
import './styles.css';

ReactDOM.render(
  <GrowingButton />, 
  document.body.appendChild(document.createElement('div'))
);