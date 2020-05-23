import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
    employee:{
       id:' ',
       Name:'',
       Location:'',
       Salary:''
    }
      
    
    };
  }
  changeHandler=e=>{
    const name=e.target.name;
    const value=e.target.value;
    this.setState({employee:{
    ...this.state.employee,
    [name]:value
    }
    })
  }
  onCreateEmployee=()=>{
    console.log(this.state.employee);
  }
  render(){
    return(
      <div align="center">
        <h2>Employee Form...</h2>
        <form className="person" >
         <p>
            <label>Employee ID: <input type="text" name="id" value={this.state.employee.id} onChange={this.changeHandler} ></input></label>
          </p>
          <p>
            <label>Name: <input type="text"  name="Name" value={this.state.Name} onChange={this.changeHandler} ></input></label>
          </p>
          <p>
            <label>Location: <input type="text" name="Location" value={this.state.Location} onChange={this.changeHandler} ></input></label>
          </p>

          <p>
            <label>Salary: <input type="text" name="Salary" value={this.state.Salary} onChange={this.changeHandler} ></input></label>
          </p>
          
        </form>
         <p><button onClick={this.onCreateEmployee} className="btn btn-primary">Submit</button></p>
      </div>
    )
  }
}

const element=<Employee></Employee>

ReactDOM.render(element,document.getElementById("root"));