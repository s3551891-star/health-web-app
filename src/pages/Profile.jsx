import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Save,
  UserRound,
} from "lucide-react";

function Profile() {
  const [name, setName] = useState("username");
  const [email, setEmail] = useState("username@example.com");
  const [phone, setPhone] = useState("+92 300 0000000");
  const [location, setLocation] = useState("Lahore, Pakistan");

  const [saved, setSaved] = useState(false);
  const [photoMessage, setPhotoMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const handleChangePhoto = () => {
    setPhotoMessage(true);

    setTimeout(() => {
      setPhotoMessage(false);
    }, 3000);
  };

  const getInitial = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return "U";
    }

    return trimmedName.charAt(0).toUpperCase();
  };

  return (
    <div className="profile-page">

      {/* HEADER */}
      <section className="profile-header">

        <div className="profile-container">

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

          <div className="profile-heading">

            <span className="page-eyebrow">
              <UserRound
                size={16}
                aria-hidden="true"
              />
              MY PROFILE
            </span>

            <h1>
              Manage your profile
            </h1>

            <p>
              Update your personal information and
              keep your profile details organized.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="profile-container profile-content">

        <div className="profile-layout">

          {/* PROFILE CARD */}
          <aside className="profile-card">

            <div className="profile-avatar-wrapper">

              <div
                className="profile-avatar"
                aria-label={`Profile avatar for ${name}`}
              >
                {getInitial()}
              </div>

              <button
                type="button"
                className="profile-camera-btn"
                aria-label="Change profile photo"
                onClick={handleChangePhoto}
              >
                <Camera
                  size={15}
                  aria-hidden="true"
                />
              </button>

            </div>

            <h2>
              {name}
            </h2>

            <p>
              Health Platform User
            </p>

            <div className="profile-status">

              <CheckCircle2
                size={15}
                aria-hidden="true"
              />

              Profile Active

            </div>

            <div className="profile-card-divider"></div>

            <div className="profile-mini-info">

              <div>

                <Mail
                  size={16}
                  aria-hidden="true"
                />

                <span>
                  {email}
                </span>

              </div>

              <div>

                <MapPin
                  size={16}
                  aria-hidden="true"
                />

                <span>
                  {location}
                </span>

              </div>

            </div>

          </aside>

          {/* PROFILE FORM */}
          <section className="profile-form-card">

            <div className="profile-form-heading">

              <div>

                <span>
                  PERSONAL INFORMATION
                </span>

                <h2>
                  Profile Details
                </h2>

                <p>
                  Update your information below.
                </p>

              </div>

            </div>

            {/* PHOTO MESSAGE */}
            {photoMessage && (
              <div
                className="profile-demo-message"
                role="status"
                aria-live="polite"
              >
                <Camera
                  size={18}
                  aria-hidden="true"
                />

                <span>
                  Profile photo upload will be connected
                  when backend storage is added.
                </span>
              </div>
            )}

            {/* SAVE MESSAGE */}
            {saved && (
              <div
                className="profile-success-message"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                />

                Profile information saved successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="profile-form-group">

                <label htmlFor="profile-name">
                  Full Name
                </label>

                <div className="profile-input-wrapper">

                  <UserRound
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="profile-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    autoComplete="name"
                    required
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div className="profile-form-group">

                <label htmlFor="profile-email">
                  Email Address
                </label>

                <div className="profile-input-wrapper">

                  <Mail
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="profile-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              {/* PHONE */}
              <div className="profile-form-group">

                <label htmlFor="profile-phone">
                  Phone Number
                </label>

                <div className="profile-input-wrapper">

                  <Phone
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="profile-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    autoComplete="tel"
                  />

                </div>

              </div>

              {/* LOCATION */}
              <div className="profile-form-group">

                <label htmlFor="profile-location">
                  Location
                </label>

                <div className="profile-input-wrapper">

                  <MapPin
                    size={18}
                    aria-hidden="true"
                  />

                  <input
                    id="profile-location"
                    name="location"
                    type="text"
                    value={location}
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    autoComplete="address-level2"
                  />

                </div>

              </div>

              {/* ACTION */}
              <div className="profile-form-actions">

                <button
                  type="submit"
                  className="primary-btn"
                >
                  <Save
                    size={17}
                    aria-hidden="true"
                  />

                  Save Changes
                </button>

              </div>

            </form>

          </section>

        </div>

        {/* ACCOUNT INFORMATION */}
        <section className="profile-account-card">

          <div>

            <span>
              ACCOUNT INFORMATION
            </span>

            <h2>
              Account Settings
            </h2>

            <p>
              Password, notifications and other account
              preferences can be managed from the settings
              section.
            </p>

          </div>

          <Link
            to="/dashboard/settings"
            className="secondary-btn"
          >
            Open Settings
          </Link>

        </section>

      </main>

    </div>
  );
}

export default Profile;