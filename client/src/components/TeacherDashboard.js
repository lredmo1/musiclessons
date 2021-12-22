import MusicContainer from "./MusicContainer";
import styled from "styled-components";

function TeacherDashboard() {
 
  return (
    <DashboardStyle>
      <MusicContainer />
      {/* <SheetMusic staves={staves} />
      <form onKeyUp={handleKeyPress}>
        <input type="text" placeholder=" Click to begin"/>
      </form>
      <MusicToolBar />
      <Piano /> */}
    </DashboardStyle>
  );
}

export default TeacherDashboard;

const DashboardStyle = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  input {
    height: 50px;
    width: 200px;
    margin: 20px;
    font-size: 30px;
  }
`;
