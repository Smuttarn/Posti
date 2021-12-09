import React from 'react';

function PostIt(props) {
  return (
    <div className="Postit">
      <header>{props.header}</header>
        <body><span>{props.body}</span></body>
        <footer><small>{props.date}</small></footer>
    </div>
  );
}

export default PostIt;
