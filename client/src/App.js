import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TeacherSignUp from "./components/TeacherSignUp";
import Login from "./components/Login";
import DashboardContainer from "./pages/DashboardContainer";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isTeacher, setIsTeacher] = useState(true);

  // console.log(user)
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar user={user} setUser={setUser} /> */}
        <Switch>
          {user ? (
            <Route exact path="/">
              <DashboardContainer user={user} isTeacher={isTeacher} setUser={setUser}/>
            </Route>
          ) : (
            <Route exact path="/">
              <TeacherSignUp setUser={setUser} user={user}/>
            </Route>
          )}
          <Route exact path="/signup">
            <TeacherSignUp setUser={setUser} user={user}/>
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} user={user} setIsTeacher={setIsTeacher} />
          </Route>
          {user && (
            <Route exact path="/dashboard">
              <DashboardContainer user={user} isTeacher={isTeacher} setUser={setUser}/>
            </Route>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
