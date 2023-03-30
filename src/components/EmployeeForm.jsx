import React, { useState } from "react";

const EmployeeForm = ({ onAddEmployee }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [discount, setDiscount] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!employeeName || !discount || !salary) {
      alert("Por favor ingrese un nombre de empleado, un descuento y un salario.");
      return;
    }
    onAddEmployee({ employeeName, discount, salary });
    setEmployeeName("");
    setDiscount("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="employeeName">Nombre del empleado</label>
      <input
        type="text"
        id="employeeName"
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
        placeholder="Ingrese el nombre del empleado"
      />
      <label htmlFor="discount">Descuento</label>
      <input
        type="number"
        id="discount"
        value={discount}
        onChange={(event) => setDiscount(event.target.value)}
        placeholder="Ingrese el descuento"
      />
      <label htmlFor="salary">Salario</label>
      <input
        type="number"
        id="salary"
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
        placeholder="Ingrese el salario"
      />
      <button type="submit">Agregar empleado</button>
    </form>
  );
};

export default EmployeeForm;
