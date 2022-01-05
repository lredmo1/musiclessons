import TeacherDashboard from '../components/TeacherDashboard';
import StudentDashboard from '../components/StudentDashboard';
import { useState } from "react";


function DashboardContainer({user, isTeacher, setUser}) {

    return <>
    {/* <TeacherDashboard user={user}/> */}
    {isTeacher? 
    <TeacherDashboard user={user} setUser={setUser}/>
    : <StudentDashboard user={user} setUser={setUser}/> }
    </>;
  }
  
  export default DashboardContainer;