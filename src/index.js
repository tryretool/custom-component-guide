import React from 'react';
import ReactDOM from 'react-dom';
// import ExampleComponent from "./ExampleComponent";
import ImageViewer from "./ImageViewer";

// const RetoolConnectedComponent = Retool.connectReactComponent(ExampleComponent);
const RetoolConnectedComponent = Retool.connectReactComponent(ImageViewer);
document.body.setAttribute('style', 'margin: 0;') 
ReactDOM.render(
  <RetoolConnectedComponent/>, 
  document.body.appendChild(document.createElement('div')) 
);