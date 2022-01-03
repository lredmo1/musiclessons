import { useState } from "react";
import SavedMusicContainer from "./SavedMusicContainer";

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
      // console.log(musicNotesArray)
      // setStaves(musicNotesArray);
    } else {
      let musicNotes = [];
      if (note === "o") {
        musicNotes.push("c5");
      } else {
        musicNotes.push(`${note}4`);
      }
      musicNotesArray.push(musicNotes)
      // console.log(musicNotes)
      // setStaves((currentstate) => [...currentstate, musicNotes]);
    }})
    setStaves(musicNotesArray)
  }


  function handlePlaySong() {
    setPlaySavedSong(true);
    let savedSong = song.data.split("")
    console.log(savedSong)
    handleKeyPress(savedSong)
}

  function handleCancelPlaySong() {
    setPlaySavedSong(false);
    setStaves([])
  }

  return (
    <>
      <p key={song.id}>{song.name}</p>
      {playSavedSong ? (
        <>
          <button onClick={handleCancelPlaySong}>Cancel</button>
          <SavedMusicContainer staves={staves}/>
        </>
      ) : (
        <button onClick={handlePlaySong}>View</button>
      )}
    </>
  );
}

export default StudentSongCard;
