import TeacherDashboard from '../components/TeacherDashboard';
import StudentDashboard from '../components/StudentDashboard';
import { useState } from "react";


function DashboardContainer({user, isTeacher}) {

    return <>
    <TeacherDashboard user={user}/>
    {/* {isTeacher? 
    <TeacherDashboard user={user}/>
    : <StudentDashboard user={user}/> } */}
    </>;
  }
  
  export default DashboardContainer;