import React from 'react';

function PostIt(props) {
  return (
    <div className="Postit">
      <header>{props.header}</header>
      <body>{props.body}</body>
    </div>
  );
}

export default PostIt;
