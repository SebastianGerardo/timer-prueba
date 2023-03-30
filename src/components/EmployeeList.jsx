import React from "react";
import Employee from "./Employee";

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <div className="employee-list">
      {employees.length > 0 ? (
        employees.map((employee) => (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.employeeName}
            discount={employee.discount}
            salary={employee.salary}
            onDeleteEmployee={onDeleteEmployee}
          />
        ))
      ) : (
        <p>No hay empleados registrados.</p>
      )}
    </div>
  );
};

export default EmployeeList;
