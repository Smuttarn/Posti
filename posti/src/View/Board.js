import PostIt from "./PostIt";
import "./Style.css";

function Board() {
    return (
      <div className="Board">
          <PostIt header="Hej" body="Då" xPos="" yPos="" date="09/12/21"></PostIt>
          <PostIt header="Title" body="Content" xPos="" yPos="" date="10/12/21"></PostIt>
          <PostIt header="Title" body="Content" xPos="" yPos="" date="11/12/21"></PostIt>
      </div>
    );
  }
  
  export default Board;
  