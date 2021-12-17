import {SheetMusic} from './SheetMusic';
import MusicToolBar from './MusicToolBar';
import { useState } from 'react'



function TeacherDashboard() {
  const[staves, setStaves] = useState([['g3', 'd4', 'e4', 'd4'], ['a4', 'd4', 'e4', 'd4'],['g3', 'd4', 'e4', 'd4'], ['a4', 'd4', 'e4', 'd4']])

    return (<>
    <SheetMusic staves={staves} />
    <MusicToolBar />
    </>)
  }
  
  export default TeacherDashboard;