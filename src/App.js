import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
   this.state = {
     title : 'Signup ' ,
    }
  }
  render() {
    const {title} = this.state;
    return (
      <div className = "App">
      <h1 className= "title">{title}</h1>
       <form  className ="signup-form">
      <h6> <label  htmlFor = "username">Username</label></h6>
       <input className = "u-full-width" type ="text" id = "username" name = "username" />  
       <h6> <label  htmlFor = "password">Password</label></h6>
       <input className = "u-full-width" type ="text" id = "password" name = "password" /> 
       <h6> <label  htmlFor = "confirmpassword">confirmPassword</label></h6>
       <input className = "u-full-width" type ="text" id = "confirmpassword" name = "confirmpassword" /> 
       <button type = "submit" className ="button-primary">Sign Up</button>
     </form>
   </div>
    );
  }
}

export default App;