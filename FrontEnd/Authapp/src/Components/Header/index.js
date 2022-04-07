import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onLogOut = () => {
    Cookies.remove("jwt_Token", { path: "/" });
    navigate("/", { replace: true });
  };
  return (
    <div>
      <nav className="nav_bar">
        <h2 className="nav_brand">Fa</h2>
        <h1 className="nav_title">Form Auth</h1>
        <ul className="nav_links">
          <button onClick={onLogOut} className="nav_btn">
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
