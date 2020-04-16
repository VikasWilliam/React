import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



class Employee extends Component{
  constructor(){
    super()
    this.state={
      Message:'Welcome Visitor'
    }
  }
  changeMessage(){
    this.setState({
      Message: "Thank6you for subscribing"
    })
  }
  
  render(){
     return <div>
       <h1>{this.state.Message}</h1>
       <button className="btn btn-primary" onClick={() =>this.changeMessage()}>Subscribe</button>
     </div>

  // return <div>
  //   <p><lable>Name:<b>{this.props.name}</b></lable></p>
  //   <p><lable>City:<b>{this.props.city}</b></lable></p>
  //   <p><lable>Country:<b>{this.props.Country}</b></lable></p>
  // </div>
}
}
// const element=<Employee name="Vikas" city="Dhanbad" Country="India"></Employee>
const element=<Employee></Employee>

ReactDOM.render(element,document.getElementById("root"));
