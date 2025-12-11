import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/apifetch";

const ERROR_MESSAGE = "Este campo no puede estar vacio";

const CreateStudentPage = () => {
  const navigate = useNavigate();

  const [newStudent, setNewStudent] = useState({});
  const [errorMessageState, setErrorMessageState] = useState({});

  const studenHandler = (propName, propValue) => {
    setNewStudent({
      ...newStudent,
      [propName]: propValue,
    });
  };

  const checkFields = () => {
    let isError = false;
    if (!newStudent.name || newStudent.name === "") {
      setErrorMessageState({
        ...errorMessageState,
        name: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.lastName || newStudent.lastName === "") {
      setErrorMessageState({
        ...errorMessageState,
        lastName: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.email || newStudent.email === "") {
      setErrorMessageState({
        ...errorMessageState,
        email: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.boughtCourse || newStudent.boughtCourse === "") {
      setErrorMessageState({
        ...errorMessageState,
        boughtCourse: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.userName || newStudent.userName === "") {
      setErrorMessageState({
        ...errorMessageState,
        userName: ERROR_MESSAGE,
      });
      isError = true;
    }

    if (isError) {
      return false;
    } else {
      return true;
    }
  };
  const saveStudent = () => {
    const check = checkFields();
    if (check) {
      createStudent(newStudent);
      backToHome();
    }
  };
  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Crear nuevo alumno</h1>
      <div>
        <div>
          <span>
            Nombre:
            <span className="redText">*</span>
          </span>
          <input
            type="text"
            onChange={(e) => {
              studenHandler("name", e.target.value);
            }}
          />
          {errorMessageState.name && (<span className= "redText">{errorMessageState.name}</span>)}
        </div>
        <div>
          <span>
            Apellidos:
            <span className="redText">*</span>
          </span>
          <input
            type="text"
            onChange={(e) => {
              studenHandler("lastName", e.target.value);
            }}
          />
        </div>
        <div>
          <span>
            Correo electronico:
            <span className="redText">*</span>
          </span>
          <input
            type="text"
            onChange={(e) => {
              studenHandler("email", e.target.value);
            }}
          />
        </div>
        <div>
          <span>
            Curso que compra:
            <span className="redText">*</span>
          </span>
          <input
            type="text"
            onChange={(e) => {
              studenHandler("boughtCourse", e.target.value);
            }}
          />
        </div>
        <div>
          <span>
            Nombre Usuario:
            <span className="redText">*</span>
          </span>
          <input
            type="text"
            onChange={(e) => {
              studenHandler("userName", e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={saveStudent}>Guardar</button>
        <button onClick={backToHome}>Cancelar</button>
      </div>
    </div>
  );
};

export default CreateStudentPage;
