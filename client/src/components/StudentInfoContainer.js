import StudentCard from "./StudentCard"
import { useState } from "react";


function StudentContainer({user}) {

    const [students, setStudents] = useState([]);

    // function handleDeleteStudent(deletedStudent) {
        // const updatedShelters = shelters.filter((shelter) => shelter.id !== deletedShelter.id);
        // setShelters(updatedShelters);
    // }

    let classroomStudents = user.students.map((student) => <StudentCard key={student.id} student={student} 
    // handleDeleteStudent={handleDeleteStudent}
    />)

    return (<>
    {classroomStudents}
    </>);
  }
  
  export default StudentContainer;