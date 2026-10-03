import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  FileText,
  HeartPulse,
  Pill,
  ShieldCheck,
} from "lucide-react";

const healthRecords = [
  {
    id: 1,
    title: "Blood Pressure Record",
    type: "Health Metric",
    date: "October 2, 2026",
    value: "120/80 mmHg",
    icon: HeartPulse,
  },
  {
    id: 2,
    title: "Heart Rate Record",
    type: "Health Metric",
    date: "October 2, 2026",
    value: "72 BPM",
    icon: Activity,
  },
  {
    id: 3,
    title: "Medication Record",
    type: "Medication",
    date: "October 1, 2026",
    value: "Vitamin D",
    icon: Pill,
  },
  {
    id: 4,
    title: "Appointment Record",
    type: "Appointment",
    date: "October 1, 2026",
    value: "Dr. Sarah Ahmed",
    icon: CalendarDays,
  },
];

function HealthRecords() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleViewRecord = (record) => {
    setSelectedRecord(record);
  };

  const closeRecord = () => {
    setSelectedRecord(null);
  };

  return (
    <div className="health-records-page">

      {/* HEADER */}
      <section className="health-records-header">

        <div className="health-records-container">

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

          <div className="health-records-heading">

            <span className="page-eyebrow">
              <FileText
                size={16}
                aria-hidden="true"
              />
              HEALTH RECORDS
            </span>

            <h1>
              Your health records
            </h1>

            <p>
              Keep your healthcare information organized
              in one place.
            </p>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <main className="health-records-container health-records-content">

        {/* TOP BAR */}
        <div className="health-records-topbar">

          <div>

            <h2>
              Recent Records
            </h2>

            <p>
              Your latest sample health-related information
            </p>

          </div>

          <div
            className="records-count"
            aria-label={`${healthRecords.length} health records`}
          >
            <FileText
              size={17}
              aria-hidden="true"
            />

            {healthRecords.length} Records
          </div>

        </div>

        {/* RECORDS */}
        <section
          className="health-records-list"
          aria-label="Health records"
        >

          {healthRecords.map((record) => {
            const RecordIcon = record.icon;

            return (
              <article
                className="health-record-card"
                key={record.id}
              >

                {/* ICON */}
                <div
                  className="health-record-icon"
                  aria-hidden="true"
                >
                  <RecordIcon size={21} />
                </div>

                {/* INFORMATION */}
                <div className="health-record-info">

                  <span>
                    {record.type}
                  </span>

                  <h3>
                    {record.title}
                  </h3>

                  <p>
                    {record.value}
                  </p>

                </div>

                {/* DATE */}
                <div className="health-record-date">

                  <CalendarDays
                    size={14}
                    aria-hidden="true"
                  />

                  {record.date}

                </div>

                {/* VIEW BUTTON */}
                <button
                  type="button"
                  className="health-record-arrow"
                  aria-label={`View ${record.title}`}
                  onClick={() =>
                    handleViewRecord(record)
                  }
                >
                  <ChevronRight
                    size={19}
                    aria-hidden="true"
                  />
                </button>

              </article>
            );
          })}

        </section>

        {/* RECORD DETAILS */}
        {selectedRecord && (
          <section
            className="health-record-detail-card"
            role="status"
            aria-live="polite"
          >

            <div className="health-record-detail-header">

              <div>

                <span>
                  SAMPLE RECORD
                </span>

                <h3>
                  {selectedRecord.title}
                </h3>

              </div>

              <button
                type="button"
                className="health-record-close"
                onClick={closeRecord}
                aria-label="Close record details"
              >
                ×
              </button>

            </div>

            <div className="health-record-detail-content">

              <div>
                <span>Type</span>
                <strong>
                  {selectedRecord.type}
                </strong>
              </div>

              <div>
                <span>Value</span>
                <strong>
                  {selectedRecord.value}
                </strong>
              </div>

              <div>
                <span>Date</span>
                <strong>
                  {selectedRecord.date}
                </strong>
              </div>

            </div>

            <p>
              This is sample information for the frontend
              demonstration. It is not a medical record.
            </p>

          </section>
        )}

        {/* RECORD CATEGORIES */}
        <section className="record-categories">

          <div className="record-section-heading">

            <div>

              <span>
                ORGANIZED INFORMATION
              </span>

              <h2>
                Record Categories
              </h2>

            </div>

          </div>

          <div className="record-category-grid">

            {/* HEALTH METRICS */}
            <Link
              to="/dashboard/health-tracking"
              className="record-category-card"
            >

              <div
                className="record-category-icon"
                aria-hidden="true"
              >
                <HeartPulse size={21} />
              </div>

              <div>

                <strong>
                  Health Metrics
                </strong>

                <span>
                  Blood pressure, heart rate and more
                </span>

              </div>

              <ChevronRight
                size={17}
                aria-hidden="true"
              />

            </Link>

            {/* MEDICATIONS */}
            <Link
              to="/dashboard/medications"
              className="record-category-card"
            >

              <div
                className="record-category-icon"
                aria-hidden="true"
              >
                <Pill size={21} />
              </div>

              <div>

                <strong>
                  Medications
                </strong>

                <span>
                  Medication and reminder records
                </span>

              </div>

              <ChevronRight
                size={17}
                aria-hidden="true"
              />

            </Link>

            {/* APPOINTMENTS */}
            <Link
              to="/appointments/book/1"
              className="record-category-card"
            >

              <div
                className="record-category-icon"
                aria-hidden="true"
              >
                <CalendarDays size={21} />
              </div>

              <div>

                <strong>
                  Appointments
                </strong>

                <span>
                  Your healthcare appointments
                </span>

              </div>

              <ChevronRight
                size={17}
                aria-hidden="true"
              />

            </Link>

          </div>

        </section>

        {/* PRIVACY INFORMATION */}
        <section className="health-records-info">

          <div
            className="health-records-info-icon"
            aria-hidden="true"
          >
            <ShieldCheck size={23} />
          </div>

          <div>

            <h3>
              Your health information
            </h3>

            <p>
              This frontend demo uses sample information only.
              Real health records should be handled through
              appropriate secure systems and backend
              authentication.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default HealthRecords;