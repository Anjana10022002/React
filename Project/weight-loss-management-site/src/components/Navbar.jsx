import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h4">
        Weight Loss Management
      </span>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 bg-dark">
          <li className="breadcrumb-item">
            <NavLink to="/home" className="text-light text-decoration-none">
              Home
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink to="/add-record" className="text-light text-decoration-none">
              Add Weight
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink to="/records" className="text-light text-decoration-none">
              Weight list
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink
              to="/loss-calculator"
              className="text-light text-decoration-none"
            >
              Loss Calculator
            </NavLink>
          </li>

          <li className="breadcrumb-item">
            <NavLink to="/logout" className="text-danger text-decoration-none">
              Logout
            </NavLink>
          </li>
        </ol>
      </nav>
    </nav>
  );
}

export default Navbar;
