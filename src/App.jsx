import React, { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Clock from "./components/Clock";




function App() {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = ({ employeeName, discount, salary }) => {
    const newEmployee = {
      id: new Date().getTime().toString(),
      employeeName,
      discount,
      salary
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App"> 
      <h1 className="title">Calculando Mis Descuentos</h1>
      <Clock/>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployee} />
      <footer>Desarrollado by <span><a href="https://devsolutionsa.com/" > Devsolutionsa.com</a></span> </footer>
    </div>
  );
}

export default App;
