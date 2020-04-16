import React from 'react';
import ReactDOM from 'react-dom';


class Display extends React.Component{
  render(){
    return<div>
      <h1>Hello Vikas</h1>
    </div>
  }
}

const element=<Display></Display>;

ReactDOM.render(element,document.getElementById("root"));