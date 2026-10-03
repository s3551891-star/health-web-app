import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  CheckCircle2,
  Droplets,
  HeartPulse,
  Moon,
  Plus,
  Scale,
} from "lucide-react";

const healthMetrics = [
  {
    title: "Blood Pressure",
    value: "120/80",
    detail: "mmHg · Sample record",
    icon: HeartPulse,
  },
  {
    title: "Heart Rate",
    value: "72 BPM",
    detail: "Sample record",
    icon: HeartPulse,
  },
  {
    title: "Weight",
    value: "68 kg",
    detail: "Sample record",
    icon: Scale,
  },
  {
    title: "Sleep",
    value: "7h 35m",
    detail: "Sample record",
    icon: Moon,
  },
  {
    title: "Daily Steps",
    value: "6,420",
    detail: "Sample activity",
    icon: Activity,
  },
  {
    title: "Blood Sugar",
    value: "95 mg/dL",
    detail: "Sample record",
    icon: Droplets,
  },
];

function HealthTracking() {
  const [showMessage, setShowMessage] = useState(false);

  const handleAddMeasurement = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="health-tracking-page">

      {/* HEADER */}
      <section className="tracking-header">

        <div className="tracking-container">

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

          <div className="tracking-heading">

            <span className="page-eyebrow">
              <Activity
                size={16}
                aria-hidden="true"
              />
              HEALTH TRACKING
            </span>

            <h1>
              Track your health
            </h1>

            <p>
              Monitor your health metrics and keep
              your information organized.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="tracking-container tracking-content">

        {/* TOP BAR */}
        <div className="tracking-topbar">

          <div>

            <h2>
              Health Metrics
            </h2>

            <p>
              Latest sample health information
            </p>

          </div>

          <button
            type="button"
            className="primary-btn"
            onClick={handleAddMeasurement}
          >
            <Plus
              size={18}
              aria-hidden="true"
            />
            Add Measurement
          </button>

        </div>

        {/* DEMO MESSAGE */}
        {showMessage && (
          <div
            className="tracking-demo-message"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2
              size={18}
              aria-hidden="true"
            />

            <span>
              Measurement entry is a frontend demo.
              Data storage will be connected later.
            </span>
          </div>
        )}

        {/* METRICS */}
        <section className="tracking-metrics-grid">

          {healthMetrics.map((metric) => {
            const MetricIcon = metric.icon;

            return (
              <article
                className="tracking-metric-card"
                key={metric.title}
              >

                <div
                  className="tracking-metric-icon"
                  aria-hidden="true"
                >
                  <MetricIcon size={22} />
                </div>

                <span>
                  {metric.title}
                </span>

                <strong>
                  {metric.value}
                </strong>

                <small>
                  {metric.detail}
                </small>

              </article>
            );
          })}

        </section>

        {/* INFORMATION */}
        <section className="tracking-info-card">

          <div
            className="tracking-info-icon"
            aria-hidden="true"
          >
            <HeartPulse size={24} />
          </div>

          <div>

            <h3>
              Keep your health information updated
            </h3>

            <p>
              Regularly recording health metrics can help
              you keep an organized personal health history.
              The values shown here are sample information
              for the frontend demo and are not medical advice.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default HealthTracking;