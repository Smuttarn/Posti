import PostIt from "./PostIt";
import "./Style.css";
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

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

    notifyServer = () => {
      client.send(JSON.stringify(this.state.currentPostIts))
    }
    submitPostIt = (event) => {
      var temp = {
        header: "titel",
        message: this.state.value,
        date: Date.now
      };
      this.setState({currentPostIts: this.state.currentPostIts.concat([temp])});
      this.notifyServer();
      event.preventDefault();
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
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
  