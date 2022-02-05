import TeacherDashboard from '../components/TeacherDashboard';
import StudentDashboard from '../components/StudentDashboard';


function DashboardContainer({user, isTeacher, setUser}) {

    return <>
    {isTeacher? 
    <TeacherDashboard user={user} setUser={setUser}/>
    : <StudentDashboard user={user} setUser={setUser}/> }
    </>;
  }
  
  export default DashboardContainer;