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
    <StudentSongCard song={song} user={student} key={song.id} />));

    function handleViewStudentSongs() {
      if (!student.songs[0]) {
        console.log("no songs")
        return <h4>No songs yet</h4>
      } else {
        return studentSongs
      }
    }

  return (
    <StudentCardsContainer>
      <h2>{student.name}</h2>
      <Try>
      {viewStudentSongs ? (
        <ViewSongContainer>
          <h2>{student.name}'s Songs</h2>
          <StyledExitButton onClick={handleCancelViewSongs}>×</StyledExitButton>
          <StyledSongCards>{handleViewStudentSongs()}</StyledSongCards>
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

      </Try>
    </StudentCardsContainer>
  );
}

export default StudentCard;


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
margin-right: 0;
font-family: MADEOuterSansLightPERSONALUSE;
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
h2 {
    font-weight: 700;
    display: inline;
  }
  border-bottom: 2px dashed black;
  padding-bottom: 10px;
  font-family: MADEOuterSansLightPERSONALUSE;
 `;

const StyledSongCards = styled.div`
  grid-areas: thing;
`;

const Try = styled.div`
  display: inline;
  h4 {
    width: 65vw;
    font-size: 1.2em;
  }
  
`;

const ViewSongContainer = styled.div`
  background-color: #ffd23f;
  box-shadow: 2px 2px 8px #888888;
  padding: 20px;
  display: grid;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-items: start;
  grid-template-areas:
    "title exit"
    "thing thing";
  h2 {
    text-shadow: 2px 2px 2px white;
    font-size: 2em;
    margin-top: 0;
  }
`;



