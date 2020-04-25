import React , {useState, useEffect } from 'react';
import {getCourses} from "../api/courseApi";
import CourseList from "./CourseList";

function CoursePage(){
    const [courses,setcourses]= useState([]);

    useEffect( () => {
     getCourses().then(_courses=>setcourses(_courses));
    },[]);
    

       return <>
        <h2>Courses</h2>

           <CourseList courses={courses} />
           </>
    }



export default CoursePage;