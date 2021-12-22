import TeacherDashboard from '../components/TeacherDashboard';

function DashboardContainer({user}) {
    return <>
    <TeacherDashboard user={user}/>
    </>;
  }
  
  export default DashboardContainer;