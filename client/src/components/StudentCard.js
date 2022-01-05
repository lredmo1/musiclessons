import { useState } from "react";
import StudentEdit from "./StudentEdit";
import StudentSongCard from "./StudentSongCard";
import styled from "styled-components";

function StudentCard({
  student,
  handleDeleteStudent,
  handleUpdateStudent,
  setStudents,
  students,
}) {
  const [editing, setEditing] = useState(false);
  const [viewStudentSongs, setViewStudentSongs] = useState(false);

  function handleDelete() {
    fetch(`/users/${student.id}`, {
      method: "DELETE",
    }).then((item) => handleDeleteStudent(student));
  }

  function handleEdit() {
    setEditing(true);
    setViewStudentSongs(false);
  }

  function handleCancelEdit() {
    setEditing(false);
    setViewStudentSongs(false);
  }

  function handleViewSongs() {
    setViewStudentSongs(true);
    setEditing(false);
  }

  function handleCancelViewSongs() {
    setViewStudentSongs(false);
    setEditing(false);
  }

  let studentSongs = student.songs.map((song) => (
    <StudentSongCard song={song} user={student} key={song.id} />
  ));

  return (
    <StudentCardsContainer>
      <p>{student.name}</p>
      {viewStudentSongs ? (
        <ViewSongContainer>
          <h2>{student.name}'s Songs</h2>
          <StyledExitButton onClick={handleCancelViewSongs}>×</StyledExitButton>
          <StyledSongCards>{studentSongs}</StyledSongCards>
        </ViewSongContainer>
      ) : (
        <StyledViewButton onClick={handleViewSongs}>
          View Songs
        </StyledViewButton>
      )}
      {editing ? (
        <>
          {/* <StyledButton onClick={handleCancelEdit}>Cancel</StyledButton> */}
          <StudentEdit
            student={student}
            handleUpdateStudent={handleUpdateStudent}
            setStudents={setStudents}
            setEditing={setEditing}
            students={students}
            handleCancelEdit={handleCancelEdit}
          />
        </>
      ) : (
        <StyledButton onClick={handleEdit}>Edit</StyledButton>
      )}

      <StyledButton onClick={handleDelete}>Delete</StyledButton>

      
    </StudentCardsContainer>
  );
}

export default StudentCard;

// const StudentInfoContainerStyle = styled.div`
//   background-color: white;
//   grid-template-columns: repeat(4, 1fr);
//   display: grid;
//   justify-items: center;
//   padding: 40px;
//   width: 95%;
//   border-radius: 3%;
//   box-shadow: 5px 5px 8px #888888;
//  `;

const StyledButton = styled.button`
background: linear-gradient(#0ead69, #24835a);
padding: 5px 15px;
margin: 5px;
border: none;
border-radius: 7%;
color: white;
font-size 1.05em;
cursor: pointer;
box-shadow: 2px 2px 8px #888888;
`;

const StyledViewButton = styled.button`
background: linear-gradient(#6d168f, #540d6e);
padding: 5px 15px;
margin: 5px;
border: none;
border-radius: 7%;
color: white;
font-size 1.05em;
cursor: pointer;
box-shadow: 2px 2px 8px #888888;
`;

const StyledExitButton = styled.button`
background-color: #ffd23f;
margin: 5px;
border: 1px solid black;
border-radius: 7%;
color: black;
font-size 1.5em;
cursor: pointer;
box-shadow: 2px 2px 8px #888888;
height: 30px;

`;

const StudentCardsContainer = styled.div`
  p {
    font-weight: 700;
  }
  border-bottom: 2px dashed black;
  width: 100%;
  padding-bottom: 10px;
`;

const StyledSongCards = styled.div`
  grid-areas: thing;
`;

const ViewSongContainer = styled.div`
  background-color: #ffd23f;
  box-shadow: 2px 2px 8px #888888;
  padding: 20px;
  display: grid;
  margin-top: 20px;
  justify-items: start;
  grid-template-areas:
    "title exit"
    "thing thing";
  h2 {
    text-shadow: 2px 2px white;
    font-size: 2em;
    margin-top: 0;
  }
`;
