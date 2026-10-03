import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  CalendarDays,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    experience: "12 years",
    rating: "4.9",
    location: "Lahore",
    availability: "Available Today",
    initials: "SA",
  },
  {
    id: 2,
    name: "Dr. Hamza Khan",
    specialty: "General Physician",
    experience: "9 years",
    rating: "4.8",
    location: "Lahore",
    availability: "Available Today",
    initials: "HK",
  },
  {
    id: 3,
    name: "Dr. Ayesha Malik",
    specialty: "Dermatologist",
    experience: "8 years",
    rating: "4.9",
    location: "Lahore",
    availability: "Available Tomorrow",
    initials: "AM",
  },
  {
    id: 4,
    name: "Dr. Ali Raza",
    specialty: "Neurologist",
    experience: "14 years",
    rating: "4.7",
    location: "Lahore",
    availability: "Available Today",
    initials: "AR",
  },
  {
    id: 5,
    name: "Dr. Noor Fatima",
    specialty: "Pediatrician",
    experience: "7 years",
    rating: "4.8",
    location: "Lahore",
    availability: "Available Tomorrow",
    initials: "NF",
  },
  {
    id: 6,
    name: "Dr. Usman Tariq",
    specialty: "Orthopedic",
    experience: "11 years",
    rating: "4.8",
    location: "Lahore",
    availability: "Available Today",
    initials: "UT",
  },
];

const specialties = [
  "All Specialties",
  "Cardiologist",
  "General Physician",
  "Dermatologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
];

function Doctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");

  const filteredDoctors = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(normalizedSearch) ||
        doctor.specialty.toLowerCase().includes(normalizedSearch);

      const matchesSpecialty =
        specialty === "All Specialties" ||
        doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [search, specialty]);

  const clearFilters = () => {
    setSearch("");
    setSpecialty("All Specialties");
  };

  return (
    <div className="doctors-page">

      {/* HEADER */}
      <section className="doctors-header">
        <div className="doctors-header-container">
          <div>
            <span className="page-eyebrow">
              <Stethoscope size={16} />
              OUR DOCTORS
            </span>

            <h1>Find the right doctor for you</h1>

            <p>
              Explore healthcare professionals by
              specialty and choose a doctor that
              fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="doctor-search-section">
        <div className="doctor-search-container">

          <div className="doctor-search-box">
            <Search size={20} aria-hidden="true" />

            <input
              type="search"
              placeholder="Search doctor or specialty..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search doctors by name or specialty"
            />
          </div>

          <select
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
            className="specialty-select"
            aria-label="Filter doctors by specialty"
          >
            {specialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>
      </section>

      {/* DOCTORS */}
      <section className="doctors-list-section">
        <div className="doctors-list-container">

          <div className="doctors-results">
            <div>
              <span>Available Professionals</span>
              <h2>
                {filteredDoctors.length}{" "}
                {filteredDoctors.length === 1
                  ? "Doctor"
                  : "Doctors"}{" "}
                Found
              </h2>
            </div>
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="doctor-grid">

              {filteredDoctors.map((doctor) => (
                <article
                  className="doctor-card"
                  key={doctor.id}
                >

                  {/* CARD TOP */}
                  <div className="doctor-card-top">

                    <div
                      className="doctor-avatar"
                      aria-hidden="true"
                    >
                      {doctor.initials}
                    </div>

                    <div
                      className="doctor-rating"
                      aria-label={`Demo rating ${doctor.rating} out of 5`}
                    >
                      <Star
                        size={15}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                      {doctor.rating}
                    </div>

                  </div>

                  {/* DOCTOR INFO */}
                  <div className="doctor-info">

                    <h3>{doctor.name}</h3>

                    <p className="doctor-specialty">
                      {doctor.specialty}
                    </p>

                    <div className="doctor-meta">

                      <span>
                        <Stethoscope
                          size={15}
                          aria-hidden="true"
                        />
                        {doctor.experience}
                      </span>

                      <span>
                        <MapPin
                          size={15}
                          aria-hidden="true"
                        />
                        {doctor.location}
                      </span>

                    </div>

                    <div className="doctor-availability">
                      <span
                        className="availability-dot"
                        aria-hidden="true"
                      ></span>

                      {doctor.availability}
                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div className="doctor-actions">

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="doctor-profile-btn"
                    >
                      View Profile
                    </Link>

                    <Link
                      to={`/appointments/book/${doctor.id}`}
                      className="doctor-book-btn"
                    >
                      <CalendarDays
                        size={16}
                        aria-hidden="true"
                      />
                      Book
                    </Link>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            /* EMPTY STATE */
            <div className="no-doctors">

              <Search
                size={40}
                aria-hidden="true"
              />

              <h3>No doctors found</h3>

              <p>
                Try another doctor name or specialty.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>

            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="doctors-cta">
        <div>
          <h2>
            Need help managing your healthcare?
          </h2>

          <p>
            Create your account to manage appointments,
            health information and more.
          </p>
        </div>

        <Link
          to="/register"
          className="primary-btn"
        >
          Get Started
          <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}

export default Doctors;