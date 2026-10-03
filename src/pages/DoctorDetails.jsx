import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Star,
  Stethoscope,
  UserRound,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    experience: "12 years",
    rating: "4.9",
    location: "Lahore",
    initials: "SA",
    about:
      "Dr. Sarah Ahmed is a cardiology specialist focused on patient-centered cardiovascular care and preventive health.",
    education: "MBBS, FCPS Cardiology",
    languages: "English, Urdu",
  },
  {
    id: 2,
    name: "Dr. Hamza Khan",
    specialty: "General Physician",
    experience: "9 years",
    rating: "4.8",
    location: "Lahore",
    initials: "HK",
    about:
      "Dr. Hamza Khan provides general medical care with a focus on preventive healthcare and everyday health concerns.",
    education: "MBBS, FCPS Medicine",
    languages: "English, Urdu, Punjabi",
  },
  {
    id: 3,
    name: "Dr. Ayesha Malik",
    specialty: "Dermatologist",
    experience: "8 years",
    rating: "4.9",
    location: "Lahore",
    initials: "AM",
    about:
      "Dr. Ayesha Malik specializes in general dermatology and patient education for healthy skin care.",
    education: "MBBS, FCPS Dermatology",
    languages: "English, Urdu",
  },
  {
    id: 4,
    name: "Dr. Ali Raza",
    specialty: "Neurologist",
    experience: "14 years",
    rating: "4.7",
    location: "Lahore",
    initials: "AR",
    about:
      "Dr. Ali Raza focuses on neurological care and helping patients understand and manage their health conditions.",
    education: "MBBS, FCPS Neurology",
    languages: "English, Urdu",
  },
  {
    id: 5,
    name: "Dr. Noor Fatima",
    specialty: "Pediatrician",
    experience: "7 years",
    rating: "4.8",
    location: "Lahore",
    initials: "NF",
    about:
      "Dr. Noor Fatima provides pediatric healthcare with an emphasis on preventive care and child wellness.",
    education: "MBBS, FCPS Pediatrics",
    languages: "English, Urdu",
  },
  {
    id: 6,
    name: "Dr. Usman Tariq",
    specialty: "Orthopedic",
    experience: "11 years",
    rating: "4.8",
    location: "Lahore",
    initials: "UT",
    about:
      "Dr. Usman Tariq specializes in orthopedic care and patient-focused musculoskeletal health management.",
    education: "MBBS, FCPS Orthopedic Surgery",
    languages: "English, Urdu",
  },
];

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find(
    (item) => item.id === Number(id)
  );

  // INVALID DOCTOR
  if (!doctor) {
    return (
      <div className="doctor-not-found">
        <Stethoscope
          size={45}
          aria-hidden="true"
        />

        <h1>Doctor Not Found</h1>

        <p>
          The doctor profile you are looking for
          does not exist.
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

  return (
    <div className="doctor-details-page">

      {/* HEADER */}
      <section className="doctor-details-header">
        <div className="doctor-details-container">

          <Link
            to="/doctors"
            className="back-doctors-link"
          >
            <ArrowLeft size={17} />
            Back to Doctors
          </Link>

          <div className="doctor-profile-layout">

            {/* PROFILE CARD */}
            <div className="doctor-profile-card">

              <div
                className="large-doctor-avatar"
                aria-hidden="true"
              >
                {doctor.initials}
              </div>

              <div className="profile-main-info">

                <span className="profile-specialty">
                  {doctor.specialty}
                </span>

                <h1>{doctor.name}</h1>

                <div
                  className="profile-rating"
                  aria-label={`Demo rating ${doctor.rating} out of 5`}
                >
                  <Star
                    size={16}
                    fill="currentColor"
                    aria-hidden="true"
                  />

                  <strong>{doctor.rating}</strong>

                  <span>
                    Professional Rating
                  </span>
                </div>

                <div className="profile-location">
                  <MapPin
                    size={16}
                    aria-hidden="true"
                  />
                  {doctor.location}
                </div>

              </div>
            </div>

            {/* BOOKING CARD */}
            <div className="doctor-booking-card">

              <div className="booking-icon">
                <CalendarDays
                  size={23}
                  aria-hidden="true"
                />
              </div>

              <h3>Book an Appointment</h3>

              <p>
                Choose an available appointment
                and continue to the booking process.
              </p>

              <Link
                to={`/appointments/book/${doctor.id}`}
                className="primary-btn"
              >
                Book Appointment
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <div className="booking-note">
                <CheckCircle2
                  size={15}
                  aria-hidden="true"
                />
                Online appointment request
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="doctor-information-section">
        <div className="doctor-information-container">

          {/* PROFESSIONAL INFORMATION */}
          <div className="doctor-about-card">

            <div className="details-section-title">
              <span>ABOUT DOCTOR</span>
              <h2>Professional Information</h2>
            </div>

            <p className="doctor-about-text">
              {doctor.about}
            </p>

            <div className="doctor-information-grid">

              <div className="information-item">
                <Stethoscope
                  size={20}
                  aria-hidden="true"
                />

                <div>
                  <span>Experience</span>
                  <strong>{doctor.experience}</strong>
                </div>
              </div>

              <div className="information-item">
                <UserRound
                  size={20}
                  aria-hidden="true"
                />

                <div>
                  <span>Education</span>
                  <strong>{doctor.education}</strong>
                </div>
              </div>

              <div className="information-item">
                <MapPin
                  size={20}
                  aria-hidden="true"
                />

                <div>
                  <span>Location</span>
                  <strong>{doctor.location}</strong>
                </div>
              </div>

              <div className="information-item">
                <Clock3
                  size={20}
                  aria-hidden="true"
                />

                <div>
                  <span>Languages</span>
                  <strong>{doctor.languages}</strong>
                </div>
              </div>

            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="availability-card">

            <div className="details-section-title">
              <span>AVAILABILITY</span>
              <h2>Working Hours</h2>
            </div>

            <div className="availability-row">
              <span>Monday - Friday</span>
              <strong>9:00 AM - 5:00 PM</strong>
            </div>

            <div className="availability-row">
              <span>Saturday</span>
              <strong>10:00 AM - 2:00 PM</strong>
            </div>

            <div className="availability-row">
              <span>Sunday</span>
              <strong>Closed</strong>
            </div>

            <div className="availability-status">
              <span aria-hidden="true"></span>
              Available for appointment requests
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default DoctorDetails;