import { useState } from "react";
import {SheetMusic} from "./SheetMusic";

function StudentSongCard({ song, user }) {
  const [playSavedSong, setPlaySavedSong] = useState(false);

  function handlePlaySong() {
    setPlaySavedSong(true);
  }

  function handleCancelPlaySong() {
    setPlaySavedSong(false);
  }

  return (
    <>
      <p key={song.id}>{song.name}</p>
      {playSavedSong ? (
        <>
          <button onClick={handleCancelPlaySong}>Cancel</button>
          <SheetMusic staves={song.data}/>
        </>
      ) : (
        <button onClick={handlePlaySong}>View</button>
      )}
    </>
  );
}

export default StudentSongCard;
