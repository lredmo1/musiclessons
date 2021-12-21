import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useRef, useState } from "react";
import Piano from "./Piano";
import styled from "styled-components";

function TeacherDashboard() {
  const [staves, setStaves] = useState([]);

  function handleKeyPress(e) {
    const regex = /[^a-g]/gi;
    e.target.value = e.target.value.replace(regex, "")
    let musicNotesArray = [...staves];
    if (
      musicNotesArray[musicNotesArray.length - 1] &&
      musicNotesArray[musicNotesArray.length - 1].length < 4
    ) {
      if (e.key === "o") {
        musicNotesArray[musicNotesArray.length - 1].push("c5");
      } else if (e.key === "Backspace") {
        musicNotesArray[musicNotesArray.length - 1].pop()
      } else if (e.key === "a" || e.key === "b" || e.key === "c" || e.key === "d" || e.key === "e" || e.key === "f" || e.key === "g") {
        musicNotesArray[musicNotesArray.length - 1].push(`${e.key}4`);
      } 
      setStaves(musicNotesArray);
    } else {
      let musicNotes = [];
      if (e.key === "o") {
        musicNotes.push("c5");
      } else if (e.key === "Backspace") {
        musicNotes.pop()
      } else {
        musicNotes.push(`${e.key}4`);
      }
      setStaves((currentstate) => [...currentstate, musicNotes]);
    }
  }

  return (
    <DashboardStyle>
      <SheetMusic staves={staves} />
      <form onKeyUp={handleKeyPress}>
        <input type="text" placeholder=" Click to begin"/>
      </form>
      <MusicToolBar />
      <Piano />
    </DashboardStyle>
  );
}

export default TeacherDashboard;

const DashboardStyle = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  input {
    height: 50px;
    width: 200px;
    margin: 20px;
    font-size: 30px;
  }
`;
