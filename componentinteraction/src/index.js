import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class Employee extends React.Component{
   constructor(props){
     super(props);
     this.state={
       updatedSalary:null
     }
   }

   getUpdatedSalary=(salary)=>{
     console.log("updated Salary");
     this.setState({updatedSalary:salary})
   }
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
       <p>
         <label>Updated total Salary:<b>{this.state.updatedSalary}</b></label>
       </p>
       <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
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
   
updateSalary=()=>{
  console.log("touched");
 let salary=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.spc.value);
 console.log(salary);

 this.props.onSalaryChanged(salary)
}
   render(){
     return <div className="person2">
       <h1>Salary details</h1>
       
         <table>
           <tbody>
           <tr>
             <td>Basic Salary:</td>
             <td><input type="text" className="form-group" ref="basic" defaultValue={this.props.BasicSalary}></input></td>
           </tr> 
           <tr>
             <td>HRA:</td>
             <td><input type="text" className="form-group" ref="hra" defaultValue={this.props.HRA}></input></td>
           </tr>
           <tr>
             <td>Special allowance: </td>
             <td><input type="text" className="form-group" ref="spc" defaultValue={this.props.SpecialAllowance}></input></td>
           </tr>
           <tr>
             <td><button className="btn btn-primary"  onClick={this.updateSalary}>Update</button></td>
           </tr>
           </tbody>
         </table>
         
    </div>
   }
}

const element= <Employee Id="101" Name="Vikas William" Location="Pune" Salary="45000" BasicSalary="30000" HRA="4000" SpecialAllowance="5000"></Employee>

ReactDOM.render(element,document.getElementById("root"));
