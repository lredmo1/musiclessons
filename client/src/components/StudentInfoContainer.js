import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";
import styled from "styled-components";

function StudentContainer({ user }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then(setStudents);
  }, []);

  function handleDeleteStudent(deletedStudent) {
    const updatedStudents = students.filter(
      (student) => student.id !== deletedStudent.id
    );
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

  return (
    <StudentInfoContainerStyle>{classroomStudents}</StudentInfoContainerStyle>
  );
}

export default StudentContainer;

const StudentInfoContainerStyle = styled.div`
  background-color: white;
  display: grid;
  justify-items: start;
  padding: 40px;
  border-radius: 3%;
  box-shadow: 2px 2px 8px #888888;
  width: 70vw;
`;

