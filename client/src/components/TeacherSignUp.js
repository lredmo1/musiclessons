import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar"


function TeacherSignUp({ setUser, user }) {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userFullName,
        email: userEmail,
        username,
        password,
        password_confirmation: passwordConfirmation,
        is_teacher: true
      }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => setUser(null));
        history.push("/login");
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <>
    <Navbar user={user} setUser={setUser} />
      <FormStyle>
      <h2>Sign Up</h2>
        <FormInternalStyle onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Full Name:{" "}
              <input
                type="text"
                className="user-full-name"
                autoComplete="off"
                value={userFullName}
                onChange={(e) => setUserFullName(e.target.value)}
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
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="input">
            <label>
              Password Confirmation:{" "}
              <input
                type="password"
                className="password-confirmation"
                autoComplete="current-password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="button-submit">
            <StyledButton type="submit">
              {isLoading ? "Loading..." : "Sign Up"}
            </StyledButton>
          </div>
        
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
        </FormInternalStyle>
      </FormStyle>
    </>
  );
}

export default TeacherSignUp;

const FormStyle = styled.div`
background-color: #ffd23f;
box-shadow: 2px 2px 8px #888888;
padding-top: 40px;
padding-bottom: 10px;
display: grid;
justify-content: center;
align-self: center;
margin: 100px auto;
width:500px;
h2 {
  text-shadow: 2px 2px  2px white;
  font-size: 2em;
  margin-top: 0;
  padding-bottom: 0px;
  text-align: center;
}
`;

const FormInternalStyle = styled.form`
  display: grid;
  justify-items: end;
  input {
    height: 50px;
    width: 200px;
    font-size: 30px;
    border-radius: 5%;
    margin-bottom: 10px;
  }
  .error-wrapper {
    justify-self: center;
    background-color: white;
    padding: 0px 10px; 
    border-radius: 5%;
    box-shadow: 2px 2px 8px #888888;
    margin: 10px;
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