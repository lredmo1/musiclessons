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

  let musicNotes = [];

  function handleKeyPress(e) {
    if (e.key === "a") {
    musicNotes.push("a4")
      } else if (e.key === "b") {
        musicNotes.push("b4")
     } else if (e.key === "c") {
        musicNotes.push("c4")
      } else if (e.key === "d") {
        musicNotes.push("d4")
      } else if (e.key === "e") {
        musicNotes.push("e4")
      } else if (e.key === "f") {
        musicNotes.push("f4")
      } else if (e.key === "g") {
        musicNotes.push("g4")
      }
      console.log(musicNotes);
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
