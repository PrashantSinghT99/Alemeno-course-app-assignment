import React from "react";
import "./Header.css"; // Create a CSS file for your header styles
import Logo from "../../Assests/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Utility/loggedUserSlice";
import { useNavigate } from "react-router-dom";
function Header() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>CourseHub</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">My Dashboard</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
