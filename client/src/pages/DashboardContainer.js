import TeacherDashboard from '../components/TeacherDashboard';
import StudentDashboard from '../components/StudentDashboard';
import { useState } from "react";


function DashboardContainer({user}) {
  const [isTeacher, setIsTeacher] = useState(true)

    return <>
    {isTeacher?
    <TeacherDashboard user={user}/>
  : <StudentDashboard user={user}/> 
  }
    </>;
  }
  
  export default DashboardContainer;