import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

function Login({ setUser, setIsTeacher }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  function teacherAdmin(user) {
    if (user.is_teacher) {
      setIsTeacher(true)
    } else {
      setIsTeacher(false)
    }
  }

  function handleBackToSignUp() {
    history.push("/signup")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          teacherAdmin(user);
          history.push("/dashboard");
        });
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  };

  return (
    <LoginStyle>
      <StyledBackButton onClick={handleBackToSignUp}>Sign Up</StyledBackButton>
      <FormStyle>
        <h2>Log In</h2>
        <FormInternalStyle onSubmit={handleSubmit}>
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
          <div className="button-submit">
            <StyledButton type="submit">{isLoading ? "Loading..." : "Log In"}</StyledButton>
          </div>
        </FormInternalStyle>
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
        

      </FormStyle>
      

    </LoginStyle>
  );
}

export default Login;

const LoginStyle = styled.div`
display: grid;
grid-template-rows: 1fr 400px;
align-items: center;
margin: 20px auto;
width:100vw;
`;


const FormStyle = styled.div`
background-color: #ffd23f;
box-shadow: 2px 2px 8px #888888;
padding-top: 40px;
padding-bottom: 10px;
display: grid;
justify-content: center;
align-self: center;
margin: 100px auto;
width:400px;
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

const StyledBackButton = styled.button`
margin-left: auto;
margin-right: 40px;
padding: 0;
background: none;
border: none;
cursor: pointer;
font-size: 15px;
`;