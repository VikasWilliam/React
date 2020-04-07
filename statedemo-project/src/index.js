import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Employee extends React.Component{
  state={counter:0};
  
  addEmployee=()=>{
    this.setState({counter:this.state.counter+1})
    
    //alert("button is clicked");
    //alert('The button has been clicked '+ this.counter+' times')
  }

  render(){
    return <div>
      <h1>Welcome to Employee Component</h1>
      <p>Name</p>
      <input type="text" className="form-group" id="name"></input>
      
      <p></p>
      <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button><br></br>
      <p><label>Add Employee buttone is clicked: <b>{this.state.counter}</b> times</label></p>
    </div>
  }
}
const element=<Employee></Employee>
ReactDOM.render(element,document.getElementById("root"));