import { SheetMusic } from "./SheetMusic";
import MusicToolBar from "./MusicToolBar";
import { useState } from "react";
import Piano from "./Piano";

function MusicContainer({ staves }) {
  return (
    <>
      <SheetMusic staves={staves} />
      {/* <form>
        <input type="text" placeholder=" Click to begin" name="data" />
      </form>
      <MusicToolBar />
      <Piano /> */}
    </>
  );
}

export default MusicContainer;
