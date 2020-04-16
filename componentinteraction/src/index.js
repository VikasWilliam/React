import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class Employee extends React.Component{
 

  render(){
    return<div className="person">
      <h1>Employee Component</h1>
       <p>
         <label>Id: <b>{this.props.Id}</b></label>
       </p>
       <p>
         <label>Name:<b>{this.props.Name}</b></label>
       </p>
       <p>
         <label>Location :<b>{this.props.Location}</b></label>
       </p>
       <p>
         <label>Total Salary: <b>{this.props.Salary}</b></label>
       </p>
       <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}></Salary>
    </div>
    
  }
}

class Salary extends React.Component{
  constructor(props){
    super(props);
    this.state={
      basic:this.props.BasicSalary,
      hra:this.props.HRA,
      sa:this.props.SpecialAllowance
    };
  }
   

   render(){
     return <div className="person2">
       <h1>Salary details</h1>
       <p>
         <label><p>Basic Salary: <input type="text" className="form-group" defaultValue={this.props.BasicSalary}></input></p></label>
       </p>
       <p>
         <label><p>HRA: <input type="text" className="form-group" defaultValue={this.props.BasicSalary}></input></p></label>
       </p>
       <p>
         <label>Special allowance: <input type="text" className="form-group" defaultValue={this.props.BasicSalary}></input></label>
       </p>
       <p><button className="btn btn-primary">calculate</button></p>
     </div>
   }
}

const element= <Employee Id="101" Name="Vikas William" Location="Pune" Salary="45000" BasicSalary="30000" HRA="5000" SpecialAllowance="5000"></Employee>

ReactDOM.render(element,document.getElementById("root"));
