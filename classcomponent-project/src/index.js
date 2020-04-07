import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Employee  extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props);
  }
  render(){
    return <div>
      <h2>Employee Details</h2>
      <p>
        <label>Name:<b>{this.props.Name}</b></label>
      </p>
      <p>
        <lable>City:<b>{this.props.city}</b></lable>
      </p>
      <Details designation={this.props.designation}></Details>
    </div>
  }
}

class Details extends React.Component{
  render(){
    return <div>
      <p>Designation:<b>{this.props.designation}</b></p>
    </div>
  }
}

const Element=<Employee Name="Vikas William" city="Dhanbad" designation="Software Engineer"></Employee>

ReactDOM.render(Element,document.getElementById("root"));