import { NavLink } from "react-router-dom";
const NavBar =()=>{
    return(
        <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="fas fa-moon navbar-brand-icon"></i>
            Turkify Travels
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tours">
                  Tours
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/destinations">
                  Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cuisine">
                  Cuisine
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/info">
                  Info
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
};
export default NavBar;