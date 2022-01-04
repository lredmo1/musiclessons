import MusicContainer from "./MusicContainer";
import StudentInfoContainer from "./StudentInfoContainer";
import studenticon from "../studenticon.png"
import musicicon from "../musicicon.png"
import Navbar from "./Navbar"


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
      {music ? <ActiveButton onClick={handleMusic}><img src={musicicon} width="30" height="30"/> Music</ActiveButton> : <InactiveButton onClick={handleMusic}><img src={musicicon} width="30" height="30"/> Music</InactiveButton>}
      {manage ? <ActiveButton onClick={handleManage}><img src={studenticon} width="30" height="30"/> Classroom</ActiveButton> : <InactiveButton onClick={handleManage}><img src={studenticon} width="30" height="30"/> Classroom</InactiveButton>}
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
  background-color: rgba(231, 228, 228, 0.89);
  grid-template-columns: 16% 1fr;
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
  background: linear-gradient(white, rgba(231, 228, 228, 0.89));
`;


const DashboardMenu = styled.div`
  grid-area: options;
  background: linear-gradient(#540d6e, #3bceac);
  display: grid;
  grid-template-rows: 200px 50px;
  align-items: end;
  justify-content: center;
  box-shadow: 2px 2px 8px #888888;
  h4 {
    display: inline-block
  }
`;

const DashboardBody = styled.div`
  grid-area: body;
  display: grid;
  justify-items: center;
  width: 100%;

`;

const InactiveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  // width: 300px;
  // height: 150px;
`

const ActiveButton = styled.button`
  background-color: rgb(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  // width: 264px;
`
