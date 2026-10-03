import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Clock3,
  Edit3,
  Pill,
  Plus,
  Trash2,
} from "lucide-react";

const initialMedications = [
  {
    id: 1,
    name: "Vitamin D",
    dosage: "1 tablet",
    time: "09:00 AM",
    schedule: "Daily",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Sample Medicine",
    dosage: "1 tablet",
    time: "08:00 PM",
    schedule: "Daily",
    status: "Upcoming",
  },
];

function Medications() {
  const [medicationList, setMedicationList] = useState(
    initialMedications
  );

  const [showMessage, setShowMessage] = useState(false);

  const handleAddMedication = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleEditMedication = (medicationName) => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    console.log(
      `Edit demo requested for ${medicationName}`
    );
  };

  const handleDeleteMedication = (id) => {
    setMedicationList((previous) =>
      previous.filter(
        (medication) => medication.id !== id
      )
    );

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const totalMedications = medicationList.length;

  return (
    <div className="medications-page">

      {/* HEADER */}
      <section className="medications-header">

        <div className="medications-container">

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

          <div className="medications-heading">

            <span className="page-eyebrow">
              <Pill
                size={16}
                aria-hidden="true"
              />
              MEDICATIONS
            </span>

            <h1>
              Manage your medications
            </h1>

            <p>
              Keep your medication reminders organized
              and easily accessible.
            </p>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <main className="medications-container medications-content">

        {/* TOP BAR */}
        <div className="medications-topbar">

          <div>

            <h2>
              Medication Schedule
            </h2>

            <p>
              Your current sample medication reminders
            </p>

          </div>

          <button
            type="button"
            className="primary-btn"
            onClick={handleAddMedication}
          >
            <Plus
              size={18}
              aria-hidden="true"
            />
            Add Medication
          </button>

        </div>

        {/* DEMO MESSAGE */}
        {showMessage && (
          <div
            className="medication-demo-message"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2
              size={18}
              aria-hidden="true"
            />

            <span>
              Medication changes are currently a frontend
              demo. Backend storage will be connected later.
            </span>
          </div>
        )}

        {/* REMINDER SUMMARY */}
        <section className="medication-summary-grid">

          <div className="medication-summary-card">

            <div
              className="medication-summary-icon"
              aria-hidden="true"
            >
              <Pill size={21} />
            </div>

            <div>
              <span>
                Total Medications
              </span>

              <strong>
                {totalMedications}
              </strong>
            </div>

          </div>

          <div className="medication-summary-card">

            <div
              className="medication-summary-icon"
              aria-hidden="true"
            >
              <Clock3 size={21} />
            </div>

            <div>
              <span>
                Today's Reminders
              </span>

              <strong>
                {totalMedications}
              </strong>
            </div>

          </div>

          <div className="medication-summary-card">

            <div
              className="medication-summary-icon"
              aria-hidden="true"
            >
              <Bell size={21} />
            </div>

            <div>
              <span>
                Next Reminder
              </span>

              <strong>
                {totalMedications > 0
                  ? "09:00 AM"
                  : "None"}
              </strong>
            </div>

          </div>

        </section>

        {/* MEDICATION LIST */}
        <section className="medications-list-section">

          <div className="medications-list-header">

            <div>

              <h2>
                Your Medications
              </h2>

              <p>
                Manage your current sample medication
                reminders.
              </p>

            </div>

          </div>

          {medicationList.length > 0 ? (
            <div className="medications-list">

              {medicationList.map((medication) => (
                <article
                  className="medication-page-card"
                  key={medication.id}
                >

                  {/* ICON */}
                  <div
                    className="medication-page-icon"
                    aria-hidden="true"
                  >
                    <Pill size={22} />
                  </div>

                  {/* INFO */}
                  <div className="medication-page-info">

                    <h3>
                      {medication.name}
                    </h3>

                    <p>
                      {medication.dosage}
                    </p>

                    <div className="medication-page-meta">

                      <span>
                        <Clock3
                          size={15}
                          aria-hidden="true"
                        />
                        {medication.time}
                      </span>

                      <span>
                        {medication.schedule}
                      </span>

                    </div>

                  </div>

                  {/* STATUS */}
                  <div className="medication-page-status">

                    <span>
                      <CheckCircle2
                        size={15}
                        aria-hidden="true"
                      />

                      {medication.status}
                    </span>

                  </div>

                  {/* ACTIONS */}
                  <div className="medication-page-actions">

                    <button
                      type="button"
                      aria-label={`Edit ${medication.name}`}
                      onClick={() =>
                        handleEditMedication(
                          medication.name
                        )
                      }
                    >
                      <Edit3
                        size={17}
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      type="button"
                      aria-label={`Delete ${medication.name}`}
                      onClick={() =>
                        handleDeleteMedication(
                          medication.id
                        )
                      }
                    >
                      <Trash2
                        size={17}
                        aria-hidden="true"
                      />
                    </button>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            /* EMPTY STATE */
            <div className="medications-empty-state">

              <Pill
                size={38}
                aria-hidden="true"
              />

              <h3>
                No medications added
              </h3>

              <p>
                Add a medication to create a reminder
                in this demo.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={handleAddMedication}
              >
                <Plus
                  size={17}
                  aria-hidden="true"
                />
                Add Medication
              </button>

            </div>
          )}

        </section>

        {/* INFORMATION CARD */}
        <section className="medication-info-card">

          <div
            className="medication-info-icon"
            aria-hidden="true"
          >
            <Bell size={23} />
          </div>

          <div>

            <h3>
              Medication reminder information
            </h3>

            <p>
              This page is currently a frontend demo.
              The displayed medications are sample
              information. Real medication data and
              reminders should be connected to a secure
              backend in a future version.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Medications;