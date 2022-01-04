import { useState } from "react";
import SavedMusicContainer from "./SavedMusicContainer";
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
    <>
      <p>{song.name}</p>
      {playSavedSong ? (
        <>
          <StyledButton onClick={handleCancelPlaySong}>Cancel</StyledButton>
          <SavedMusicContainer staves={staves} />
        </>
      ) : (
        <StyledButton onClick={handlePlaySong}>View</StyledButton>
      )}
    </>
  );
}

export default StudentSongCard;

const StyledButton = styled.button`
background-color: #e5d1d0;
padding: 5px 15px;
margin: 5px;
border: 3px solid #73877b;
border-radius: 7%;
color: #73877b;
font-size 1.05em;
cursor: pointer;
`;