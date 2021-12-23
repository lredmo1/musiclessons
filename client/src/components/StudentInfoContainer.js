import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";

function StudentContainer({ user }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/users")
    .then((resp) => resp.json())
    .then(setStudents)
}, [])

function handleUpdateStudent(updatedStudent) {
const updatedStudents = []
}

  function handleDeleteStudent(deletedStudent) {
  const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
  setStudents(updatedStudents);
  }

  let classroomStudents = students.map((student) => (
    <StudentCard
      key={student.id}
      student={student}
      handleDeleteStudent={handleDeleteStudent}
    />
  ));

  return <>{classroomStudents}</>;
}

export default StudentContainer;
