import { useState } from "react";
import StudentEdit from "./StudentEdit";

function StudentCard({ student, handleDeleteStudent }) {
  const [editing, setEditing] = useState(false);

  function handleDelete() {
    fetch(`/users/${student.id}`, {
      method: "DELETE",
    })
    .then((item) => handleDeleteStudent(student))
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleCancelEdit() {
    setEditing(false);
  }

  return (
    <>
      <p>{student.name}</p>
      <button>View Songs</button>
      {editing ? (
        <>
          <StudentEdit student={student} />
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