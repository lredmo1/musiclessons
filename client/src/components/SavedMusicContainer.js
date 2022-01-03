import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useState } from "react";
import Piano from "./Piano";
import InstrumentAudio from "./Keyboard/InstrumentAudio";

function MusicContainer({ staves }) {
  
  function playSavedSong(e) {
    let notes = []
    staves.map((arry) => notes.push(arry[0]))
    return (
    notes.forEach((note) => <InstrumentAudio 
    instrumentName={"acoustic_grand_piano"} 
    notes={note} />)
    );
  }

  return (
    <>
      <SheetMusic staves={staves} />
      <button onClick={playSavedSong}>Play</button>
    </>
  );
}

export default MusicContainer;
