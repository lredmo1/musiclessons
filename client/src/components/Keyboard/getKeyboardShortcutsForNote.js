// This code comes from the following tutorial, https://dev.to/ganeshmani/building-a-piano-with-react-hooks-3mih, and has been modified to meet the needs of this application.

export const  getKeyboardShortcutsForNote = (keyboardMap, note) => {
    const keyboardShortcuts = Object.keys(keyboardMap);
    return keyboardShortcuts.filter(shortcut => keyboardMap[shortcut] === note);
  }