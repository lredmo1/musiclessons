import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useState } from "react";
import Piano from "./Piano";
import staffmusic from "../staffmusic.png"
import styled from "styled-components";

function MusicContainer({ user }) {
  const [staves, setStaves] = useState([]);
  const [saving, setSaving] = useState(false);
  const [playing, setPlaying] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    data: staves,
    user_id: user.id,
  });

  function handleChange(e) {
    const regex = /[^a-g]/gi;
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
    setPlaying(false)
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
      });
  }

  function handleKeyPress(e) {
    setPlaying(true)
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
  return (
    <MusicContainerStyle>
      {/* <img src={staffmusic} width="500"/> */}
      {playing ? <SheetMusic staves={staves} /> : <img src={staffmusic} width="500"/>}
      {/* <SheetMusic staves={staves} /> */}
      <form onKeyUp={handleKeyPress}>
        <input
          type="text"
          placeholder=" Click to begin"
          name="data"
          value={formData.data}
          onChange={handleChange}
        />
        <StyledButton onClick={clearMusic}>Clear</StyledButton>
        
        {saving ? (
          <>
            
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder=" Title"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <StyledButton className="nonkey" type="submit">Submit</StyledButton>
              <StyledButton className="nonkey" onClick={() => setSaving(false)}>Cancel</StyledButton>
            </form>
          </>
        ) : (
          <StyledButton onClick={() => setSaving(true)}>Save</StyledButton>
        )}
      </form>

      <MusicToolBar />
      <Piano />
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
 background-color: #ee4266;
 border: 2px solid #540d6e;
//  background: linear-gradient(#ee4266, #540d6e);
 padding: 5px 15px;
 margin: 5px;
//  border: none;
 border-radius: 7%;
 color: white;
 font-size 1.05em;
 cursor: pointer;
 box-shadow: 2px 2px 8px #888888;
 `;
