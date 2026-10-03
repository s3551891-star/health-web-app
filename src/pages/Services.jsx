import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Find a Doctor",
    description:
      "Explore healthcare professionals by specialty, experience and availability.",
    link: "/doctors",
    linkText: "Find Doctors",
  },
  {
    icon: CalendarDays,
    title: "Appointments",
    description:
      "Choose a doctor, select a convenient date and time, and organize your appointment.",
    link: "/doctors",
    linkText: "Book Appointment",
  },
  {
    icon: Activity,
    title: "Health Tracking",
    description:
      "Keep track of important health metrics such as heart rate, blood pressure and activity.",
    link: "/register",
    linkText: "Start Tracking",
  },
  {
    icon: Pill,
    title: "Medication Reminders",
    description:
      "Organize your medication schedule and keep track of daily reminders.",
    link: "/register",
    linkText: "Manage Medications",
  },
  {
    icon: HeartPulse,
    title: "Health Records",
    description:
      "Keep your personal healthcare information organized in one convenient place.",
    link: "/register",
    linkText: "Explore Records",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    description:
      "Learn about healthy lifestyle habits, preventive care and general wellness.",
    link: "/articles",
    linkText: "Explore Health Info",
  },
];

function Services() {
  return (
    <div className="services-page">

      {/* HEADER */}
      <section className="services-page-header">
        <div className="services-page-container">

          <span className="page-eyebrow">
            <HeartPulse
              size={16}
              aria-hidden="true"
            />
            OUR SERVICES
          </span>

          <h1>
            Healthcare tools designed
            <span> around you.</span>
          </h1>

          <p>
            Simple and organized tools to help you
            manage appointments, track health information
            and explore healthcare resources.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list-section">
        <div className="services-page-container">

          <div className="services-section-heading">
            <span>WHAT WE OFFER</span>

            <h2>
              Everything you need in one place
            </h2>

            <p>
              Explore the healthcare features available
              through the Health platform.
            </p>
          </div>

          <div className="services-page-grid">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-page-card"
                  key={service.title}
                >

                  <div
                    className="service-page-icon"
                    aria-hidden="true"
                  >
                    <Icon size={24} />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link to={service.link}>
                    {service.linkText}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </Link>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="services-page-cta">

        <div className="services-page-cta-container">

          <div>
            <span>
              GET STARTED
            </span>

            <h2>
              Take a more organized approach
              to your healthcare.
            </h2>

            <p>
              Create your account and explore the
              Health platform.
            </p>
          </div>

          <Link
            to="/register"
            className="primary-btn"
          >
            Create Account
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

export default Services;