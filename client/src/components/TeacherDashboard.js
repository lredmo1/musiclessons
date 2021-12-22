import MusicContainer from "./MusicContainer";
import StudentInfoContainer from "./StudentInfoContainer";
import StudentSignUp from "./StudentSignUp";
import { useState, useEffect } from "react";
import styled from "styled-components";

function TeacherDashboard({ user }) {
  const [signup, setSignup] = useState(false);

  function handleAddStudent() {
    setSignup(true);
  }

  function handleCancelAddStudent() {
    setSignup(false);
  }

  return (
    <DashboardStyle>
      <div>Make Music</div>
      <MusicContainer />
      <button onClick={handleAddStudent}>Manage Students</button>
      <StudentInfoContainer user={user} />
      {signup ? (
        <div>
          <button onClick={handleCancelAddStudent}>Cancel</button>
          <StudentSignUp setSignup={setSignup} user={user}/>
        </div>
      ) : (
        <button onClick={handleAddStudent}>Add New Student</button>
      )}
    </DashboardStyle>
  );
}

export default TeacherDashboard;

const DashboardStyle = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  input {
    height: 50px;
    width: 200px;
    margin: 20px;
    font-size: 30px;
  }
`;
