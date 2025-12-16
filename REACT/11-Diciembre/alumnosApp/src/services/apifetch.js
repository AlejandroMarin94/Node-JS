let studentList = [];

export const getAllStudents = () => {
  return studentList.map((student) => {
    return {
      _id: student._id,
      name: student.name,
      email: student.email,
      lastName: student.lastName,
      boughtCourse: student.boughtCourse,
      paid: student.paid,
    };
  });
};

export const createStudent = (newStudent) => {
  let maxId = studentList.map((s) => s._id).sort((a, b) => b - a)[0] ?? 0;

  const aux = {
    ...newStudent,
    paid: false,
    _id: maxId + 1,
  };
  studentList.push(aux);
};

export const getStudentById= (idStudent) =>{
  return studentList.find((st)=> st._id ===Number(idStudent))
}


export const payCourse = (idStudent) =>{
  const studentAux = studentList.find((st)=> st._id === Number(idStudent));
  studentAux.paid= true
  const listAuxStudents = studentList.filter(st=> st._id!== Number(idStudent))

  listAuxStudents.push(studentAux);
  studentList= listAuxStudents


}

export const deleteStudent =(idStudent)=>{
  const listAuxStudents =studentList.filter(
    (st)=> st._id !== Number(idStudent));
    studentList = listAuxStudents;

  
}