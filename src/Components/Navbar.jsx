import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Question 1
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/page2" className="nav-link">
            Question 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
