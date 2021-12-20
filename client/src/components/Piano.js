import Instrument from "./Instrument";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="piano-container">
      <Instrument
        instrumentName={"acoustic_grand_piano"}
        startNote={"F3"}
        endNote={"E5"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          // Q: "C3",
          // 2: "C#3",
          // W: "D3",
          // 3: "D#3",
          // E: "E3",
          // R: "F3",
          // 5: "F#3",
          // T: "G3",
          // 6: "G#3",
          // Y: "A3",
          // 7: "A#3",
          // U: "B3",
          C: "C4",
          // 9: "C#4",
          D: "D4",
          // 0: "D#4",
          E: "E4",
          F: "F4",
          // S: "F#4",
          G: "G4",
          // D: "G#4",
          A: "A4",
          // F: "A#4",
          B: "B4",
          M: "C5",
          // H: "C#5",
          // N: "D5",
          // J: "D#5",
          // M: "E5",
          // ",": "F5",
          // L: "F#5",
          // ".": "G5",
          // ";": "G#5",
          // "/": "A5",
          // "'": "A#5",
          // A: "B5"
        }}
      />
    </div>
  );
};

export default Piano;