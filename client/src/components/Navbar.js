import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import styled from 'styled-components'; 

function Navbar({user, setUser}) {
  let history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
      history.push("/login")
    });
  }

    return (<NavbarStyle>
    {/* <Link to="/" className="nav-links" style={{textDecoration: 'none'}}> Home </Link> */}
    {user? 
      <>
      {/* <Link to="/dashboard" className="nav-links" style={{textDecoration: 'none'}}> Dashboard </Link> */}
      <div onClick={handleLogout}>Log Out</div> 
      </>:
      <>
        {/* <Link to="/signup" className="nav-links" style={{textDecoration: 'none'}}> Sign Up </Link> */}
        <Link to="/login" className="nav-links" style={{textDecoration: 'none'}}> {user ? "Log Out" : "Log In"} </Link>
      </>
    }
    </NavbarStyle>)
  }
  
  export default Navbar;

  const NavbarStyle = styled.div`
  display: grid;
  padding-right:40px;
  padding-top: 10px;
  // grid-template-columns: 100px);
  place-items: center;
  justify-content: end;
  text-decoration: none;
  a:visited {
    color: black;
  };
  cursor: pointer;
  `