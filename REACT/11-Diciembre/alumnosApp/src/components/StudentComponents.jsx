import React from "react";
import { useNavigate } from "react-router-dom";

const StudentComponents = (props) => {
  const { student} = props;
  const navigate = useNavigate();

  const goToDetails = ()=>{
    navigate(`/details/${student._id}`)

  }

  return (
    <div>
      <span>{student._id}</span>
      <span>{student.name}</span>
      <span>{student.lastName}</span>
      <span>{student.boughtCourse}</span>
      <span>{student.paid ? "PAGADO" : "PENDIENTE DE PAGO"}</span>
      <button onClick={goToDetails}>Ver detalles</button>
    </div>
  );
};

export default StudentComponents;
