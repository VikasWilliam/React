import React from 'react';
import ReactDOM from 'react-dom';

function Displyfun(props){
  return <div style={{border:"3px solid red"}}>
   <p>
     <lable>Employee Id:<b>{props.data.Id}</b></lable>
   </p>
   <p>
     <lable>Employee Name:<b>{props.data.Name}</b></lable>
   </p>
   <p>
     <lable>Employee Address:<b>{props.data.Address}</b></lable>
   </p>
   <p>
     <lable>Employee Profile:<b>{props.data.Sector}</b></lable>
   </p>
</div>
}

function Empfun(props){
  const empList=props.employeeList;

   const listElements=empList.map((emp)=>
          <Displyfun key={emp.Id} data={emp}></Displyfun>);
   
          return(
            <div>
              {listElements}
            </div>
          );
   
   

}
const emparray=[
  {Id:101,Name:"Vikas William", Address:"UK",Sector:"banking"},
  {Id:101,Name:"Vikas ", Address:"UK",Sector:"banking"},
  {Id:101,Name:"Saurabh ", Address:"Pune",Sector:"banking"},
  {Id:101,Name:"Abhijeet", Address:"Banglore",Sector:"banking"}
];

const element= <Empfun employeeList={emparray}></Empfun>

ReactDOM.render(element,document.getElementById("root"));