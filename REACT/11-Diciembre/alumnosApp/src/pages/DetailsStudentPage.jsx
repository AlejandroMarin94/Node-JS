import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteStudent, getStudentById, payCourse } from "../services/apifetch";

const DetailsStudentPage = () => {
  const params = useParams();
  const { idAlumno } = params;
  const navigate = useNavigate();

  const [student, setStudent] = useState(undefined);

  const backTolist = () => {
    navigate("/");
  };

  const loadStudents = () => {
    const aux = getStudentById(idAlumno);
    setStudent(aux);
  };

  const setPaid = ()=>{
    payCourse(idAlumno);
    setStudent({
      ...student,
      paid: true
    })

  }

  const delStudent = () =>{
    deleteStudent(idAlumno);
    backTolist()

  }

  const studentHandler = (propName,propValue) =>{

    setStudent{(
      ...student,
      [propName], propValue
    )}
  }

  useEffect(() => {
    loadStudents();
  }, []);
  return (
    <div>
      <h2>Información del alumno - {idAlumno}</h2>
      <hr />
      <div>
        <button onClick={backTolist}>Volver al listado</button>
        <button onClick={setPaid} disabled={student?.paid}>Marca como pagado</button>
        <button>Modificar</button>
        <button onClick={delStudent}>Eliminar</button>
      </div>
      <hr />
      <div>
        {!student ? (
          <p>Cargando datos del alumno...</p>
        ) : (
          <>
            <div>
              <span>Nombre</span>
              <span>{student.name}</span>
            </div>
            <div>
              <span>Apellidos</span>
              <span>{student.lastName}</span>
            </div>
            <div>
              <span>Email</span>
              <span>{student.email}</span>
            </div>
            <div>
              <span>Curso</span>
              <span>{student.boughtCourse}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsStudentPage;
