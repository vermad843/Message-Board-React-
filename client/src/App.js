import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      message : 'Message Board',
      name : '',
      mew : '', 
      mews : [{
        name : "Dk",
        mew  : "wow",
      }]
    }
  }


  nameChanged(event) {
    this.setState({
      name : event.target.value
    })
  }

  mewChanged(event) {
    this.setState({
      name : event.target.value
    })
  }


  
  formSubmitted(event) {
    let mews = this.state.mews;
    console.log(mews);
    event.preventDefault();
    this.setState({
     mews : [...this.state.mews, {
       name : this.state.name,
       mew : this.state.mew,
     }]
    });

  }





  render() {
    const { message}  = this.state;
    return (
      <div>
      <h1 className = "title">{message}</h1>
        <form onSubmit ={this.formSubmitted.bind(this)} className ="form-style">
          <label  htmlFor = "name">Name</label>
          <input onChange = {this.nameChanged.bind(this)} className = "u-full-width" type ="text" id = "name" name = "name" />  
          <label  htmlFor = "content">Mew</label>
          <textarea  onChange = {this.mewChanged.bind(this)} className = "u-full-width" type ="text" id = "mew" name = "mew"></textarea> 
          <button type = "submit" className ="button-primary">Submit</button>
      </form>
      </div>
    );
  }
}
export default App;