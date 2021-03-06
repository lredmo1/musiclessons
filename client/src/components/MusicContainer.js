import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useState } from "react";
import Piano from "./Piano";
import FullPiano from "./FullPiano";
import staffmusic from "../staffmusic.png";
import styled from "styled-components";

function MusicContainer({ user, setUser }) {
  const [staves, setStaves] = useState([]);
  const [saving, setSaving] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullPiano, setFullPiano] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    data: staves,
    user_id: user.id,
  });

  function handleChange(e) {
    const regex = /[^a-g,o]/gi;
    e.target.value = e.target.value.replace(regex, "");
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function clearMusic(e) {
    e.preventDefault();
    setFormData({
      name: "",
      data: "",
      user_id: user.id,
    });
    setStaves([]);
    setPlaying(false);
  }

  function handleTitleInput(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleFullPiano() {
    console.log("clicked!")
    setFullPiano(true)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        setFormData({
          name: "",
          data: "",
          user_id: user.id,
        });
        setSaving(false);
        setUser((currentUser) => ({...currentUser, songs: [...currentUser.songs, data]}));
      });
  }

  function handleKeyPress(e) {
    setPlaying(true);
    let musicNotesArray = [...staves];
    if (
      musicNotesArray[musicNotesArray.length - 1] &&
      musicNotesArray[musicNotesArray.length - 1].length < 4
    ) {
      if (e.key === "o") {
        musicNotesArray[musicNotesArray.length - 1].push("c5");
      } else if (e.key === "Backspace") {
        musicNotesArray[musicNotesArray.length - 1].pop();
      } else if (
        e.key === "a" ||
        e.key === "b" ||
        e.key === "c" ||
        e.key === "d" ||
        e.key === "e" ||
        e.key === "f" ||
        e.key === "g"
      ) {
        musicNotesArray[musicNotesArray.length - 1].push(`${e.key}4`);
      }
      setStaves(musicNotesArray);
    } else {
      let musicNotes = [];
      if (e.key === "o") {
        musicNotes.push("c5");
      } else if (e.key === "Backspace") {
        musicNotes.pop();
      } else {
        musicNotes.push(`${e.key}4`);
      }
      setStaves((currentstate) => [...currentstate, musicNotes]);
    }
  }


let teaching = ( <>
  {playing ? ( 
    <SheetMusic staves={staves} />
  ) : (
    <img src={staffmusic} width="500" />
  )}

  <InputStyles>
    <form onKeyUp={handleKeyPress}>
      <input
        type="text"
        placeholder=" Click to begin"
        name="data"
        value={formData.data}
        onChange={handleChange}
      />
      <StyledButton onClick={clearMusic}>Clear</StyledButton>
      {saving ? null : (
        <StyledButton onClick={() => setSaving(true)}>Save</StyledButton>
      )}
    </form>

    {saving ? (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder=" Title"
            name="name"
            value={formData.name}
            onChange={handleTitleInput}
          />
          <StyledButton className="nonkey" type="submit">
            Submit
          </StyledButton>
          <StyledButton className="nonkey" onClick={() => setSaving(false)}>
            Cancel
          </StyledButton>
        </form>
      </>
    ) : null}
  </InputStyles>

  <Piano />
  <StyledButton onClick={handleFullPiano}>Switch to Full Piano</StyledButton> </>
)

  return (
    <MusicContainerStyle>
      {fullPiano ? <FullPiano setFullPiano={setFullPiano}/> : teaching}

    </MusicContainerStyle>
  );
}

export default MusicContainer;

const MusicContainerStyle = styled.div`
  background-color: white;
  display: grid;
  justify-items: center;
  padding: 40px;
  width: 95%;
  border-radius: 3%;
  box-shadow: 2px 2px 8px #888888;
`;

const StyledButton = styled.button`
 background: linear-gradient(#ee4266, #b33651);
 padding: 5px 15px;
 margin: 15px 5px; border: none;
 border-radius: 7%;
 color: white;
 font-size 1.05em;
 cursor: pointer;
 box-shadow: 2px 2px 8px #888888;
 font-family: MADEOuterSansLightPERSONALUSE;
 `;

 const InputStyles = styled.div`
  // display: grid;
  // justify-items: start;
`;