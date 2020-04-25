import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';



class App extends React.Component{
  render(){
    return <div>
      <h1>App Component</h1>
      <p><Employee></Employee></p>
    </div>
  }
}

class Employee extends React.Component{
  render(){
    return <div>
     <h1>Salary Component</h1>
    </div>
  }
}

const element= <App></App>;

ReactDOM.render(element,document.getElementById("root"));
