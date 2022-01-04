import { useState } from "react";
import styled from "styled-components";

function StudentEdit({
  student,
  setStudents,
  setEditing,
  handleCancelEdit,
  students,
  //   userFullName,
  //   setUserFullName,
  //   userEmail,
  //   setUserEmail,
  //   username,
  //   setUsername
}) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: student.name,
    email: student.email,
    username: student.username,
  });

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/edit/${student.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((student) => {
          setStudents((current) =>
            current.map((currentStudent) => {
              if (currentStudent.id === student.id) {
                return student;
              } else {
                return currentStudent;
              }
            })
          );
          setEditing(false);
          setFormData({
            name: "",
            email: "",
            username: "",
          });
        });
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <>
      <FormStyle>
      <h2>Edit Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Full Name:{" "}
              <input
                type="text"
                className="user-full-name"
                autoComplete="off"
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="input">
            <label>
              Email:{" "}
              <input
                type="text"
                className="user-email"
                autoComplete="off"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="input">
            <label>
              Username:{" "}
              <input
                type="text"
                className="username"
                autoComplete="off"
                name="username"
                value={formData.username}
                onChange={handleChange}
              ></input>
            </label>
          </div>

          <StyledButton>{isLoading ? "Loading..." : "Submit"}</StyledButton>
          <StyledButton onClick={handleCancelEdit}>Cancel</StyledButton>
        </form>
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      </FormStyle>
    </>
  );
}

export default StudentEdit;

const FormStyle = styled.div`
  background-color: #f5e4d7;
  box-shadow: 2px 2px 8px #888888;
  padding: 40px;
  display: grid;
  margin: 20px;
  // justify-items: end; (works on title! wtf)
`;

const StudentInfoContainerStyle = styled.div`
  background-color: white;
  border-radius: 3%;
  width: 70vw;
`;

const StyledButton = styled.button`
background-color: #f5e4d7;
padding: 5px 15px;
margin: 5px;
border: 3px solid #73877b;
border-radius: 7%;
color: #73877b;
font-size 1.05em;
cursor: pointer;
`;
