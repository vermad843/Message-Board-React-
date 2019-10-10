import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      message : 'Message Board',
    }
  }
  render() {
    const { message}  = this.state;
    return (
      <div>
      <h1 className = "title">{message}</h1>
        <form className ="form-style">
          <label  htmlFor = "name">Name</label>
          <input className = "u-full-width" type ="text" id = "name" name = "name" />  
          <label  htmlFor = "content">Content</label>
          <textarea className = "u-full-width" type ="text" id = "name" name = "name"></textarea> 
          <button className ="button-primary">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;