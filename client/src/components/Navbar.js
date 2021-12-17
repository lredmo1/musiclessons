import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

function Navbar({teacher, setTeacher}) {
  let history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setTeacher(null);
      }
      history.push("/login")
    });
  }

    return <>
    <Link to="/" className="nav-links"> Home </Link>
    {teacher? 
      <>
      <Link to="/dashboard" className="nav-links"> Dashboard </Link>
      <div onClick={handleLogout}>Log Out</div> 
      </>:
      <>
        <Link to="/signup" className="nav-links"> Sign Up </Link>
        <Link to="/login" className="nav-links"> {teacher ? "Log Out" : "Log In"} </Link>
      </>
    }
    </>;
  }
  
  export default Navbar;