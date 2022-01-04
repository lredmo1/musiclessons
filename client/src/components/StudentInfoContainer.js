import StudentCard from "./StudentCard";
import StudentSignUp from "./StudentSignUp";
import { useState, useEffect } from "react";
import styled from "styled-components";

function StudentContainer({ user }) {
  const [students, setStudents] = useState([]);
  const [signup, setSignup] = useState(false);
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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

  function handleAddStudent() {
    setSignup(true);
  }

  function handleCancelAddStudent() {
    setSignup(false);
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
    <>
    <StudentInfoContainerStyle>
    {signup ? null : <StyledButton onClick={handleAddStudent}>Add Student</StyledButton>}
    {signup ? (
          <StudentSignUp
            setSignup={setSignup}
            user={user}
            userFullName={userFullName}
            setUserFullName={setUserFullName}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
            setStudents={setStudents}
            handleCancelAddStudent={handleCancelAddStudent}
          />) : null}
          {classroomStudents}
    </StudentInfoContainerStyle>
    </>
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

const StyledButton = styled.button`
  background: linear-gradient(#ee4266, #b33651);
  padding: 5px 15px;
  margin: 5px;
  border: none;
  border-radius: 7%;
  color: white;
  font-size 1.05em;
  cursor: pointer;
  box-shadow: 2px 2px 8px #888888;
`;