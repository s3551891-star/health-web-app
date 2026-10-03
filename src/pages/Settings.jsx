import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  ChevronRight,
  Lock,
  Moon,
  Save,
  ShieldCheck,
  Sun,
  UserRound,
} from "lucide-react";

function Settings() {
  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [appointmentReminders, setAppointmentReminders] =
    useState(true);

  const [medicationReminders, setMedicationReminders] =
    useState(true);

  const [theme, setTheme] = useState("Light");

  const [saved, setSaved] = useState(false);

  const [securityMessage, setSecurityMessage] =
    useState(false);

  const handleSave = () => {
    setSaved(true);
    setSecurityMessage(false);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const handleSecurityClick = () => {
    setSecurityMessage(true);
    setSaved(false);

    setTimeout(() => {
      setSecurityMessage(false);
    }, 3000);
  };

  return (
    <div className="settings-page">

      {/* HEADER */}
      <section className="settings-header">

        <div className="settings-container">

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

          <div className="settings-heading">

            <span className="page-eyebrow">
              <ShieldCheck
                size={16}
                aria-hidden="true"
              />
              SETTINGS
            </span>

            <h1>
              Manage your settings
            </h1>

            <p>
              Customize your preferences and manage
              your account settings.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="settings-container settings-content">

        {/* SUCCESS MESSAGE */}
        {saved && (
          <div
            className="settings-success"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2
              size={18}
              aria-hidden="true"
            />

            Settings saved successfully.
          </div>
        )}

        {/* SECURITY MESSAGE */}
        {securityMessage && (
          <div
            className="settings-demo-message"
            role="status"
            aria-live="polite"
          >
            <Lock
              size={18}
              aria-hidden="true"
            />

            Password and security management will be
            connected when authentication is added.
          </div>
        )}

        {/* NOTIFICATIONS */}
        <section className="settings-card">

          <div className="settings-card-heading">

            <div
              className="settings-card-icon"
              aria-hidden="true"
            >
              <Bell size={21} />
            </div>

            <div>

              <span>
                NOTIFICATIONS
              </span>

              <h2>
                Notification Preferences
              </h2>

              <p>
                Choose which notifications you want to receive.
              </p>

            </div>

          </div>

          <div className="settings-options">

            {/* EMAIL */}
            <div className="settings-option">

              <div>

                <strong>
                  Email Notifications
                </strong>

                <span>
                  Receive important platform updates by email.
                </span>

              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  emailNotifications ? "active" : ""
                }`}
                onClick={() =>
                  setEmailNotifications(
                    (previous) => !previous
                  )
                }
                aria-label="Toggle email notifications"
                aria-pressed={emailNotifications}
              >
                <span></span>
              </button>

            </div>

            {/* APPOINTMENT */}
            <div className="settings-option">

              <div>

                <strong>
                  Appointment Reminders
                </strong>

                <span>
                  Get reminders about upcoming appointments.
                </span>

              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  appointmentReminders ? "active" : ""
                }`}
                onClick={() =>
                  setAppointmentReminders(
                    (previous) => !previous
                  )
                }
                aria-label="Toggle appointment reminders"
                aria-pressed={appointmentReminders}
              >
                <span></span>
              </button>

            </div>

            {/* MEDICATION */}
            <div className="settings-option">

              <div>

                <strong>
                  Medication Reminders
                </strong>

                <span>
                  Receive reminders for scheduled medications.
                </span>

              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  medicationReminders ? "active" : ""
                }`}
                onClick={() =>
                  setMedicationReminders(
                    (previous) => !previous
                  )
                }
                aria-label="Toggle medication reminders"
                aria-pressed={medicationReminders}
              >
                <span></span>
              </button>

            </div>

          </div>

        </section>

        {/* APPEARANCE */}
        <section className="settings-card">

          <div className="settings-card-heading">

            <div
              className="settings-card-icon"
              aria-hidden="true"
            >
              <Sun size={21} />
            </div>

            <div>

              <span>
                APPEARANCE
              </span>

              <h2>
                Theme Preference
              </h2>

              <p>
                Choose how the Health platform should look.
              </p>

            </div>

          </div>

          <div className="theme-options">

            {/* LIGHT */}
            <button
              type="button"
              className={`theme-option ${
                theme === "Light"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setTheme("Light")}
              aria-pressed={theme === "Light"}
            >

              <Sun
                size={20}
                aria-hidden="true"
              />

              <div>

                <strong>
                  Light
                </strong>

                <span>
                  Clean and bright interface
                </span>

              </div>

              {theme === "Light" && (
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                />
              )}

            </button>

            {/* DARK */}
            <button
              type="button"
              className={`theme-option ${
                theme === "Dark"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setTheme("Dark")}
              aria-pressed={theme === "Dark"}
            >

              <Moon
                size={20}
                aria-hidden="true"
              />

              <div>

                <strong>
                  Dark
                </strong>

                <span>
                  Dark interface preference
                </span>

              </div>

              {theme === "Dark" && (
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                />
              )}

            </button>

          </div>

          <p className="settings-demo-note">
            Theme selection is currently a frontend
            demonstration. Full dark-mode styling and
            preference persistence can be connected later.
          </p>

        </section>

        {/* ACCOUNT */}
        <section className="settings-card">

          <div className="settings-card-heading">

            <div
              className="settings-card-icon"
              aria-hidden="true"
            >
              <UserRound size={21} />
            </div>

            <div>

              <span>
                ACCOUNT
              </span>

              <h2>
                Account Management
              </h2>

              <p>
                Manage your profile and account preferences.
              </p>

            </div>

          </div>

          <div className="settings-links">

            {/* PROFILE */}
            <Link
              to="/dashboard/profile"
              className="settings-link"
            >

              <div>

                <UserRound
                  size={18}
                  aria-hidden="true"
                />

                <div>

                  <strong>
                    Profile Information
                  </strong>

                  <span>
                    Update your name, email and personal details.
                  </span>

                </div>

              </div>

              <ChevronRight
                size={18}
                aria-hidden="true"
              />

            </Link>

            {/* SECURITY */}
            <button
              type="button"
              className="settings-link"
              onClick={handleSecurityClick}
            >

              <div>

                <Lock
                  size={18}
                  aria-hidden="true"
                />

                <div>

                  <strong>
                    Password & Security
                  </strong>

                  <span>
                    Manage your password and account security.
                  </span>

                </div>

              </div>

              <ChevronRight
                size={18}
                aria-hidden="true"
              />

            </button>

          </div>

        </section>

        {/* SAVE */}
        <div className="settings-actions">

          <button
            type="button"
            className="primary-btn"
            onClick={handleSave}
          >
            <Save
              size={17}
              aria-hidden="true"
            />

            Save Settings
          </button>

        </div>

        {/* INFORMATION */}
        <section className="settings-info">

          <ShieldCheck
            size={22}
            aria-hidden="true"
          />

          <div>

            <h3>
              Privacy & Security
            </h3>

            <p>
              This is a frontend demo. Real account,
              authentication and notification preferences
              will be connected to a secure backend in a
              future version.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Settings;