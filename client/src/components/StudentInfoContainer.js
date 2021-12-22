function StudentContainer({user}) {

    let classroomStudents = user.students.map((student) => console.log(student.name))

    return (<>
    {classroomStudents}
    {console.log(user)}
    </>);
  }
  
  export default StudentContainer;