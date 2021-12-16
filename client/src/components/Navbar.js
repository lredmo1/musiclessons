import { Link } from "react-router-dom"

function Navbar() {
    return <>
    <Link to="/" className="nav-links"> Home </Link>
    <Link to="/signup" className="nav-links"> Sign Up </Link>
    <Link to="/login" className="nav-links"> Log In </Link>
    </>;
  }
  
  export default Navbar;