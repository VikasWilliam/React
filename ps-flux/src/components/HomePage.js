import React from 'react';
import {Link} from 'react-router-dom';


function Homepage(){
    return(
    <div className="jumbotron">
      <h1>Pluralsight Adminstration</h1>
      <p>React, Flux and React Router for ultra-responsive web apps.</p>
    {/* <a href="/about">About</a>  */}
    <Link to="About" className="btn btn-primary">About</Link>
    </div>
    );
}

export default Homepage;    