import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useState } from "react";

function TeacherDashboard() {
  const [staves, setStaves] = useState([
    ["c4", "d4", "e4", "d4"],
    ["a4", "d4", "e4", "d4"],
    ["g3", "d4", "e4", "d4"],
    ["a4", "d4", ["e4", 2]],
  ]);

  // ["c4", "d4", "e4", "d4"],
  //   ["a4", "d4", "e4", "d4"],
  //   ["g3", "d4", "e4", "d4"],
  //   ["a4", "d4", ["e4", 2]];

  let musicNotes = [];

  function handleKeyPress(e) {
    musicNotes.push(`${e.key}4`);
    console.log(musicNotes);
    // setStaves(musicNotes);
  }

  return (
    <>
      <SheetMusic staves={staves} />
      <form onKeyPress={handleKeyPress}>
        <input type="text" />
      </form>
      <MusicToolBar />
    </>
  );
}

export default TeacherDashboard;
