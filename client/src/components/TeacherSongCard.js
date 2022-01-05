import { useState } from "react";
import { SheetMusic } from "./SheetMusic";
import StudentSongCard from "./StudentSongCard";
import styled from "styled-components";

function TeacherSongCard({ song, user }) {

  let teacherSongs = user.songs.map(song => <StudentSongCard song={song} key={song.id}/>)

  return (
    <StudentSongContainerStyle>
      <h1>My Songs</h1><StyledSongCardsContainer>{teacherSongs}</StyledSongCardsContainer>
    </StudentSongContainerStyle>
  );
}

export default TeacherSongCard;



const StudentSongContainerStyle = styled.div`
background-color: white;
display: grid;
justify-items: center;
margin-top: 25px;
padding: 40px;
width: 95%;
border-radius: 10%;
box-shadow: 2px 2px 8px #888888;
h1 {
    color: #ee4266;
    font-size: 2.5em;
    text-shadow: 2px 2px 2px black;
  }
`;

const StyledSongCardsContainer = styled.div`
background-color: #ffd23f;
padding-left: 20px;
padding-bottom: 20px;
border-radius: 5%;
box-shadow: 2px 2px 8px #888888;
width: 70vw;

`
