import { NavLink, Link } from "react-router-dom";
import { HeartPulse, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Health home"
        >
          <span className="logo-icon">
            <HeartPulse size={22} />
          </span>

          <span>Health</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links" aria-label="Main navigation">

          <NavLink
            to="/"
            end
            className={getNavLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/doctors"
            className={getNavLinkClass}
          >
            Doctors
          </NavLink>

          <NavLink
            to="/services"
            className={getNavLinkClass}
          >
            Services
          </NavLink>

          <NavLink
            to="/articles"
            className={getNavLinkClass}
          >
            Articles
          </NavLink>

          <NavLink
            to="/dashboard"
            className={getNavLinkClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/about"
            className={getNavLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavLinkClass}
          >
            Contact
          </NavLink>

        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="navbar-actions">

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="get-started-btn"
          >
            Get Started
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >

          <NavLink
            to="/"
            end
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/doctors"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Doctors
          </NavLink>

          <NavLink
            to="/services"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/articles"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Articles
          </NavLink>

          <NavLink
            to="/dashboard"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/about"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <div className="mobile-actions">

            <Link
              to="/login"
              className="login-btn"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="get-started-btn"
              onClick={closeMenu}
            >
              Get Started
            </Link>

          </div>

        </nav>
      )}
    </header>
  );
}

export default Navbar;