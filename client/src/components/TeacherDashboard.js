import MusicContainer from "./MusicContainer";
import StudentInfoContainer from "./StudentInfoContainer";
import StudentSignUp from "./StudentSignUp";
import { useState } from "react";
import styled from "styled-components";

function TeacherDashboard({ user }) {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signup, setSignup] = useState(false);
  const [manage, setManage] = useState(false);
  const [music, setMusic] = useState(false);

  function handleAddStudent() {
    setSignup(true);
  }

  function handleCancelAddStudent() {
    setSignup(false);
  }

  function handleManage() {
    setManage(true);
  }

  function handleCancelManage() {
    setManage(false);
  }

  function handleMusic() {
    setMusic(true);
  }

  function handleCancelMusic() {
    setMusic(false);
  }

  return (
    <DashboardStyle>
      {music ? (
        <div>
          <MusicContainer />
          <button onClick={handleCancelMusic}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleMusic}>Make Music</button>
      )}

      {manage ? (
        <div>
          <StudentInfoContainer
            user={user}
            userFullName={userFullName}
            setUserFullName={setUserFullName}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            username={username}
            setUsername={setUsername}
          />
          <button onClick={handleCancelManage}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleManage}>Manage Students</button>
      )}

      {signup ? (
        <div>
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
          />
          <button onClick={handleCancelAddStudent}>Cancel</button>
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
