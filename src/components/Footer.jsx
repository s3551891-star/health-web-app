import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Link
            to="/"
            className="footer-logo"
            aria-label="Health home"
          >
            <HeartPulse size={22} />
            <span>Health</span>
          </Link>

          <p>
            Simple, modern and accessible healthcare
            management for a healthier tomorrow.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav
          className="footer-links"
          aria-label="Quick links"
        >
          <h3>Quick Links</h3>

          <Link to="/doctors">
            Doctors
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/articles">
            Articles
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/about">
            About
          </Link>
        </nav>

        {/* SUPPORT */}
        <nav
          className="footer-links"
          aria-label="Support links"
        >
          <h3>Support</h3>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </nav>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {currentYear} Health. All rights reserved.
        </p>

        <p>
          Healthcare Management Platform
        </p>
      </div>

    </footer>
  );
}

export default Footer;