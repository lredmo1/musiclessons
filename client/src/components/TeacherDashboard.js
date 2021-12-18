import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useRef, useState} from "react";
import Piano from "./Piano";

function TeacherDashboard() {
// FIRST VERSION (pass staves as staves)
  // const [staves, setStaves] = useState([]);
  // let musicNotes = [];
  // let musicNotesArray = []

  // function handleKeyPress(e) {
  //   musicNotes.push(`${e.key}4`)
  //   musicNotesArray.push(musicNotes)
  //   setStaves((currentstate) => [...currentstate, musicNotesArray]);
  //   console.log(`this is staves ${musicNotesArray}`);
  //   console.log(`this is staves ${staves}`)
  // }


//SECOND VERSION (pass staves as musicNotesArray)
  // let musicNotes = [];
  //   const musicNotesArray = []
  //   const staves = useRef([])

  // function handleKeyPress(e) {
  //   musicNotes.push(`${e.key}4`)
  //   console.log(musicNotes);
  //   musicNotesArray.push(musicNotes)
  //   console.log(musicNotesArray);
  //   return musicNotesArray
  // }

//THIRD VERSION (pass staves as staves)
  // const musicNotes = useRef([])
  // const musicNotesArray = []

  // function handleKeyPress(e) {
  //   musicNotes.current=[`${e.key}4`];
  //   console.log(musicNotes);
  //   musicNotesArray.push(musicNotes.current)
  //   console.log(musicNotesArray);
  //   setStaves((currentstate) => [...currentstate, musicNotesArray]);
  //   console.log(`this is staves ${staves}`)
  // }

  // THIS WORKS WHEN EDIT CODE AND PAGE RERENDERS
  const staves = useRef([])
  let musicNotes = [];
  let musicNotesArray = []

  function handleKeyPress(e) {
    musicNotes.push(`${e.key}4`)
    musicNotesArray.push(musicNotes)
    staves.current = musicNotesArray;
    console.log(`this is musicNotesArray ${musicNotesArray}`);
    console.log(staves)
  }

  return (
    <>
      <SheetMusic staves={staves.current} />
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
