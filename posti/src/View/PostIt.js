import React from 'react';

function PostIt(props) {
  return (
    <div className="Postit" style = {{backgroundColor: props.selectedColor}}>
        <span>{props.message}</span>
        <footer><small>{props.date}</small></footer>
    </div>
  );
}

export default PostIt;
