import { useState } from "react";
import StudentEdit from "./StudentEdit";
import StudentSongCard from "./StudentSongCard";

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
    <>
      <p>{student.name}</p>
      {viewStudentSongs ? (<>
      {studentSongs}
        <button onClick={handleCancelViewSongs}>Cancel</button>
        </>
      ) : (
        <button onClick={handleViewSongs}>View Songs</button>
      )}

      {editing ? (
        <>
          <StudentEdit
            student={student}
            handleUpdateStudent={handleUpdateStudent}
            setStudents={setStudents}
            setEditing={setEditing}
            students={students}
          />
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}

      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default StudentCard;
