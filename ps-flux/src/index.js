import "bootstrap/dist/css/bootstrap.min.css";
import React from   'react';
import  {render} from "react-dom";
import  App from "./components/App";
import AboutPage from "./components/AboutPage";
import { BrowserRouter as Router}  from "react-router-dom";
import NotFoundPage from './components/common/NotFoundPage';


render(
<Router>
    <App/>
</Router>,
 document.getElementById("root"));