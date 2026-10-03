import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  HeartPulse,
  Home,
  SearchX,
} from "lucide-react";

function NotFound() {
  return (
    <div className="not-found-page">

      <main className="not-found-container">

        <div
          className="not-found-icon"
          aria-hidden="true"
        >
          <SearchX size={38} />
        </div>

        <span className="not-found-code">
          404
        </span>

        <h1>
          Page not found
        </h1>

        <p>
          Sorry, the page you are looking for
          does not exist or may have been moved.
        </p>

        <div className="not-found-actions">

          <Link
            to="/"
            className="primary-btn"
          >
            <Home
              size={18}
              aria-hidden="true"
            />
            Back to Home
          </Link>

          <Link
            to="/doctors"
            className="secondary-btn"
          >
            Find a Doctor
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>

        <Link
          to="/"
          className="not-found-back-link"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
          />
          Return to Health
        </Link>

        <div className="not-found-brand">

          <HeartPulse
            size={20}
            aria-hidden="true"
          />

          <span>
            Health
          </span>

        </div>

      </main>

    </div>
  );
}

export default NotFound;