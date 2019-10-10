import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      message : 'Message Board',
      name : '',
      mew : '', 
      done : null ,
      mews : [{
        name : "Dk",
        mew  : "wow",
      }],
      loading : false ,
      done : false,
    };
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
    event.preventDefault();

    this.setState({
     loading : true,
     done : true
    });
   const mews = this.state.mews;
   console.log(mews);


    this.setState({
      name : '',
      mew : '',
     mews : [...this.state.mews, {
       name : this.state.name,
       mew : this.state.mew,
     }]
    });

  }



  render() {
    const { message,loading}  = this.state;
    return (
      <div>
      <h1 className = "title">{message}</h1>
      { !this.state.done && ( 
        <form onSubmit ={this.formSubmitted.bind(this)} className ="mew-form"  >
          <label  htmlFor = "name">Name</label>
          <input onChange = {this.nameChanged.bind(this)} className = "u-full-width" type ="text" id = "name" name = "name" />  
          <label  htmlFor = "content">Mew</label>
          <textarea  onChange = {this.mewChanged.bind(this)} className = "u-full-width" type ="text" id = "mew" name = "mew"></textarea> 
          <button type = "submit" className ="button-primary">Submit</button>
      </form> )}
      <div className = "loading">
      {loading ? <img  src = "Facebook-1s-200px.gif" alt = "loading" /> : '' }
      </div>
      </div>
    );
  }
}
export default App;