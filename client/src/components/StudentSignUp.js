import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function StudentSignUp({
  user,
  setUser,
  setSignup,
  userFullName,
  setUserFullName,
  userEmail,
  setUserEmail,
  username,
  setUsername,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
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
      <FormStyle>
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
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
          <StyledButton onClick={handleCancelAddStudent}>Cancel</StyledButton>
        </form>
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      </FormStyle>
    </>
  );
}

export default StudentSignUp;

const FormStyle = styled.div`
  background-color: #f5e4d7;
  box-shadow: 2px 2px 8px #888888;
  padding: 40px;
  display: grid;
  margin: 20px;
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
