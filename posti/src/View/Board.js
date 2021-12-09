import PostIt from "./PostIt";
import "./Style.css";
import React, { Component } from 'react';



class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        currentPostIts: [
          {header: "Title", message: "postit 1", date: "idag"},
          {header: "Title2", message: "postit 2", date: "igår"}
        ]
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitPostIt = this.submitPostIt.bind(this);
    }

    submitPostIt = (event) => {
      console.log("the submitted value is: " + this.state.value);
      var temp = this.state.currentPostIts.add({
        header: "titel",
        message: this.state.value,
        date: Date.now
      })
      console.log(temp);
      // this.setState({currentPostIts: temp});
      // console.log(this.state.currentPostIts);
        
      event.preventDefault();
        // this.setState.currentPostIts.add(data);
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
      console.log("the changed value is:" + event.target.value);
    }

    render(){
      return(
        <div className="Board">
          <form className = "addPost" onSubmit = {this.submitPostIt}><input type = "text" onChange={this.handleChange}></input><button type="submit">Submit</button></form>
            {this.state.currentPostIts.map((post, index) => {
              return <PostIt header = {post.header} message = {post.message} date = {post.date} key = {index}></PostIt>;
            })}
        </div>
      )}

  }
  
  export default Board;
  