import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useRef, useState } from "react";
import Piano from "./Piano";
import styled from "styled-components";


function TeacherDashboard() {
  const [staves, setStaves] = useState([]);

  function handleKeyPress(e) {
    let musicNotesArray = [...staves];
    // console.log(musicNotesArray[musicNotesArray.length - 1]);
    if (
      musicNotesArray[musicNotesArray.length - 1] &&
      musicNotesArray[musicNotesArray.length - 1].length < 4
    ) {
      if (e.key === "m") {
        musicNotesArray[musicNotesArray.length - 1].push("c5")
      } else {
        musicNotesArray[musicNotesArray.length - 1].push(`${e.key}4`)
      }
      setStaves(musicNotesArray);
      console.log(e.key)

    } else {
      let musicNotes = [];
      musicNotes.push(`${e.key}4`);
      setStaves((currentstate) => [...currentstate, musicNotes]);
    }
  }

  return (
    <DashboardStyle>
      <SheetMusic staves={staves} />
      <form onKeyPress={handleKeyPress}>
        <input type="text" />
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
};
`