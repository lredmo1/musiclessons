import { useState } from "react";

import styled from "styled-components";

function StudentEdit({
  student,
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
    userFullName: student.name,
    userEmail: student.email,
    username: student.username
    })

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(student)

        // setIsLoading(true);
        // fetch("/edit/student", {
        //   method: "PATCH",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // }).then((resp) => {
        //   setIsLoading(false);
        //   if (resp.ok) {
        //     resp.json().then((student) => {
        //         // setShelters(current => [...current])
        //         setFormData({
        //             userFullName: "",
        //             userEmail: "",
        //             username: ""
        //         })
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
                name="userFullName"
                value={formData.userFullName}
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
                name="userEmail"
                value={formData.userEmail}
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
          
          <div className="button-submit">
            <button type="submit">Submit
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
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
