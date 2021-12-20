import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useRef, useState } from "react";
import Piano from "./Piano";
import styled from "styled-components";


function TeacherDashboard() {
  const [staves, setStaves] = useState([]);

  function handleKeyPress(e) {
    let musicNotesArray = [...staves];
    console.log(musicNotesArray[musicNotesArray.length - 1]);
    if (
      musicNotesArray[musicNotesArray.length - 1] &&
      musicNotesArray[musicNotesArray.length - 1].length < 4
    ) { if (e.key === "q") {
      musicNotesArray[musicNotesArray.length - 1].push("c3")
    } else if (e.key === "2") {
      musicNotesArray[musicNotesArray.length - 1].push("c#3")
    } else if (e.key === "w") {
      musicNotesArray[musicNotesArray.length - 1].push("d3")
    } else if (e.key === "3") {
      musicNotesArray[musicNotesArray.length - 1].push("d#3")
    } else if (e.key === "e") {
      musicNotesArray[musicNotesArray.length - 1].push("e3")
    } else if (e.key === "r") {
      musicNotesArray[musicNotesArray.length - 1].push("f3")
    } else if (e.key === "5") {
      musicNotesArray[musicNotesArray.length - 1].push("f#3")
    } else if (e.key === "t") {
      musicNotesArray[musicNotesArray.length - 1].push("g3")
    } else if (e.key === "6") {
      musicNotesArray[musicNotesArray.length - 1].push("g#3")
    } else if (e.key === "y") {
      musicNotesArray[musicNotesArray.length - 1].push("a3")
    } else if (e.key === "7") {
      musicNotesArray[musicNotesArray.length - 1].push("a#3")
    } else if (e.key === "u") {
      musicNotesArray[musicNotesArray.length - 1].push("b3")
    } else if (e.key === "i") {
      musicNotesArray[musicNotesArray.length - 1].push("c4")
    } else if (e.key === "9") {
      musicNotesArray[musicNotesArray.length - 1].push("c#4")
    } else if (e.key === "o") {
      musicNotesArray[musicNotesArray.length - 1].push("d4")
    } else if (e.key === "0") {
      musicNotesArray[musicNotesArray.length - 1].push("d#4")
    } else if (e.key === "p") {
      musicNotesArray[musicNotesArray.length - 1].push("e4")
    } else if (e.key === "z") {
      musicNotesArray[musicNotesArray.length - 1].push("f4")
    } else if (e.key === "s") {
      musicNotesArray[musicNotesArray.length - 1].push("f#4")
    } else if (e.key === "x") {
      musicNotesArray[musicNotesArray.length - 1].push("g4")
    } else if (e.key === "d") {
      musicNotesArray[musicNotesArray.length - 1].push("g#4")
    } else if (e.key === "c") {
      musicNotesArray[musicNotesArray.length - 1].push("a4")
    } else if (e.key === "f") {
      musicNotesArray[musicNotesArray.length - 1].push("a#4")
    } else if (e.key === "v") {
      musicNotesArray[musicNotesArray.length - 1].push("b4")
    } else if (e.key === "b") {
      musicNotesArray[musicNotesArray.length - 1].push("c5")
    } else if (e.key === "h") {
      musicNotesArray[musicNotesArray.length - 1].push("c#5")
    } else if (e.key === "n") {
      musicNotesArray[musicNotesArray.length - 1].push("d5")
    } else if (e.key === "j") {
      musicNotesArray[musicNotesArray.length - 1].push("d#5")
    } else if (e.key === "m") {
      musicNotesArray[musicNotesArray.length - 1].push("e5")
    } else if (e.key === ",") {
      musicNotesArray[musicNotesArray.length - 1].push("f5")
    } else if (e.key === "l") {
      musicNotesArray[musicNotesArray.length - 1].push("f#5")
    } else if (e.key === ".") {
      musicNotesArray[musicNotesArray.length - 1].push("g5")
    } else if (e.key === ";") {
      musicNotesArray[musicNotesArray.length - 1].push("g#5")
    } else if (e.key === "/") {
      musicNotesArray[musicNotesArray.length - 1].push("a5")
    } else if (e.key === "'") {
      musicNotesArray[musicNotesArray.length - 1].push("a#5")
    } else if (e.key === "a") {
      musicNotesArray[musicNotesArray.length - 1].push("b5")
    } 
      
      setStaves(musicNotesArray);
    } else {
      let musicNotes = [];
      if (e.key === "q") {
        musicNotes.push("c3")
      } else if (e.key === "2") {
        musicNotes.push("c#3")
      } else if (e.key === "w") {
        musicNotes.push("d3")
      } else if (e.key === "3") {
        musicNotes.push("d#3")
      } else if (e.key === "e") {
        musicNotes.push("e3")
      } else if (e.key === "r") {
        musicNotes.push("f3")
      } else if (e.key === "5") {
        musicNotes.push("f#3")
      } else if (e.key === "t") {
        musicNotes.push("g3")
      } else if (e.key === "6") {
        musicNotes.push("g#3")
      } else if (e.key === "y") {
        musicNotes.push("a3")
      } else if (e.key === "7") {
        musicNotes.push("a#3")
      } else if (e.key === "u") {
        musicNotes.push("b3")
      } else if (e.key === "i") {
        musicNotes.push("c4")
      } else if (e.key === "9") {
        musicNotes.push("c#4")
      } else if (e.key === "o") {
        musicNotes.push("d4")
      } else if (e.key === "0") {
        musicNotes.push("d#4")
      } else if (e.key === "p") {
        musicNotes.push("e4")
      } else if (e.key === "z") {
        musicNotes.push("f4")
      } else if (e.key === "s") {
        musicNotes.push("f#4")
      } else if (e.key === "x") {
        musicNotes.push("g4")
      } else if (e.key === "d") {
        musicNotes.push("g#4")
      } else if (e.key === "c") {
        musicNotes.push("a4")
      } else if (e.key === "f") {
        musicNotes.push("a#4")
      } else if (e.key === "v") {
        musicNotes.push("b4")
      } else if (e.key === "b") {
        musicNotes.push("c5")
      } else if (e.key === "h") {
        musicNotes.push("c#5")
      } else if (e.key === "n") {
        musicNotes.push("d5")
      } else if (e.key === "j") {
        musicNotes.push("d#5")
      } else if (e.key === "m") {
        musicNotes.push("e5")
      } else if (e.key === ",") {
        musicNotes.push("f5")
      } else if (e.key === "l") {
        musicNotes.push("f/5")
      } else if (e.key === ".") {
        musicNotes.push("g5")
      } else if (e.key === ";") {
        musicNotes.push("g/5")
      } else if (e.key === "/") {
        musicNotes.push("a5")
      } else if (e.key === "'") {
        musicNotes.push("a#/5")
      } else if (e.key === "a") {
        musicNotes.push("b5")
      } 
      // musicNotes.push(`${e.key}4`);
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