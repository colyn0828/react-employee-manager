import React from "react";
import styled from "styled-components";

 
import {
  User,
  Add,
  RemoveEmployee
} from "css/icons";

const WidgetStyles = styled.aside`
  background: #ffffff;
  box-shadow: 0 0 3px 0px #c5c5c5;
  border-radius: 8px;
  padding: 2rem;
  color: #394050;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  svg {
    width: 1.5rem;
    margin-right: 0.25rem;
    color: #576075;
    vertical-align: middle;
  }
`;

const EmployeeStyles = styled.ul`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  gap: 0.25rem;
  li{
    margin-bottom: 1rem;
  }
  li p {
    font-size: 11px;
    font-weight: bold;
  }
  li:nth-child(3) {
   margin-right:auto;
   margin-left:3rem;
  }
  .content{
    margin-left: 2rem;
  }

  .avatar svg {
    width: 32px;
  }

  .controls {
    display:flex;
    justify-content:flex-end;
 
    svg {
      fill: #8e95a3;
      transform: scale(0.85);
    }
  }
`;

const Employee = ( {name, department} ) => {
 
  return (
    <EmployeeStyles>
     
      <li className="avatar">
        <User />
      </li>
      <li className="content">
        <p>full name</p> {name}
      </li>
      <li className="content">
        <p>department</p> {department}
      </li>
      <li className="controls">
        <RemoveEmployee />
        <Add/>
      </li>
      
    </EmployeeStyles>
  );
};

const EmployeeDisplayWidget = (props) => {
  if(props.employees.length === 0){
    return null;
  }
  return (
    <WidgetStyles>
      <header>
        <h2>Employees</h2>
      </header>
     
        {
          props.employees.map((employee)=>(<Employee key={employee.id} name={employee.name} department={employee.department}/>))
        }
      
    </WidgetStyles>
  );
};

export default EmployeeDisplayWidget;
