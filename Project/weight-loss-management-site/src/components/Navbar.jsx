import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand">
        <h4>Weight Loss Management</h4>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
      >
        <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/add-record" className="nav-link">
              Records
            </NavLink>
          <li>

            <NavLink to="/records" className="nav-link">
                Add Weight
            </NavLink>  
            </li>  
          </li>
            <li className="nav-item">
            <NavLink to="/loss-calculator" className="nav-link">
                Loss Calculator
            </NavLink>
          </li>
            <li className="nav-item">
            <NavLink to="/logout" className="nav-link">
                Logout
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
