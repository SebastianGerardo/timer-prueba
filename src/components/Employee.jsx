import React from "react";

const Employee = ({ id, name, discount, salary, onDeleteEmployee }) => {
  const calculateDiscountedSalary = (salary, discount) => {
    return salary - (salary * discount) / 100;
  };

  const discountedSalary = calculateDiscountedSalary(salary, discount);

  return (
    <div className="employee">
      <h3>
        {name} ({discount}%)
      </h3>
      <p>Salario original: {salary} nuevos soles</p>
      <p>Salario con descuento: {discountedSalary} nuevos soles</p>
      <button onClick={() => onDeleteEmployee(id)}>Eliminar</button>
    </div>
  );
};

export default Employee;
