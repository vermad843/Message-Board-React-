import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
   this.state = {
     title : 'Login ' ,
    }
  }
  render() {
    const {title} = this.state;
    return (
      <div className = "App">
      <h1 className= "title">{title}</h1>
       <form  className ="login-form">
      <h6> <label  htmlFor = "username">Username</label></h6>
       <input className = "u-full-width" type ="text" id = "username" name = "username" />  
       <h6> <label  htmlFor = "password">Password</label></h6>
       <input className = "u-full-width" type ="text" id = "password" name = "password" /> 
     <h6> <button type = "submit" className ="button-primary">Login</button></h6> 
     </form>
   </div>
    );
  }
}

export default App;