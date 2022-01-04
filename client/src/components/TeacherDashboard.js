import MusicContainer from "./MusicContainer";
import StudentInfoContainer from "./StudentInfoContainer";
// import StudentSignUp from "./StudentSignUp";
import { useState } from "react";
import styled from "styled-components";

function TeacherDashboard({ user }) {
  // const [userFullName, setUserFullName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [signup, setSignup] = useState(false);
  const [manage, setManage] = useState(false);
  const [music, setMusic] = useState(true);

  // function handleAddStudent() {
  //   setSignup(true);
  // }

  // function handleCancelAddStudent() {
  //   setSignup(false);
  // }

  function handleManage() {
    setManage(true);
    setMusic(false);
  }

  // function handleCancelManage() {
  //   setManage(false);
  //   setMusic(true);
  // }

  function handleMusic() {
    setMusic(true);
    setManage(false);
  }

  // function handleCancelMusic() {
  //   setMusic(false);
  //   setManage(true);
  // }

  return (
    <DashboardStyle>
      <DashboardHeader><h1>Welcome {user.name}</h1></DashboardHeader>

      <DashboardMenu>
      {music ? <ActiveButton onClick={handleMusic}>Music</ActiveButton> : <InactiveButton onClick={handleMusic}>Music</InactiveButton>}
      {manage ? <ActiveButton onClick={handleManage}>Classroom</ActiveButton> : <InactiveButton onClick={handleManage}>Classroom</InactiveButton>}
      {/* {signup ? <button onClick={handleCancelAddStudent}>Cancel</button> : <button onClick={handleAddStudent}>Add New Student</button>} */}
      </DashboardMenu>

      <DashboardBody>
      <div>
        {music ? <MusicContainer user={user}/> :null}
        {manage ? <StudentInfoContainer user={user} /> : null}
        {/* {signup ? (
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
          />) : null} */}
      </div>
      </DashboardBody>

    </DashboardStyle>
  );
}

export default TeacherDashboard;

const DashboardStyle = styled.div`
  display: grid;
  background-color: rgb(238, 237, 237);
  grid-template-columns: 15% 1fr;
  grid-template-rows: 100px 100vh;
  grid-template-areas:
  "options header"
  "options body";
  input {
    height: 50px;
    width: 200px;
    margin: 20px;
    font-size: 30px;
    border-radius: 5%;
    align-self: end;
  }
`;

const DashboardHeader = styled.div`
  grid-area: header;
  padding-left: 20px;
`;


const DashboardMenu = styled.div`
  grid-area: options;
  background-color: #73877b;
  display: grid;
  grid-template-rows: 200px 200px;
  align-items: end;
  justify-items: center;
  // button {
  //   background-color: #73877b;
  //   border: none;
  //   cursor: pointer;
  //   color: white;
  //   font-size: 1.5em;
  // }

  box-shadow: 2px 2px 8px #888888;
`;

const DashboardBody = styled.div`
  grid-area: body;
  display: grid;
  justify-items: center;
  width: 100%;
`;

const InactiveButton = styled.button`
  background-color: #73877b;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  width: 150px;
  height: 150px;
`

const ActiveButton = styled.button`
  background-color: rgb(255, 255, 255, 0.2);;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  width: 150px;
  height: 150px;
`
