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
    
      <EditBodyStyle>
      <h2>Edit Student</h2>
      <StyledExitButton onClick={handleCancelEdit}>×</StyledExitButton>
        <FormStyle onSubmit={handleSubmit}>
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
          
        </FormStyle>
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      </EditBodyStyle>
    
  );
}

export default StudentEdit;

const EditBodyStyle = styled.div`
  background-color: #ffd23f;
  box-shadow: 2px 2px 8px #888888;
  padding: 40px;
  display: grid;
  margin: 20px;
  width:300px;
  grid-template-areas:
  "title exit"
  "form form"
  "button .";
  h2 {
    text-shadow: 2px 2px  2px white;
    font-size: 2em;
    margin-top: 0;
  }
`;

const FormStyle = styled.form`
  display: grid;
  justify-items: end;
`;


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

const StyledExitButton = styled.button`
background-color: #ffd23f;
margin: 5px;
border: 1px solid black;
border-radius: 7%;
color: black;
font-size 1.5em;
cursor: pointer;
box-shadow: 2px 2px 8px #888888;
justify-items: end;
height: 30px;
margin: 0px; 

`;
