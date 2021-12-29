// This code comes from the following tutorial, https://dev.to/ganeshmani/building-a-piano-with-react-hooks-3mih, and has been modified to meet the needs of this application.

import NOTES from './notes'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}