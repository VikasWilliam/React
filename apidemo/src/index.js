import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class EmployeeComponent extends React.Component{
  constructor(props){
    super(props);

    this.state={employees:[]};
  }

  componentDidMount(){
    fetch("http://localhost:60724/api/employee").then(res=>res.json()).then(
      result=>{
        this.setState({employees:result});
      }
    )
  }

  render(){
    return(<div>
      <h2>Employee Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(emp=>(
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
              <td><button className="btn btn-primary">Click</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
    
  }
}

const element=<EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,document.getElementById("root"));