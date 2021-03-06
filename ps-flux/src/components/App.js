import React from "react";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";


function App(){
  /*  function getPage(){
    const route=window.location.pathname;
    if(route === "/courses") return <CoursesPage/>;
    if(route === "/about") return <AboutPage/>;
    return <HomePage/>;
   } */
   return(<div className="container-fluid">
     <Header/>
     <Switch>
     <Route path="/" exact component={HomePage} />
     <Route path="/courses" component={CoursesPage} />
     <Route path="/course" component={ManageCoursePage} />
     <Route path="/about" component={AboutPage} />
     <Redirect from="/about-page" to="about"></Redirect>
     <Route component={NotFoundPage} ></Route>
     </Switch>
    
   </div>
   );
}

export default App;