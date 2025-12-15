import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <span className="navbar-brand">My App</span>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/crud" className="nav-link">CRUD</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
