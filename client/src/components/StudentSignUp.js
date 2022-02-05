import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function StudentSignUp({
  setSignup,
  setStudents,
  handleCancelAddStudent
}) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    is_teacher: false,
  });

  let history = useHistory();

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/signup/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((student) => {
          setSignup(false);
          setStudents((currentStudents) => [...currentStudents, student]);
        });
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <>
      <AddBodyStyle>
        <h2>Add New Student</h2>
        <StyledAddButton onClick={handleCancelAddStudent}>×</StyledAddButton>
        <FormStyle onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Student Name:{" "}
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
              Student Email:{" "}
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
          <div className="input">
            <label>
              Password:{" "}
              <input
                type="password"
                className="password"
                autoComplete="current-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="input">
            <label>
              Password Confirmation:
              <input
                type="password"
                className="password-confirmation"
                autoComplete="current-password"
                name="password_confirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <StyledButton type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
          </StyledButton>
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>

        </FormStyle>

      </AddBodyStyle>
    </>
  );
}

export default StudentSignUp;

const AddBodyStyle = styled.div`
  background-color: #ffd23f;
  box-shadow: 2px 2px 8px #888888;
  padding: 40px;
  display: grid;
  margin: 20px;
  grid-template-areas:
  "title exit"
  "form form"
  "button .";
  // justify-items: end; (works on title! wtf)
  h2 {
    text-shadow: 2px 2px 2px white;
    font-size: 2em;
    margin-top: 0;
  }
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

const StyledAddButton = styled.button`
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

const FormStyle = styled.form`
  display: grid;
  justify-items: end;
  .error-wrapper {
    justify-self: center;
    background-color: white;
    padding: 0px 10px; 
    border-radius: 5%;
    box-shadow: 2px 2px 8px #888888;
    margin: 10px;
  }
`;