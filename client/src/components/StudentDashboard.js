import { useState } from "react";
import StudentSongCard from "./StudentSongCard";
import Navbar from "./Navbar";
import MusicContainer from "./MusicContainer";
import styled from "styled-components";
import studenticon from "../studenticon.png"
import musicicon from "../musicicon.png"

function StudentDashboard({ user, setUser }) {
  const [music, setMusic] = useState(true);
  const [manage, setManage] = useState(false);

  function handleMusic() {
    setMusic(true);
    setManage(false);

  }

  function handleCancelMusic() {
    setMusic(false);
  }

  function handleManage() {
    setManage(true);
    setMusic(false);

  }

  function handleCancelManage() {
    setManage(false);
  }

  let studentSongs = user.songs.map((song) => (
    <StudentSongCard song={song} user={user} key={song.id} />
  ));

  return (
    <DashboardStyle>

      <DashboardHeader>
        <h1>Welcome {user.name}</h1>
        <Navbar user={user} setUser={setUser} />
      </DashboardHeader>

      <DashboardMenu>
      {music ? <ActiveButton onClick={handleMusic}><img src={musicicon} width="30" height="30"/>Music</ActiveButton> : <InactiveButton onClick={handleMusic}><img src={musicicon} width="30" height="30"/>Music</InactiveButton>}
      {manage ? <ActiveButton onClick={handleManage}><img src={studenticon} width="30" height="30"/>Songs</ActiveButton> : <InactiveButton onClick={handleManage}><img src={studenticon} width="30" height="30"/>Songs</InactiveButton>}
      {/* {signup ? <button onClick={handleCancelAddStudent}>Cancel</button> : <button onClick={handleAddStudent}>Add New Student</button>} */}
      </DashboardMenu>

      <DashboardBody>
      <div>
        {music ? <MusicContainer user={user} setUser={setUser}/> :null}
        {manage ? <StyledSongCards><h1>My Songs</h1><StyledSongCardsContainer>{studentSongs}</StyledSongCardsContainer></StyledSongCards> : null}
        </div>
      </DashboardBody>  
    
    </DashboardStyle>
  );
}

export default StudentDashboard;

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "title title logout";
  justify-items: end;
  background-color: rgba(231, 228, 228, 0.89);
  background: linear-gradient(to right, rgba(231, 228, 228, 0.89), #3bceac, rgba(231, 228, 228, 0.89));

  h1 {
    color: #ffd23f;
    font-size: 2.5em;
    text-shadow: 2px 2px 2px black;
    grid-area: title;
    padding-left: 20px;
  }
`;

const DashboardMenu = styled.div`
  grid-area: options;
  background: linear-gradient(#0ead69, #ffd23f);
  display: grid;
  grid-template-rows: 180px 50px;
  align-items: end;
  justify-content: center;
  box-shadow: 2px 2px 8px #888888;
  height: 100vh;
  position: fixed;
`;

const InactiveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  display: flex;
  img {
    padding-right: 5px;
  }
  padding: 10px 35px;
  font-family: MADEOuterSansLightPERSONALUSE;

`

const ActiveButton = styled.button`
  background-color: rgb(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  display: flex;
  img {
    padding-right: 5px;
  }
  padding: 10px 35px;
  font-family: MADEOuterSansLightPERSONALUSE;
`

const DashboardBody = styled.div`
  grid-area: body;
  display: grid;
  justify-items: center;
`;

const StyledSongCards = styled.div`
background-color: white;

padding: 40px;
border-radius: 3%;
box-shadow: 2px 2px 8px #888888;
width: 70vw;
`;

const StyledSongCardsContainer = styled.div`
background-color: #ffd23f;
padding-left: 20px;
padding-bottom: 20px;
border-radius: 5%;
box-shadow: 2px 2px 8px #888888;
`