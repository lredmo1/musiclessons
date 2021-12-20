import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useRef, useState } from "react";
import Piano from "./Piano";

//[["c4", "d4", "e4", "d4"], 
// ["a4", "d4", "e4", "d4"],
// ["g3", "d4", "e4", "d4"], 
// ["a4", "d4", ["e4", 2]], 
// ]

function TeacherDashboard() {
  // FIRST VERSION (pass staves as staves)
  // this one renders immediately but with bugs, staves is late compared to music notes array


  const [staves, setStaves] = useState([]);




  function handleKeyPress(e) {
    let musicNotesArray = [...staves]
    console.log(musicNotesArray[musicNotesArray.length-1])
    if (musicNotesArray[musicNotesArray.length-1] && musicNotesArray[musicNotesArray.length-1].length < 4) {
    musicNotesArray[musicNotesArray.length-1].push(`${e.key}4`)
    setStaves(musicNotesArray)
    } else  {
    let musicNotes = [];
    musicNotes.push(`${e.key}4`)
    // console.log(musicNotes);
    // musicNotesArray.push(musicNotes)
    // [[a4], [b4], [c4]]
    setStaves((currentstate) => [...currentstate, musicNotes]);
    }
    // console.log(musicNotesArray); 
  }

  console.log(staves)
  //SECOND VERSION (pass staves as musicNotesArray)
  // same as above but without state, just passing music notes array
  // let musicNotes = [];
  //   const musicNotesArray = []

  // function handleKeyPress(e) {
  //   musicNotes.push(`${e.key}4`)
  //   console.log(musicNotes);
  //   musicNotesArray.push(musicNotes)
  //   console.log(musicNotesArray);
  //   return musicNotesArray
  // }

  //THIRD VERSION (pass staves as staves)
  // this one renders immediately but with bugs, staves is late compared to music notes array
  // const [staves, setStaves] = useState([]);
  // const musicNotes = useRef([])
  // const musicNotesArray = []

  // function handleKeyPress(e) {
  //   musicNotes.current=[`${e.key}4`];
  //   console.log(musicNotes);
  //   musicNotesArray.push(musicNotes.current)
  //   console.log(musicNotesArray);
  //   setStaves((currentstate) => [...currentstate, musicNotesArray]);
  //   console.log(staves)
  // }

  //FOURTH VERSION (pass staves as staves.current)
  // THIS SORT OF WORKS WHEN EDIT CODE AND PAGE RERENDERS, try this on above versions
  // const [stavesState, setStavesState] = useState([])
  // const staves = useRef([]);
  // let musicNotes = [];
  // let musicNotesArray = [];

  // function handleKeyPress(e) {
  //   musicNotes.push(`${e.key}4`);
  //   // musicNotesArray.push(musicNotes);
  //   staves.current = [...staves.current, musicNotes];
  //   // console.log(musicNotes);
  //   console.log(staves.current);
  //   setStavesState((currentstate) => [...currentstate, musicNotes])
  // }

  return (
    <>
      <SheetMusic staves={staves} />
      <form onKeyPress={handleKeyPress}>
        <input type="text" />
      </form>
      <MusicToolBar />
      <div className="app-container">
        <Piano />
      </div>
    </>
  );
}

export default TeacherDashboard;
