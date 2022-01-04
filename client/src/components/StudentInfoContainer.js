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
    <StudentInfoContainerStyle>
      <StudentCardsContainer>{classroomStudents}</StudentCardsContainer>
      <StudentDetailsContainer>test</StudentDetailsContainer>
    </StudentInfoContainerStyle>
  );
}

export default StudentContainer;

const StudentInfoContainerStyle = styled.div`
  background-color: white;
  grid-template-columns: 500px 500px;
  display: grid;
  justify-items: center;
  padding: 40px;
  border-radius: 3%;
  box-shadow: 2px 2px 8px #888888;
`;

const StudentCardsContainer = styled.div`
  p {
    font-weight: 700;
  }
`;

const StudentDetailsContainer = styled.div`
  
`;