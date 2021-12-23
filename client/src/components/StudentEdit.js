import { useState } from "react";

import styled from "styled-components";

function StudentEdit({
  student,
  userFullName,
  setUserFullName,
  userEmail,
  setUserEmail,
  username,
  setUsername
}) {
    const [formData, setFormData] = useState({
    userFullName: student.name,
    userEmail: student.email,
    username: student.username
    })

    function handleSubmit(e) {
        console.log("edited!")
        // e.preventDefault();
        // setIsLoading(true);
        // fetch("/signup/student", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name: userFullName,
        //     email: userEmail,
        //     username,
        //     password,
        //     password_confirmation: passwordConfirmation,
        //     teacher_id: user.id,
        //   }),
        // }).then((resp) => {
        //   setIsLoading(false);
        //   if (resp.ok) {
        //     resp.json().then((user) => {
        //       setSignup(false);
        //     });
        //   } else {
        //     resp.json().then((data) => setErrors(data.errors));
        //   }
        // });
      }

  return (
    <>
      <FormStyle>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Full Name:{" "}
              <input
                type="text"
                className="user-full-name"
                autoComplete="off"
                value={formData.userFullName}
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
                value={formData.userEmail}
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
                value={formData.username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
          </div>
          
          <div className="button-submit">
            <button type="submit">Submit
              {/* {isLoading ? "Loading..." : "Sign Up"} */}
            </button>
          </div>
        </form>
        {/* <div className="error-wrapper">
          {errors.length > 0 &&
            errors.map((error) => <p key={error}>{error}</p>)}
        </div> */}
      </FormStyle>
    </>
  );
}

export default StudentEdit;

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
