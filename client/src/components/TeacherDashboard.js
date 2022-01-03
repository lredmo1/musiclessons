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
      <DashboardHeader><h1>Welcome {user.name}</h1></DashboardHeader>

      <DashboardMenu>
      {music ? <button onClick={handleCancelMusic}>Cancel</button> : <button onClick={handleMusic}>Make Music</button>}
      {manage ? <button onClick={handleCancelManage}>Cancel</button> : <button onClick={handleManage}>Manage Students</button>}
      {signup ? <button onClick={handleCancelAddStudent}>Cancel</button> : <button onClick={handleAddStudent}>Add New Student</button>}
      </DashboardMenu>

      <DashboardBody>
      <div>
        {music ? <MusicContainer user={user}/> :null}
        {manage ? <StudentInfoContainer user={user} /> : null}
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
          />) : null}
      </div>
      </DashboardBody>

    </DashboardStyle>
  );
}

export default TeacherDashboard;

const DashboardStyle = styled.div`
  display: grid;
  // justify-content: center;
  grid-template-columns: 10% 1fr;
  grid-template-rows: 100px 100vh;
  grid-template-areas:
  "options header"
  "options body";
  input {
    height: 50px;
    width: 200px;
    margin: 20px;
    font-size: 30px;
  }
  background-color: grey;
`;

const DashboardHeader = styled.div`
  grid-area: header;
  padding-left: 20px;
`;

const DashboardMenu = styled.div`
  grid-area: options;
  border: 2px solid black;
  background-color: rgb(208, 252, 208);
  button {
    background-color: rgb(208, 252, 208);
    border: none;
    cursor: pointer;
  }
`;

const DashboardBody = styled.div`
  grid-area: body;
  background-color: white;
  }
`;