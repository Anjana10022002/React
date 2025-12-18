import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="navbar-brand">My App</h2>
            <div className="links">
                <NavLink to='/login' className="nav-link">Login</NavLink>     
                <NavLink to='/register' className="nav-link">Register</NavLink> 
            </div>
        </nav>
    );
}
export default Navbar;