import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Fun(employee){
  return <div>
    <p>
      <label>Employee Id:<b>{employee.id}</b></label>
    </p>
    <p>
      <label>Employee NAme:<b>{employee.Name}</b></label>
    </p>
    <p>
      <label>City:<b>{employee.city}</b></label>
    </p>
    <p>
      <label>Country:<b>{employee.country}</b></label>
    </p>
  </div>;
}

  const element=<Fun id="1010" Name="Vikas William" city="Swindon" country="UK"></Fun>

ReactDOM.render(element,document.getElementById("root"));
