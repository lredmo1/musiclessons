import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
    <>
      <FormStyle>
        <form onSubmit={handleSubmit}>
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
            <button type="submit">{isLoading ? "Loading..." : "Log In"}</button>
          </div>
        </form>

        <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div>
      </FormStyle>
    </>
  );
}

export default Login;

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
