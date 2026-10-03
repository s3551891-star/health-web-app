import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Lock,
  Mail,
} from "lucide-react";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showForgotMessage, setShowForgotMessage] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() && password.trim()) {
      setShowMessage(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  const handleForgotPassword = () => {
    setShowForgotMessage(true);
    setShowMessage(false);
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
              WELCOME BACK
            </span>

            <h1>
              Your health,
              <span> organized.</span>
            </h1>

            <p>
              Sign in to manage appointments, track your
              health information and continue your healthcare
              journey.
            </p>

            <div className="auth-feature">
              <div aria-hidden="true">✓</div>
              <span>
                Manage your appointments
              </span>
            </div>

            <div className="auth-feature">
              <div aria-hidden="true">✓</div>
              <span>
                Track your health information
              </span>
            </div>

            <div className="auth-feature">
              <div aria-hidden="true">✓</div>
              <span>
                Access your healthcare information
              </span>
            </div>

          </div>

        </div>

        {/* FORM SIDE */}
        <div className="auth-form-section">

          <div className="auth-form-card">

            <div className="auth-form-heading">

              <h2>
                Welcome back
              </h2>

              <p>
                Enter your details to access your account.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="auth-form-group">

                <label htmlFor="login-email">
                  Email Address
                </label>

                <div className="auth-input-wrapper">

                  <Mail
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setShowMessage(false);
                      setShowForgotMessage(false);
                    }}
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div className="auth-form-group">

                <div className="password-label-row">

                  <label htmlFor="login-password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="forgot-password-btn"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </button>

                </div>

                <div className="auth-input-wrapper">

                  <Lock
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setShowMessage(false);
                      setShowForgotMessage(false);
                    }}
                    autoComplete="current-password"
                    required
                  />

                </div>

              </div>

              {/* FORGOT PASSWORD DEMO MESSAGE */}
              {showForgotMessage && (
                <div
                  className="auth-demo-message"
                  role="status"
                  aria-live="polite"
                >
                  Password recovery will be connected
                  when backend authentication is added.
                </div>
              )}

              {/* LOGIN SUCCESS DEMO MESSAGE */}
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
                    Demo login successful. Opening
                    your dashboard...
                  </span>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="primary-btn auth-submit-btn"
              >
                Sign In

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

            {/* REGISTER */}
            <p className="auth-switch">
              Don't have an account?

              <Link to="/register">
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;