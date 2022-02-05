import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeacherSignUp from "./components/TeacherSignUp";
import Login from "./components/Login";
import DashboardContainer from "./pages/DashboardContainer";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json()
        .then((user) => {
          setUser(user) 
          setIsTeacher(user.is_teacher);
        })
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
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
