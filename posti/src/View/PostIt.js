import React from 'react';

function PostIt(props) {
  console.log("color from postIt: " + props.selectedColor);
  return (
    <div className="Postit" style = {{backgroundColor: props.selectedColor}}>
        <span>{props.message}</span>
        <footer><small>{props.date}</small></footer>
    </div>
  );
}

export default PostIt;
