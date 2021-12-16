import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function TeacherSignUp({setTeacher}) {
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
      }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => setTeacher(null));
        history.push("/login")
      } else {
        resp.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            Password Confirmation:
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
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>
      </form>
      <div className="error-wrapper">
        {errors.length > 0 && errors.map((error) => <p key={error}>{error}</p>)}
      </div>
    </>
  );
}

export default TeacherSignUp;
