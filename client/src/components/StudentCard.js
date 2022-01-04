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
  }

  function handleCancelEdit() {
    setEditing(false);
  }

  function handleViewSongs() {
    setViewStudentSongs(true);
  }

  function handleCancelViewSongs() {
    setViewStudentSongs(false);
  }



  let studentSongs = student.songs.map((song) => <StudentSongCard song={song} user={student} key={song.id}/>)


  return (
    <StudentCardsContainer>
      <p>{student.name}</p>
      {editing ? (
        <>
          <StudentEdit
            student={student}
            handleUpdateStudent={handleUpdateStudent}
            setStudents={setStudents}
            setEditing={setEditing}
            students={students}
          />
          <StyledButton onClick={handleCancelEdit}>Cancel</StyledButton>
        </>
      ) : (
        <StyledButton onClick={handleEdit}>Edit</StyledButton>
      )}

      <StyledButton onClick={handleDelete}>Delete</StyledButton>

      {viewStudentSongs ? (<>
      {studentSongs}
        <StyledButton onClick={handleCancelViewSongs}>Cancel</StyledButton>
        </>
      ) : (
        <StyledButton onClick={handleViewSongs}>View Songs</StyledButton>
      )}
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
background-color: white;
padding: 5px 15px;
margin: 5px;
border: 3px solid #73877b;
border-radius: 7%;
color: #73877b;
font-size 1.05em;
cursor: pointer;
`;

const StudentCardsContainer = styled.div`
  p {
    font-weight: 700;
  }
`;

const StudentCardsDetails = styled.div`
  p {
    font-weight: 700;
  }
`;