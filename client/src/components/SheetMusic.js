// This code comes from the following forum, https://stackoverflow.com/questions/68437759/javascript-to-react-cannot-execute-the-easyscore-tutorial-of-vexflow, and has been modified to meet the needs of this application.

import React, { useRef, useEffect } from 'react'
import VexFlow from 'vexflow'
import styled from "styled-components";


const VF = VexFlow.Flow
const { Formatter, Renderer, Stave, StaveNote } = VF

const clefAndTimeWidth = 60

export function SheetMusic({
  staves,
  clef = 'treble',
  timeSignature = '4/4',
  width = 950,
  height = 150,
}) {
  const container = useRef()
  const rendererRef = useRef()
  useEffect(() => {


    if (container.current.children.length > 0) {  
    container.current.removeChild(container.current.children[0])}


      rendererRef.current = new Renderer(
        container.current,
        Renderer.Backends.SVG
      )

    const renderer = rendererRef.current  
 
    renderer.resize(width, height)
    const context = renderer.getContext()
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
    const staveWidth = (width - clefAndTimeWidth) / staves.length

    let currX = 0
    
    staves.forEach((notes, i) => {
      const stave = new Stave(currX, 0, staveWidth)

      if (i === 0) {
        stave.setWidth(staveWidth + clefAndTimeWidth)
        stave.addClef(clef).addTimeSignature(timeSignature)
      }
      currX += stave.getWidth()
      stave.setContext(context).draw()


      const processedNotes = notes
        .map(note => (typeof note === 'string' ? { key: note } : note))
        .map(note =>
          Array.isArray(note) ? { key: note[0], duration: note[1] } : note
        )
        .map(({ key, ...rest }) =>
          typeof key === 'string'
            ? {
                key: key.includes('/') ? key : `${key[0]}/${key.slice(1)}`,
                ...rest,
              }
            : rest
        )
        .map(
          ({ key, keys, duration = 'q' }) =>{

            return new StaveNote({
              keys: key ? [key] : keys,
              duration: String(duration),
            })
          }
            
        )

      Formatter.FormatAndDraw(context, stave, processedNotes, {
        auto_beam: true,
      })
    })
  }, [staves])
  return <StaveStyle><div ref={container} /></StaveStyle>
}

const StaveStyle = styled.div`
padding: 0px 10px;
`;