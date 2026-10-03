import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Lock,
  Mail,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim() &&
      email.trim() &&
      password.trim()
    ) {
      setShowMessage(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-info">

          <Link
            to="/"
            className="auth-logo"
            aria-label="Health home"
          >
            <span>
              <HeartPulse
                size={24}
                aria-hidden="true"
              />
            </span>

            Health
          </Link>

          <div className="auth-info-content">

            <span className="auth-eyebrow">
              JOIN HEALTH
            </span>

            <h1>
              Start your
              <span> healthier journey.</span>
            </h1>

            <p>
              Create your account and organize your
              appointments, health information and
              healthcare activities in one place.
            </p>

            <div className="auth-feature">
              <div aria-hidden="true">✓</div>
              <span>
                Manage appointments
              </span>
            </div>

            <div className="auth-feature">
              <div aria-hidden="true">✓</div>
              <span>
                Track important health metrics
              </span>
            </div>

            <div className="auth-feature">
              <div aria-hidden="true">✓</div>
              <span>
                Explore health information
              </span>
            </div>

          </div>

        </div>

        {/* FORM SIDE */}
        <div className="auth-form-section">

          <div className="auth-form-card">

            <div className="auth-form-heading">

              <h2>
                Create your account
              </h2>

              <p>
                Fill in your details to get started.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="auth-form-group">

                <label htmlFor="register-name">
                  Full Name
                </label>

                <div className="auth-input-wrapper">

                  <UserRound
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="register-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setShowMessage(false);
                    }}
                    autoComplete="name"
                    required
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div className="auth-form-group">

                <label htmlFor="register-email">
                  Email Address
                </label>

                <div className="auth-input-wrapper">

                  <Mail
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setShowMessage(false);
                    }}
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div className="auth-form-group">

                <label htmlFor="register-password">
                  Password
                </label>

                <div className="auth-input-wrapper">

                  <Lock
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="register-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setShowMessage(false);
                    }}
                    autoComplete="new-password"
                    required
                    minLength={6}
                  />

                </div>

              </div>

              {/* SUCCESS MESSAGE */}
              {showMessage && (
                <div
                  className="auth-demo-message"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2
                    size={17}
                    aria-hidden="true"
                  />

                  <span>
                    Demo account created successfully.
                    Opening your dashboard...
                  </span>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="primary-btn auth-submit-btn"
              >
                Create Account

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </button>

            </form>

            {/* DIVIDER */}
            <div className="auth-divider">
              <span>OR</span>
            </div>

            {/* LOGIN */}
            <p className="auth-switch">
              Already have an account?

              <Link to="/login">
                Sign In
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;