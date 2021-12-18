import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useState, useEffect } from "react";
import AudioPlayer from "./Keyboard/AudioPlayer";
import Piano from "./Piano";


function TeacherDashboard() {
  const audioPlayer = AudioPlayer();

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    audioPlayer.playNote("C4");
  };

  const [staves, setStaves] = useState([]

  //   ["c4", "d4", "e4", "d4"],
  //   ["a4", "d4", "e4", "d4"],
  //   ["g3", "d4", "e4", "d4"],
  //   ["a4", "d4", ["e4", 2]],
  // ]
  );

  // ["c4", "d4", "e4", "d4"],
  //   ["a4", "d4", "e4", "d4"],
  //   ["g3", "d4", "e4", "d4"],
  //   ["a4", "d4", ["e4", 2]];

  let musicNotes = [];

  function handleKeyPress(e) {
    musicNotes.push(`${e.key}4`);
    console.log(musicNotes);
    setStaves((currentstate) => [...currentstate, musicNotes]);
  }

  return (
    <>
      <SheetMusic staves={staves} />
      <form onKeyPress={handleKeyPress}>
        <input type="text" />
      </form>
      <MusicToolBar />
      <div className="app-container">
        <button onClick={handleClick}>Play</button>
      </div>
      <div className="app-container">
      <Piano />
    </div>
    </>
  );
}

export default TeacherDashboard;
