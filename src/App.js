import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
   this.state = {
     title : 'Message Board' ,
    }
  }
  
  formSubmitted(event) {
    event.preventDefault();
  console.log("hello world");
  
  }



  render() {
    const {title} =this.state;
    return (
    <div className = "App">
      <h1 className= "title">{title}</h1>
       <form   className ="mew-form" onSubmit = {this.formSubmitted}>
      <h6> <label  htmlFor = "name">Name</label></h6>
       <input className = "u-full-width" type ="text" id = "name" name = "name" />  
    <h6><label  htmlFor = "content">Mew</label></h6>
       <textarea className = "u-full-width" type ="text" id = "content" name = "content"></textarea> 
       <button type = "submit" className ="button-primary">Submit your mew</button>
     </form>
   </div>
    );
  }
}

export default App;