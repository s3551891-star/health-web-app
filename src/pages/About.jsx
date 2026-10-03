import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">

          <span className="page-eyebrow">
            <HeartPulse
              size={16}
              aria-hidden="true"
            />
            ABOUT HEALTH
          </span>

          <h1>
            Making healthcare
            <span> simpler and more organized.</span>
          </h1>

          <p>
            Health is a modern healthcare platform concept
            designed to bring everyday healthcare tools,
            information and organization together in one place.
          </p>

        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">

        <div className="about-container about-mission-grid">

          <div className="about-mission-content">

            <span className="about-section-label">
              OUR MISSION
            </span>

            <h2>
              Technology that helps people
              stay organized about their health.
            </h2>

            <p>
              Managing healthcare can involve appointments,
              health information, medications and many
              different pieces of information. Health aims
              to provide a simple digital space for organizing
              these everyday healthcare activities.
            </p>

            <p>
              The platform focuses on a clean user experience,
              accessible information and responsive design
              across desktop, tablet and mobile devices.
            </p>

            <Link
              to="/services"
              className="primary-btn"
            >
              Explore Services

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

          {/* VISUAL CARD */}
          <div className="about-visual-card">

            <div
              className="about-visual-icon"
              aria-hidden="true"
            >
              <HeartPulse size={35} />
            </div>

            <h3>
              Healthcare, organized.
            </h3>

            <p>
              One platform for everyday healthcare
              management and information.
            </p>

            <div className="about-mini-stats">

              <div>
                <strong>24/7</strong>
                <span>Platform Access</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Core Services</span>
              </div>

            </div>

            <small className="about-demo-note">
              Platform information shown for this demo.
            </small>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="about-values">

        <div className="about-container">

          <div className="about-section-heading">

            <span>
              OUR VALUES
            </span>

            <h2>
              Built around simple principles
            </h2>

            <p>
              The Health platform focuses on making
              healthcare information and tools easier
              to organize and access.
            </p>

          </div>

          <div className="about-values-grid">

            {/* VALUE 1 */}
            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <Users size={23} />
              </div>

              <h3>
                User Focused
              </h3>

              <p>
                A simple interface designed around
                everyday user needs and accessibility.
              </p>

            </div>

            {/* VALUE 2 */}
            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <ShieldCheck size={23} />
              </div>

              <h3>
                Organized
              </h3>

              <p>
                Healthcare activities and information
                are presented in a clear and structured way.
              </p>

            </div>

            {/* VALUE 3 */}
            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <Activity size={23} />
              </div>

              <h3>
                Accessible
              </h3>

              <p>
                Responsive design helps provide a consistent
                experience across different devices.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="about-container about-cta-container">

          <div>

            <span>
              START YOUR JOURNEY
            </span>

            <h2>
              Explore a simpler way to
              organize your healthcare.
            </h2>

          </div>

          <Link
            to="/register"
            className="primary-btn"
          >
            Get Started

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;