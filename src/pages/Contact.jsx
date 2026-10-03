import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demo only.
    setSubmitted(true);
  };

  const handleNewMessage = () => {
    setSubmitted(false);
    setFormData(initialFormData);
  };

  return (
    <div className="contact-page">

      {/* HEADER */}
      <section className="contact-header">

        <div className="contact-container">

          <span className="page-eyebrow">
            <MessageSquare
              size={16}
              aria-hidden="true"
            />
            CONTACT US
          </span>

          <h1>
            We are here to
            <span> help.</span>
          </h1>

          <p>
            Have a question about the Health platform?
            Send us a message and our support team can
            help with general platform-related questions.
          </p>

        </div>

      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">

        <div className="contact-container contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-info">

            <div className="contact-section-heading">

              <span>
                GET IN TOUCH
              </span>

              <h2>
                Contact information
              </h2>

              <p>
                Reach out through the available contact
                channels or send us a message.
              </p>

            </div>

            <div className="contact-info-list">

              {/* EMAIL */}
              <div className="contact-info-item">

                <div
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  <Mail size={20} />
                </div>

                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    support@health.example
                  </strong>

                </div>

              </div>

              {/* PHONE */}
              <div className="contact-info-item">

                <div
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  <Phone size={20} />
                </div>

                <div>

                  <span>
                    Phone
                  </span>

                  <strong>
                    +92 300 0000000
                  </strong>

                </div>

              </div>

              {/* LOCATION */}
              <div className="contact-info-item">

                <div
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  <MapPin size={20} />
                </div>

                <div>

                  <span>
                    Location
                  </span>

                  <strong>
                    Lahore, Pakistan
                  </strong>

                </div>

              </div>

              {/* SUPPORT HOURS */}
              <div className="contact-info-item">

                <div
                  className="contact-info-icon"
                  aria-hidden="true"
                >
                  <Clock3 size={20} />
                </div>

                <div>

                  <span>
                    Support Hours
                  </span>

                  <strong>
                    Monday - Friday · 9 AM - 5 PM
                  </strong>

                </div>

              </div>

            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-card">

            {!submitted ? (
              <>

                <div className="contact-form-heading">

                  <h2>
                    Send us a message
                  </h2>

                  <p>
                    Fill out the form and submit your
                    message.
                  </p>

                </div>

                <form onSubmit={handleSubmit}>

                  {/* NAME + EMAIL */}
                  <div className="contact-form-row">

                    <div className="contact-form-group">

                      <label htmlFor="contact-name">
                        Full Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />

                    </div>

                    <div className="contact-form-group">

                      <label htmlFor="contact-email">
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />

                    </div>

                  </div>

                  {/* SUBJECT */}
                  <div className="contact-form-group">

                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* MESSAGE */}
                  <div className="contact-form-group">

                    <label htmlFor="contact-message">
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="primary-btn contact-submit-btn"
                  >
                    Send Message

                    <Send
                      size={17}
                      aria-hidden="true"
                    />
                  </button>

                </form>

              </>
            ) : (

              /* SUCCESS STATE */
              <div
                className="contact-success"
                role="status"
                aria-live="polite"
              >

                <div
                  className="contact-success-icon"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={48} />
                </div>

                <h2>
                  Message submitted
                </h2>

                <p>
                  Thank you for contacting us. This is a
                  frontend demo, so the message has not
                  been sent to a real backend.
                </p>

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={handleNewMessage}
                >
                  Send Another Message
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;