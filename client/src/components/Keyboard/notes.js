// This code comes from the following tutorial, https://dev.to/ganeshmani/building-a-piano-with-react-hooks-3mih, and has been modified to meet the needs of this application.

const TONES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const OCTAVE_NUMBERS = [1, 2, 3, 4, 5, 6, 7];

export default OCTAVE_NUMBERS.reduce((notes, octaveNumber) => {
  const notesInOctave = TONES.map(tone => `${tone}${octaveNumber}`);
  return [...notes, ...notesInOctave];
}, []);