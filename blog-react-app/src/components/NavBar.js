import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Ayhan Blog</h1>
      <div className="links">
      <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
         <Link to="/create" style={{backgroundColor:"orangered",borderRadius:"5px",color:"white"}}>New Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
