import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TeacherSignUp from "./components/TeacherSignUp"
import Login from "./components/Login"
import DashboardContainer from "./pages/DashboardContainer"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <TeacherSignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <DashboardContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
