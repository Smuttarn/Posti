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
        currentPostIts: [],
        selectedColor: "#faf393"
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitPostIt = this.submitPostIt.bind(this);
    }

    notifyServer = () => {
      client.send(JSON.stringify(this.state.currentPostIts));
    }
     submitPostIt = (event) => {
      var temp = {
        message: this.state.value,
        date: new Date().toLocaleString(),
        selectedColor: this.state.selectedColor,
      };
      this.setState({currentPostIts: this.state.currentPostIts.concat([temp])}, ()=> this.notifyServer());
      this.setState({value: ""});
      event.preventDefault();
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
    componentWillMount(){
      client.onopen = () => {
      };
      client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data);
        this.setState({currentPostIts: dataFromServer});
      }
    }
    render(){
      return(
        <React.Fragment>
        <form className = "addPost" onSubmit = {this.submitPostIt}>
          <label>New Post</label>
          <textarea value={this.state.value} className = "formInput" type = "text" maxLength = "120" onChange={this.handleChange}></textarea>
          <div className = "colorPicker">
            <div className = "color" id = "yellow" onClick = {() => this.setState({selectedColor: '#faf393'})}></div>
            <div className = "color" id = "green" onClick = {() => this.setState({selectedColor: '#9eff78'})}></div>
            <div className = "color" id = "red" onClick = {() => this.setState({selectedColor: '#fc5858'})}></div>
            <div className = "color" id = "blue" onClick = {() => this.setState({selectedColor: '#7aa7ff'})}></div>
          </div>
         
          <button type="submit">Submit</button>
        </form>
        <div className="Board">
            {this.state.currentPostIts.map((post, index) => {
              return <PostIt message = {post.message} date = {post.date} key = {index} selectedColor = {post.selectedColor}></PostIt>;
            })}
        </div>
        </React.Fragment>
      )}

  }
  
  export default Board;
  