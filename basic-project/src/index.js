import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { render } from '@testing-library/react';


const element= (
 
  <div >
    <h1>Submission from</h1>
    <table align="center">
      <tr>
        <td>First Name:</td>
        <td><input type="text" className="form-group"></input></td>
      </tr>
      <tr>
        <td>Last Name:</td>
        <td><input type="text" className="Form-group"></input></td>
      </tr>
      <tr>
       <td><button className="btn btn-primary">Submit</button></td>
      </tr>
    </table>
  </div>
);

ReactDOM.render(element,document.getElementById("root"));

