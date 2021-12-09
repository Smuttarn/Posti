import React from 'react';

function PostIt(props) {

  return (
    <div className="Postit">
      <header>{props.header}</header>
        <span>{props.message}</span>
        <footer><small>{props.date}</small></footer>
    </div>
  );
}

export default PostIt;
