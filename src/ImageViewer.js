import React from 'react';
import ReactPanZoom from 'react-image-pan-zoom-rotate';


/* Default component model
  {
    "imageUrl": "https://images.unsplash.com/photo-1551091708-fda32ed3178c",  
    "username": {{ current_user.fullName }},
    "message": "Welcome to custom components!",
    "yesQuery": "yesQuery",
    "noQuery": "noQuery",
    "runQuery": "runQuery"
  }
*/

const ImageViewer = ({ triggerQuery, model, modelUpdate }) => {
  // const handleChange = (e) => {
  //   modelUpdate({
  //     greeting: e.target.value
  //   })
  // }
  return (
    <ReactPanZoom
      image={model.imageUrl}
      alt="Image alt text"
    />
  );
}

export default ImageViewer;