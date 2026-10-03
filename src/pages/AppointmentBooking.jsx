import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Stethoscope,
  UserRound,
  AlertCircle,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    experience: "12 years",
    location: "Lahore",
    initials: "SA",
  },
  {
    id: 2,
    name: "Dr. Hamza Khan",
    specialty: "General Physician",
    experience: "9 years",
    location: "Lahore",
    initials: "HK",
  },
  {
    id: 3,
    name: "Dr. Ayesha Malik",
    specialty: "Dermatologist",
    experience: "8 years",
    location: "Lahore",
    initials: "AM",
  },
  {
    id: 4,
    name: "Dr. Ali Raza",
    specialty: "Neurologist",
    experience: "14 years",
    location: "Lahore",
    initials: "AR",
  },
  {
    id: 5,
    name: "Dr. Noor Fatima",
    specialty: "Pediatrician",
    experience: "7 years",
    location: "Lahore",
    initials: "NF",
  },
  {
    id: 6,
    name: "Dr. Usman Tariq",
    specialty: "Orthopedic",
    experience: "11 years",
    location: "Lahore",
    initials: "UT",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function AppointmentBooking() {
  const { id } = useParams();

  const doctor = doctors.find(
    (item) => item.id === Number(id)
  );

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] =
    useState("In-person");
  const [reason, setReason] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  if (!doctor) {
    return (
      <div className="appointment-not-found">

        <Stethoscope
          size={45}
          aria-hidden="true"
        />

        <h1>Doctor Not Found</h1>

        <p>
          The doctor you selected is not available.
        </p>

        <Link
          to="/doctors"
          className="primary-btn"
        >
          <ArrowLeft size={18} />
          Back to Doctors
        </Link>

      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedDate) {
      setError("Please select an appointment date.");
      return;
    }

    if (!selectedTime) {
      setError("Please select an appointment time.");
      return;
    }

    if (!reason.trim()) {
      setError("Please enter the reason for your appointment.");
      return;
    }

    setError("");
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="appointment-success-page">

        <div className="appointment-success-card">

          <div className="success-icon">
            <CheckCircle2
              size={50}
              aria-hidden="true"
            />
          </div>

          <span className="success-eyebrow">
            APPOINTMENT REQUEST
          </span>

          <h1>Appointment Request Submitted</h1>

          <p>
            Your appointment request has been prepared
            successfully in this frontend demo.
          </p>

          <div className="confirmed-details">

            {/* DOCTOR */}
            <div className="confirmed-doctor">

              <div className="booking-doctor-avatar">
                {doctor.initials}
              </div>

              <div>
                <strong>{doctor.name}</strong>
                <span>{doctor.specialty}</span>
              </div>

            </div>

            {/* DATE */}
            <div className="confirmed-item">

              <CalendarDays
                size={18}
                aria-hidden="true"
              />

              <div>
                <span>Date</span>
                <strong>{selectedDate}</strong>
              </div>

            </div>

            {/* TIME */}
            <div className="confirmed-item">

              <Clock3
                size={18}
                aria-hidden="true"
              />

              <div>
                <span>Time</span>
                <strong>{selectedTime}</strong>
              </div>

            </div>

            {/* TYPE */}
            <div className="confirmed-item">

              <UserRound
                size={18}
                aria-hidden="true"
              />

              <div>
                <span>Appointment Type</span>
                <strong>{appointmentType}</strong>
              </div>

            </div>

          </div>

          <div className="success-actions">

            <Link
              to="/doctors"
              className="secondary-btn"
            >
              Find Another Doctor
            </Link>

            <Link
              to="/"
              className="primary-btn"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="appointment-page">

      {/* HEADER */}
      <section className="appointment-header">

        <div className="appointment-container">

          <Link
            to={`/doctors/${doctor.id}`}
            className="back-appointment-link"
          >
            <ArrowLeft size={17} />
            Back to Doctor Profile
          </Link>

          <div className="appointment-heading">

            <span className="page-eyebrow">
              <CalendarDays size={16} />
              BOOK APPOINTMENT
            </span>

            <h1>Schedule your appointment</h1>

            <p>
              Select a convenient date and time for your
              appointment with your selected doctor.
            </p>

          </div>

        </div>

      </section>

      {/* BOOKING CONTENT */}
      <section className="appointment-section">

        <div className="appointment-container appointment-layout">

          {/* DOCTOR SUMMARY */}
          <aside className="appointment-doctor-card">

            <div
              className="booking-doctor-avatar"
              aria-hidden="true"
            >
              {doctor.initials}
            </div>

            <span className="booking-specialty">
              {doctor.specialty}
            </span>

            <h2>{doctor.name}</h2>

            <div className="booking-doctor-info">

              <div>
                <Stethoscope
                  size={16}
                  aria-hidden="true"
                />
                <span>{doctor.experience}</span>
              </div>

              <div>
                <MapPin
                  size={16}
                  aria-hidden="true"
                />
                <span>{doctor.location}</span>
              </div>

            </div>

            <div className="booking-demo-note">

              <CheckCircle2
                size={16}
                aria-hidden="true"
              />

              Demo appointment booking

            </div>

          </aside>

          {/* BOOKING FORM */}
          <div className="appointment-form-card">

            <div className="form-section-heading">

              <span>APPOINTMENT DETAILS</span>

              <h2>Select your preferences</h2>

              <p>
                Choose your appointment date, time and type.
              </p>

            </div>

            {error && (
              <div
                className="booking-error"
                role="alert"
              >
                <AlertCircle
                  size={18}
                  aria-hidden="true"
                />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* DATE */}
              <div className="booking-form-group">

                <label htmlFor="appointment-date">
                  Appointment Date
                </label>

                <div className="booking-input-wrapper">

                  <CalendarDays
                    size={19}
                    aria-hidden="true"
                  />

                  <input
                    id="appointment-date"
                    type="date"
                    value={selectedDate}
                    onChange={(event) => {
                      setSelectedDate(event.target.value);
                      setError("");
                    }}
                    min={getTodayDate()}
                    required
                  />

                </div>

              </div>

              {/* TIME */}
              <div className="booking-form-group">

                <label>
                  Select Time
                </label>

                <div
                  className="time-slot-grid"
                  role="group"
                  aria-label="Available appointment times"
                >

                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`time-slot ${
                        selectedTime === time
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedTime(time);
                        setError("");
                      }}
                      aria-pressed={
                        selectedTime === time
                      }
                    >
                      <Clock3
                        size={15}
                        aria-hidden="true"
                      />
                      {time}
                    </button>
                  ))}

                </div>

              </div>

              {/* TYPE */}
              <div className="booking-form-group">

                <label>
                  Appointment Type
                </label>

                <div
                  className="appointment-type-grid"
                  role="group"
                  aria-label="Appointment type"
                >

                  {/* IN-PERSON */}
                  <button
                    type="button"
                    className={`appointment-type ${
                      appointmentType === "In-person"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setAppointmentType("In-person")
                    }
                    aria-pressed={
                      appointmentType === "In-person"
                    }
                  >

                    <MapPin
                      size={19}
                      aria-hidden="true"
                    />

                    <div>
                      <strong>In-person</strong>
                      <span>
                        Visit the clinic
                      </span>
                    </div>

                  </button>

                  {/* ONLINE */}
                  <button
                    type="button"
                    className={`appointment-type ${
                      appointmentType === "Online"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setAppointmentType("Online")
                    }
                    aria-pressed={
                      appointmentType === "Online"
                    }
                  >

                    <UserRound
                      size={19}
                      aria-hidden="true"
                    />

                    <div>
                      <strong>Online</strong>
                      <span>
                        Virtual consultation
                      </span>
                    </div>

                  </button>

                </div>

              </div>

              {/* REASON */}
              <div className="booking-form-group">

                <label htmlFor="appointment-reason">
                  Reason for Appointment
                </label>

                <textarea
                  id="appointment-reason"
                  placeholder="Briefly describe the reason for your appointment..."
                  value={reason}
                  onChange={(event) => {
                    setReason(event.target.value);
                    setError("");
                  }}
                  rows={5}
                  required
                />

              </div>

              {/* SUMMARY */}
              <div className="booking-summary">

                <div>
                  <span>Doctor</span>
                  <strong>{doctor.name}</strong>
                </div>

                <div>
                  <span>Date</span>
                  <strong>
                    {selectedDate || "Not selected"}
                  </strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>
                    {selectedTime || "Not selected"}
                  </strong>
                </div>

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="primary-btn booking-submit-btn"
              >
                Confirm Appointment
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                />
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AppointmentBooking;