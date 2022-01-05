import { useState } from "react";
import StudentSongCard from "./StudentSongCard";
import MusicContainer from "./MusicContainer";

function StudentDashboard({ user, setUser }) {
  const [music, setMusic] = useState(false);
  const [manage, setManage] = useState(false);

  function handleMusic() {
    setMusic(true);
  }

  function handleCancelMusic() {
    setMusic(false);
  }

  function handleManage() {
    setManage(true);
  }

  function handleCancelManage() {
    setManage(false);
  }

  let studentSongs = user.songs.map((song) => (
    <StudentSongCard song={song} user={user} key={song.id} />
  ));

  return (
    <>
      {music ? (
        <div>
          <MusicContainer user={user} />
          <button onClick={handleCancelMusic}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleMusic}>Make Music</button>
      )}
      {manage ? (
        <div>
          {studentSongs}
          <button onClick={handleCancelManage}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleManage}>View Saved Songs</button>
      )}
    </>
  );
}

export default StudentDashboard;
