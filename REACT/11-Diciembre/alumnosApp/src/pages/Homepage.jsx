import React, { useEffect, useState } from "react";
import { getAllStudents } from "../services/apifetch";
import { useNavigate } from "react-router-dom";
import StudentComponents from "../components/StudentComponents";

const Homepage = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  

  const loadStudents = () => {
    const aux = getAllStudents();
    setStudents(aux);
    console.log(aux);
    
  };

  const goToCreateStudents = () => {
    navigate("/create");
  };

  useEffect(() => {
    loadStudents();
  }, []);
  return (
    <div>
      <h1> Lista de alumnos</h1>
      <hr />
      <button onClick={() => goToCreateStudents()}> Añadir nuevo alumno</button>
      <hr />
      {students.length === 0 ? (
        <p>No hay alumnos registrados</p>
      ) : (
        students.map((st, idx) => (
          <StudentComponents key={idx} student={st}/>
          
        ))
      )}
    </div>
  );
};

export default Homepage;
