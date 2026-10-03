import { Link } from "react-router-dom";
import {
  HeartPulse,
  CalendarDays,
  UserRound,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-badge">
              <HeartPulse size={17} />
              Healthcare Made Simple
            </span>

            <h1>
              Take control of
              <span> your health.</span>
            </h1>

            <p>
              Manage appointments, track your health,
              explore trusted health information and
              organize your healthcare journey in one place.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-btn">
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link to="/doctors" className="secondary-btn">
                Find a Doctor
              </Link>
            </div>

            <div className="hero-features">
              <div>
                <CheckCircle2 size={18} />
                Easy to use
              </div>

              <div>
                <CheckCircle2 size={18} />
                Responsive
              </div>

              <div>
                <CheckCircle2 size={18} />
                Organized
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="health-main-card">

              <div className="health-card-top">
                <div>
                  <span>Health Overview · Demo</span>
                  <h3>Good morning, username 👋</h3>
                </div>

                <div className="health-icon">
                  <HeartPulse size={24} />
                </div>
              </div>

              <div className="health-score">

                <div className="score-circle">
                  <strong>82</strong>
                  <span>Health Score</span>
                </div>

                <div className="health-info">

                  <div>
                    <span>Heart Rate</span>
                    <strong>72 BPM</strong>
                  </div>

                  <div>
                    <span>Blood Pressure</span>
                    <strong>120/80</strong>
                  </div>

                  <div>
                    <span>Activity</span>
                    <strong>6,420 steps</strong>
                  </div>

                </div>
              </div>

              <p className="demo-data-note">
                Sample data for demonstration only.
              </p>

            </div>

            <div className="floating-card appointment-floating">
              <CalendarDays size={20} />

              <div>
                <span>Next Appointment</span>
                <strong>Tomorrow · 10:30 AM</strong>
              </div>
            </div>

            <div className="floating-card activity-floating">
              <Activity size={20} />

              <div>
                <span>Today's Activity</span>
                <strong>Good Progress</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Everything you need for
            <span> better health management</span>
          </h2>

          <p>
            Simple tools to help you organize and
            manage your healthcare journey.
          </p>

        </div>

        <div className="service-grid">

          <div className="service-card">

            <div className="service-icon">
              <UserRound />
            </div>

            <h3>Find Doctors</h3>

            <p>
              Explore doctors and healthcare
              professionals by specialization.
            </p>

            <Link to="/doctors">
              Explore Doctors
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="service-card">

            <div className="service-icon">
              <CalendarDays />
            </div>

            <h3>Appointments</h3>

            <p>
              Manage your upcoming appointments
              and healthcare visits.
            </p>

            <Link to="/register">
              Manage Appointments
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="service-card">

            <div className="service-icon">
              <Activity />
            </div>

            <h3>Health Tracking</h3>

            <p>
              Monitor important health metrics
              and keep your information organized.
            </p>

            <Link to="/register">
              Start Tracking
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="service-card">

            <div className="service-icon">
              <ShieldCheck />
            </div>

            <h3>Health Records</h3>

            <p>
              Keep your healthcare information
              organized in one place.
            </p>

            <Link to="/register">
              Explore Records
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-item">
            <strong>24/7</strong>
            <span>Platform Access</span>
          </div>

          <div className="stat-item">
            <strong>4+</strong>
            <span>Health Tools</span>
          </div>

          <div className="stat-item">
            <strong>100%</strong>
            <span>Responsive Design</span>
          </div>

          <div className="stat-item">
            <strong>1</strong>
            <span>Organized Platform</span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">

          <div>
            <span>GET STARTED TODAY</span>

            <h2>
              Your healthcare journey,
              <br />
              organized in one place.
            </h2>

            <p>
              Create your account and explore the
              Health platform.
            </p>
          </div>

          <Link to="/register" className="primary-btn">
            Create Account
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;