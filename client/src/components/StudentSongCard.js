import { useState } from "react";
import {SheetMusic} from "./SheetMusic";
import styled from "styled-components";

function StudentSongCard({ song, user }) {
  const [playSavedSong, setPlaySavedSong] = useState(false);
  const [staves, setStaves] = useState([]);

  function handleKeyPress(savedSong) {
    let musicNotesArray = [...staves];
    savedSong.map((note) => {
      if (
        musicNotesArray[musicNotesArray.length - 1] &&
        musicNotesArray[musicNotesArray.length - 1].length < 4
      ) {
        if (note === "o") {
          musicNotesArray[musicNotesArray.length - 1].push("c5");
        } else if (
          note === "a" ||
          note === "b" ||
          note === "c" ||
          note === "d" ||
          note === "e" ||
          note === "f" ||
          note === "g"
        ) {
          musicNotesArray[musicNotesArray.length - 1].push(`${note}4`);
        }
      } else {
        let musicNotes = [];
        if (note === "o") {
          musicNotes.push("c5");
        } else {
          musicNotes.push(`${note}4`);
        }
        musicNotesArray.push(musicNotes);
      }
    });
    setStaves(musicNotesArray);
  }

  function handlePlaySong() {
    setPlaySavedSong(true);
    let savedSong = song.data.split("");
    handleKeyPress(savedSong);
  }

  function handleCancelPlaySong() {
    setPlaySavedSong(false);
    setStaves([]);
  }

  return (
    <StudentSongContainerStyle>
      <p>{song.name}</p>
      {playSavedSong ? (
        <>
          <StyledButton onClick={handleCancelPlaySong}>Close</StyledButton>
          <SavedSheetMusticStyle><SheetMusic staves={staves} /></SavedSheetMusticStyle>
        </>
      ) : (
        <StyledButton onClick={handlePlaySong}>View</StyledButton>
      )}
    </StudentSongContainerStyle>
  );
}

export default StudentSongCard;

const StyledButton = styled.button`
background-color: #0ead69;
padding: 5px 15px;
margin: 5px;
border: none;
border-radius: 7%;
color: white;
font-size 1.05em;
cursor: pointer;
box-shadow: 2px 2px 8px #888888;
`;

const StudentSongContainerStyle = styled.div`
display: grid;
grid-template-columns: 100px 100px;
width: 67vw;
`;

const SavedSheetMusticStyle = styled.div`
background-color: white;
width: 970px;
padding-top: 15px;
margin-top: 10px;
border-radius: 10px;
`;