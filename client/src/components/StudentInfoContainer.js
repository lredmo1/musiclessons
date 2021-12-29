import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";

function StudentContainer({ user }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/users")
    .then((resp) => resp.json())
    .then(setStudents)
}, [students])


  function handleDeleteStudent(deletedStudent) {
  const updatedStudents = students.filter((student) => student.id !== deletedStudent.id);
  setStudents(updatedStudents);
  }

  let classroomStudents = students.map((student) => (
    <StudentCard
      key={student.id}
      student={student}
      handleDeleteStudent={handleDeleteStudent}
      setStudents={setStudents}
      students={students}
    />
  ));

  return <>{classroomStudents}</>;
}

export default StudentContainer;
