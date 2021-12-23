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
}) {

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: ""
    })

  let history = useHistory();

  function handleChange(e) {
    let key = e.target.name
    let value = e.target.value
    setFormData({...formData, [key]: value})
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
        resp.json().then((user) => {
          setSignup(false);
        });
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <>
      {/* <FormStyle> */}
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
          <div className="button-submit">
            <button type="submit">
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      {/* </FormStyle> */}
    </>
  );
}

export default StudentSignUp;

const FormStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: 100px;
  justify-content: center;
  button {
    margin-top: 15px;
  }
  div {
    margin-top: 15px;
  }
`;
