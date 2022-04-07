import "./index.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav_bar">
        <h2 className="nav_brand">Fa</h2>
        <h1 className="nav_title">Form Auth</h1>
        <ul className="nav_links">
          <Link to="/" className="nav_link">
            Login
          </Link>
          <Link to="/signup" className="nav_link">
            Signup
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
