// This code comes from the following tutorial, https://dev.to/ganeshmani/building-a-piano-with-react-hooks-3mih, and has been modified to meet the needs of this application.

import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayerNoteAudio = {
  stop() {}
};

const NullSoundFontPlayer = {
  play() {
    return NullSoundFontPlayerNoteAudio;
  }
};
const AudioPlayer = () => {
  //Audio Context
  const audioContext = AudioContext && new AudioContext();

  //soundPlayer
  let soundPlayer = NullSoundFontPlayer;
  //setInstrument
  const Player = {
    setInstrument(instrumentName) {
      SoundFontPlayer.instrument(audioContext, instrumentName)
        .then(soundfontPlayer => {
          soundPlayer = soundfontPlayer;
        })
        .catch(e => {
          soundPlayer = NullSoundFontPlayer;
        });
    },
    playNote(note) {
      soundPlayer.play(note);
    }
  };
  return Player;
};

export default AudioPlayer;