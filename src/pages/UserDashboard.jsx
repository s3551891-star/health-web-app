import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  HeartPulse,
  Pill,
  Plus,
  TrendingUp,
  UserRound,
} from "lucide-react";

function UserDashboard() {
  return (
    <div className="dashboard-page">

      {/* DASHBOARD HEADER */}
      <section className="dashboard-header">

        <div>
          <span className="dashboard-eyebrow">
            HEALTH DASHBOARD
          </span>

          <h1>
            Good morning, username 👋
          </h1>

          <p>
            Here's a quick overview of your sample
            health information and upcoming activities.
          </p>
        </div>

        <Link
          to="/appointments/book/1"
          className="primary-btn"
        >
          <Plus
            size={18}
            aria-hidden="true"
          />
          Book Appointment
        </Link>

      </section>

      {/* DEMO NOTICE */}
      <div
        className="dashboard-demo-notice"
        role="note"
      >
        <HeartPulse
          size={18}
          aria-hidden="true"
        />

        <span>
          This dashboard contains sample information
          for frontend demonstration only.
        </span>
      </div>

      {/* HEALTH SUMMARY */}
      <section className="dashboard-summary-grid">

        {/* HEART RATE */}
        <div className="dashboard-summary-card">

          <div
            className="summary-icon"
            aria-hidden="true"
          >
            <HeartPulse size={21} />
          </div>

          <div>
            <span>Heart Rate</span>
            <strong>72 BPM</strong>
            <small>Sample value</small>
          </div>

        </div>

        {/* ACTIVITY */}
        <div className="dashboard-summary-card">

          <div
            className="summary-icon"
            aria-hidden="true"
          >
            <Activity size={21} />
          </div>

          <div>
            <span>Daily Activity</span>
            <strong>6,420</strong>
            <small>Sample steps</small>
          </div>

        </div>

        {/* HEALTH SCORE */}
        <div className="dashboard-summary-card">

          <div
            className="summary-icon"
            aria-hidden="true"
          >
            <TrendingUp size={21} />
          </div>

          <div>
            <span>Health Score</span>
            <strong>82 / 100</strong>
            <small>Demo score</small>
          </div>

        </div>

        {/* MEDICATIONS */}
        <div className="dashboard-summary-card">

          <div
            className="summary-icon"
            aria-hidden="true"
          >
            <Pill size={21} />
          </div>

          <div>
            <span>Medications</span>
            <strong>2 Today</strong>
            <small>Demo reminders</small>
          </div>

        </div>

      </section>

      {/* MAIN DASHBOARD GRID */}
      <section className="dashboard-main-grid">

        {/* APPOINTMENT */}
        <div className="dashboard-card upcoming-appointment-card">

          <div className="dashboard-card-header">

            <div>
              <span>UPCOMING</span>
              <h2>Next Appointment</h2>
            </div>

            <CalendarDays
              size={22}
              aria-hidden="true"
            />

          </div>

          <div className="appointment-dashboard-content">

            <div
              className="dashboard-doctor-avatar"
              aria-hidden="true"
            >
              SA
            </div>

            <div className="dashboard-appointment-info">

              <h3>
                Dr. Sarah Ahmed
              </h3>

              <p>
                Cardiologist
              </p>

              <div className="dashboard-appointment-meta">

                <span>
                  <CalendarDays
                    size={15}
                    aria-hidden="true"
                  />
                  Tomorrow
                </span>

                <span>
                  <Clock3
                    size={15}
                    aria-hidden="true"
                  />
                  10:30 AM
                </span>

              </div>

            </div>

          </div>

          <div className="dashboard-appointment-footer">

            <span>
              <CheckCircle2
                size={16}
                aria-hidden="true"
              />
              Sample appointment
            </span>

            <Link to="/doctors/1">
              View Doctor

              <ArrowRight
                size={15}
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>

        {/* HEALTH OVERVIEW */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <span>
                HEALTH OVERVIEW
              </span>

              <h2>
                Today's Metrics
              </h2>
            </div>

            <Activity
              size={22}
              aria-hidden="true"
            />

          </div>

          <div className="health-metric-list">

            <div className="health-metric-item">

              <div>
                <span>
                  Blood Pressure
                </span>

                <strong>
                  120/80 mmHg
                </strong>
              </div>

              <small>
                Sample
              </small>

            </div>

            <div className="health-metric-item">

              <div>
                <span>
                  Heart Rate
                </span>

                <strong>
                  72 BPM
                </strong>
              </div>

              <small>
                Sample
              </small>

            </div>

            <div className="health-metric-item">

              <div>
                <span>
                  Sleep
                </span>

                <strong>
                  7h 35m
                </strong>
              </div>

              <small>
                Sample
              </small>

            </div>

            <div className="health-metric-item">

              <div>
                <span>
                  Daily Steps
                </span>

                <strong>
                  6,420
                </strong>
              </div>

              <small>
                Sample
              </small>

            </div>

          </div>

          <Link
            to="/dashboard/health-tracking"
            className="dashboard-card-link"
          >
            View Health Tracking

            <ArrowRight
              size={16}
              aria-hidden="true"
            />
          </Link>

        </div>

      </section>

      {/* LOWER GRID */}
      <section className="dashboard-lower-grid">

        {/* MEDICATIONS */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <span>
                MEDICATIONS
              </span>

              <h2>
                Today's Reminders
              </h2>
            </div>

            <Pill
              size={22}
              aria-hidden="true"
            />

          </div>

          <div className="medication-list">

            <div className="medication-item">

              <div
                className="medication-icon"
                aria-hidden="true"
              >
                <Pill size={18} />
              </div>

              <div>
                <strong>
                  Vitamin D
                </strong>

                <span>
                  1 tablet · 9:00 AM
                </span>
              </div>

              <span className="medication-status">
                Upcoming
              </span>

            </div>

            <div className="medication-item">

              <div
                className="medication-icon"
                aria-hidden="true"
              >
                <Pill size={18} />
              </div>

              <div>
                <strong>
                  Sample Medicine
                </strong>

                <span>
                  1 tablet · 8:00 PM
                </span>
              </div>

              <span className="medication-status">
                Upcoming
              </span>

            </div>

          </div>

          <Link
            to="/dashboard/medications"
            className="dashboard-card-link"
          >
            Manage Medications

            <ArrowRight
              size={16}
              aria-hidden="true"
            />
          </Link>

        </div>

        {/* QUICK ACTIONS */}
        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <span>
                QUICK ACTIONS
              </span>

              <h2>
                Manage Your Health
              </h2>
            </div>

          </div>

          <div className="quick-actions-grid">

            {/* BOOK APPOINTMENT */}
            <Link
              to="/appointments/book/1"
              className="quick-action"
            >
              <CalendarDays
                size={20}
                aria-hidden="true"
              />

              <span>
                Book Appointment
              </span>
            </Link>

            {/* HEALTH TRACKING */}
            <Link
              to="/dashboard/health-tracking"
              className="quick-action"
            >
              <Activity
                size={20}
                aria-hidden="true"
              />

              <span>
                Track Health
              </span>
            </Link>

            {/* MEDICATIONS */}
            <Link
              to="/dashboard/medications"
              className="quick-action"
            >
              <Pill
                size={20}
                aria-hidden="true"
              />

              <span>
                Medications
              </span>
            </Link>

            {/* HEALTH RECORDS */}
            <Link
              to="/dashboard/health-records"
              className="quick-action"
            >
              <FileText
                size={20}
                aria-hidden="true"
              />

              <span>
                Health Records
              </span>
            </Link>

            {/* PROFILE */}
            <Link
              to="/dashboard/profile"
              className="quick-action"
            >
              <UserRound
                size={20}
                aria-hidden="true"
              />

              <span>
                My Profile
              </span>
            </Link>

          </div>

        </div>

      </section>

      {/* RECENT ACTIVITY */}
      <section className="dashboard-card recent-activity-card">

        <div className="dashboard-card-header">

          <div>
            <span>
              ACTIVITY
            </span>

            <h2>
              Recent Activity
            </h2>
          </div>

        </div>

        <div className="activity-list">

          {/* ACTIVITY 1 */}
          <div className="activity-item">

            <div
              className="activity-icon"
              aria-hidden="true"
            >
              <CalendarDays size={18} />
            </div>

            <div>
              <strong>
                Appointment scheduled
              </strong>

              <span>
                Appointment with Dr. Sarah Ahmed
              </span>
            </div>

            <small>
              Today
            </small>

          </div>

          {/* ACTIVITY 2 */}
          <div className="activity-item">

            <div
              className="activity-icon"
              aria-hidden="true"
            >
              <Activity size={18} />
            </div>

            <div>
              <strong>
                Health metric updated
              </strong>

              <span>
                Daily activity reached 6,420 steps
              </span>
            </div>

            <small>
              Today
            </small>

          </div>

          {/* ACTIVITY 3 */}
          <div className="activity-item">

            <div
              className="activity-icon"
              aria-hidden="true"
            >
              <Pill size={18} />
            </div>

            <div>
              <strong>
                Medication reminder added
              </strong>

              <span>
                Vitamin D reminder added
              </span>
            </div>

            <small>
              Yesterday
            </small>

          </div>

          {/* ACTIVITY 4 */}
          <div className="activity-item">

            <div
              className="activity-icon"
              aria-hidden="true"
            >
              <FileText size={18} />
            </div>

            <div>
              <strong>
                Health record updated
              </strong>

              <span>
                Latest health information added
              </span>
            </div>

            <small>
              Yesterday
            </small>

          </div>

        </div>

      </section>

    </div>
  );
}

export default UserDashboard;