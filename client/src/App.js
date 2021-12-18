import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TeacherSignUp from "./components/TeacherSignUp"
import Login from "./components/Login"
import DashboardContainer from "./pages/DashboardContainer"
import { useState, useEffect } from "react";

function App() {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setTeacher);
      }
    });
  }, []);

  
  
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar teacher={teacher} setTeacher={setTeacher}/>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <TeacherSignUp setTeacher={setTeacher}/>
          </Route>
          <Route exact path="/login">
            <Login setTeacher={setTeacher} teacher={teacher}/>
          </Route>
          {teacher && 
          <Route exact path="/dashboard">
            <DashboardContainer />
          </Route>}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
