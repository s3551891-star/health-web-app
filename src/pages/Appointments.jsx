import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Plus,
  Stethoscope,
  XCircle,
} from "lucide-react";

const initialAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    date: "October 4, 2026",
    time: "10:30 AM",
    location: "Lahore",
    status: "Upcoming",
    initials: "SA",
  },
  {
    id: 2,
    doctor: "Dr. Hamza Khan",
    specialty: "General Physician",
    date: "October 8, 2026",
    time: "02:00 PM",
    location: "Lahore",
    status: "Upcoming",
    initials: "HK",
  },
  {
    id: 3,
    doctor: "Dr. Ayesha Malik",
    specialty: "Dermatologist",
    date: "September 25, 2026",
    time: "11:00 AM",
    location: "Lahore",
    status: "Completed",
    initials: "AM",
  },
];

function Appointments() {
  const [appointments, setAppointments] =
    useState(initialAppointments);

  const [message, setMessage] = useState("");

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Upcoming"
  );

  const pastAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Completed"
  );

  const handleCancel = (id) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status: "Cancelled",
            }
          : appointment
      )
    );

    setMessage(
      "Appointment cancelled in the frontend demo."
    );

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="appointments-page">

      {/* HEADER */}
      <section className="appointments-header">

        <div className="appointments-container">

          <Link
            to="/dashboard"
            className="back-dashboard-link"
          >
            <ArrowLeft
              size={17}
              aria-hidden="true"
            />
            Back to Dashboard
          </Link>

          <div className="appointments-heading">

            <span className="page-eyebrow">
              <CalendarDays
                size={16}
                aria-hidden="true"
              />
              APPOINTMENTS
            </span>

            <h1>
              Manage your appointments
            </h1>

            <p>
              View your upcoming appointments and
              keep your healthcare visits organized.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="appointments-container appointments-content">

        {/* TOP BAR */}
        <div className="appointments-topbar">

          <div>
            <h2>
              Your Appointments
            </h2>

            <p>
              Manage your upcoming and past
              healthcare visits.
            </p>
          </div>

          <Link
            to="/doctors"
            className="primary-btn"
          >
            <Plus
              size={18}
              aria-hidden="true"
            />
            Book Appointment
          </Link>

        </div>

        {/* DEMO MESSAGE */}
        {message && (
          <div
            className="appointments-demo-message"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2
              size={18}
              aria-hidden="true"
            />

            {message}
          </div>
        )}

        {/* SUMMARY */}
        <section className="appointment-summary-grid">

          <div className="appointment-summary-card">

            <div
              className="appointment-summary-icon"
              aria-hidden="true"
            >
              <CalendarDays size={21} />
            </div>

            <div>
              <span>Upcoming</span>
              <strong>
                {upcomingAppointments.length}
              </strong>
            </div>

          </div>

          <div className="appointment-summary-card">

            <div
              className="appointment-summary-icon"
              aria-hidden="true"
            >
              <CheckCircle2 size={21} />
            </div>

            <div>
              <span>Completed</span>
              <strong>
                {pastAppointments.length}
              </strong>
            </div>

          </div>

          <div className="appointment-summary-card">

            <div
              className="appointment-summary-icon"
              aria-hidden="true"
            >
              <Stethoscope size={21} />
            </div>

            <div>
              <span>Total Records</span>
              <strong>
                {appointments.length}
              </strong>
            </div>

          </div>

        </section>

        {/* UPCOMING */}
        <section className="appointments-section">

          <div className="appointments-section-heading">

            <div>
              <span>UPCOMING</span>

              <h2>
                Upcoming Appointments
              </h2>
            </div>

          </div>

          {upcomingAppointments.length > 0 ? (
            <div className="appointments-list">

              {upcomingAppointments.map(
                (appointment) => (
                  <article
                    className="appointment-page-card"
                    key={appointment.id}
                  >

                    <div
                      className="appointment-doctor-avatar"
                      aria-hidden="true"
                    >
                      {appointment.initials}
                    </div>

                    <div className="appointment-page-info">

                      <span className="appointment-status">
                        <span
                          className="appointment-status-dot"
                          aria-hidden="true"
                        ></span>

                        {appointment.status}
                      </span>

                      <h3>
                        {appointment.doctor}
                      </h3>

                      <p>
                        {appointment.specialty}
                      </p>

                      <div className="appointment-page-meta">

                        <span>
                          <CalendarDays
                            size={15}
                            aria-hidden="true"
                          />
                          {appointment.date}
                        </span>

                        <span>
                          <Clock3
                            size={15}
                            aria-hidden="true"
                          />
                          {appointment.time}
                        </span>

                        <span>
                          <MapPin
                            size={15}
                            aria-hidden="true"
                          />
                          {appointment.location}
                        </span>

                      </div>

                    </div>

                    <div className="appointment-page-actions">

                      <Link
                        to={`/doctors/${
                          appointment.id
                        }`}
                        className="secondary-btn"
                      >
                        View Doctor
                      </Link>

                      <button
                        type="button"
                        className="appointment-cancel-btn"
                        onClick={() =>
                          handleCancel(
                            appointment.id
                          )
                        }
                      >
                        <XCircle
                          size={16}
                          aria-hidden="true"
                        />
                        Cancel
                      </button>

                    </div>

                  </article>
                )
              )}

            </div>
          ) : (
            <div className="appointments-empty-state">

              <CalendarDays
                size={40}
                aria-hidden="true"
              />

              <h3>
                No upcoming appointments
              </h3>

              <p>
                You currently have no upcoming
                appointments in this demo.
              </p>

              <Link
                to="/doctors"
                className="primary-btn"
              >
                <Plus
                  size={17}
                  aria-hidden="true"
                />
                Find a Doctor
              </Link>

            </div>
          )}

        </section>

        {/* PAST */}
        <section className="appointments-section">

          <div className="appointments-section-heading">

            <div>
              <span>HISTORY</span>

              <h2>
                Past Appointments
              </h2>
            </div>

          </div>

          {pastAppointments.length > 0 ? (
            <div className="appointments-list">

              {pastAppointments.map(
                (appointment) => (
                  <article
                    className="appointment-page-card past"
                    key={appointment.id}
                  >

                    <div
                      className="appointment-doctor-avatar"
                      aria-hidden="true"
                    >
                      {appointment.initials}
                    </div>

                    <div className="appointment-page-info">

                      <span className="appointment-completed-status">
                        <CheckCircle2
                          size={14}
                          aria-hidden="true"
                        />
                        Completed
                      </span>

                      <h3>
                        {appointment.doctor}
                      </h3>

                      <p>
                        {appointment.specialty}
                      </p>

                      <div className="appointment-page-meta">

                        <span>
                          <CalendarDays
                            size={15}
                            aria-hidden="true"
                          />
                          {appointment.date}
                        </span>

                        <span>
                          <Clock3
                            size={15}
                            aria-hidden="true"
                          />
                          {appointment.time}
                        </span>

                      </div>

                    </div>

                    <Link
                      to={`/doctors/${
                        appointment.id
                      }`}
                      className="secondary-btn"
                    >
                      View Doctor
                    </Link>

                  </article>
                )
              )}

            </div>
          ) : (
            <div className="appointments-empty-state">

              <Clock3
                size={38}
                aria-hidden="true"
              />

              <h3>
                No appointment history
              </h3>

              <p>
                Completed appointments will appear
                here in the future.
              </p>

            </div>
          )}

        </section>

        {/* INFORMATION */}
        <section className="appointments-info">

          <CalendarDays
            size={22}
            aria-hidden="true"
          />

          <div>

            <h3>
              Appointment information
            </h3>

            <p>
              The appointments shown on this page are
              sample frontend data. Booking, cancellation,
              reminders and appointment history will be
              connected to a secure backend in a future
              version.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Appointments;