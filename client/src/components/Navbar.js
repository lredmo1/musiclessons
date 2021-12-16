import { Link } from "react-router-dom"

function Navbar() {
    return <>
    <Link exact to="/" className="nav-links"> Home </Link>
    <Link exact to="/signup" className="nav-links"> Sign Up </Link>
    <Link exact to="/login" className="nav-links"> Log In </Link>
    </>;
  }
  
  export default Navbar;