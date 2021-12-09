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
        currentPostIts: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitPostIt = this.submitPostIt.bind(this);
    }

    notifyServer = () => {
      client.send(JSON.stringify(this.state.currentPostIts));
    }
     submitPostIt = (event) => {
      var temp = {
        header: "titel",
        message: this.state.value,
        date: Date.now
      };
      this.setState({currentPostIts: this.state.currentPostIts.concat([temp])}, ()=> this.notifyServer());
      console.log(this.state.currentPostIts);
      event.preventDefault();
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
    componentWillMount(){
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data);
        this.setState({currentPostIts: this.state.currentPostIts.concat([dataFromServer])});
      }
    }
    render(){
      return(
        <div className="Board">
          <form className = "addPost" onSubmit = {this.submitPostIt}><input type = "text" onChange={this.handleChange}></input><button type="submit">Submit</button></form>
            {this.state.currentPostIts.map((post, index) => {
              return <PostIt header = {post.header} message = {post.message} date = {post.date} key = {index}/>;
            })}
        </div>
      )}

  }
  
  export default Board;
  