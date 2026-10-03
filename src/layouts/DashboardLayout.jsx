import {
  NavLink,
  Outlet,
  Link,
} from "react-router-dom";

import {
  Activity,
  BookOpen,
  CalendarDays,
  FileText,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Pill,
  Settings,
  UserRound,
} from "lucide-react";

function DashboardLayout() {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "dashboard-nav-link active"
      : "dashboard-nav-link";

  return (
    <div className="dashboard-layout">

      {/* =================================
          SIDEBAR
      ================================= */}

      <aside className="dashboard-sidebar">

        {/* BRAND */}
        <Link
          to="/dashboard"
          className="dashboard-brand"
          aria-label="Health dashboard"
        >

          <span
            className="dashboard-brand-icon"
            aria-hidden="true"
          >
            <HeartPulse size={21} />
          </span>

          <span>
            Health
          </span>

        </Link>


        {/* NAVIGATION */}
        <nav
          className="dashboard-navigation"
          aria-label="Dashboard navigation"
        >

          {/* OVERVIEW */}
          <span className="dashboard-nav-label">
            OVERVIEW
          </span>

          <NavLink
            to="/dashboard"
            end
            className={getNavLinkClass}
          >
            <LayoutDashboard
              size={18}
              aria-hidden="true"
            />

            <span>
              Dashboard
            </span>
          </NavLink>


          {/* HEALTH MANAGEMENT */}
          <span className="dashboard-nav-label">
            HEALTH MANAGEMENT
          </span>

          <NavLink
            to="/dashboard/appointments"
            className={getNavLinkClass}
          >
            <CalendarDays
              size={18}
              aria-hidden="true"
            />

            <span>
              Appointments
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/health-tracking"
            className={getNavLinkClass}
          >
            <Activity
              size={18}
              aria-hidden="true"
            />

            <span>
              Health Tracking
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/medications"
            className={getNavLinkClass}
          >
            <Pill
              size={18}
              aria-hidden="true"
            />

            <span>
              Medications
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/health-records"
            className={getNavLinkClass}
          >
            <FileText
              size={18}
              aria-hidden="true"
            />

            <span>
              Health Records
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/articles"
            className={getNavLinkClass}
          >
            <BookOpen
              size={18}
              aria-hidden="true"
            />

            <span>
              Articles
            </span>
          </NavLink>


          {/* ACCOUNT */}
          <span className="dashboard-nav-label">
            ACCOUNT
          </span>

          <NavLink
            to="/dashboard/profile"
            className={getNavLinkClass}
          >
            <UserRound
              size={18}
              aria-hidden="true"
            />

            <span>
              Profile
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={getNavLinkClass}
          >
            <Settings
              size={18}
              aria-hidden="true"
            />

            <span>
              Settings
            </span>
          </NavLink>

        </nav>


        {/* =================================
            SIDEBAR BOTTOM
        ================================= */}

        <div className="dashboard-sidebar-bottom">

          {/* USER */}
          <div className="dashboard-user-mini">

            <div
              className="dashboard-user-avatar"
              aria-hidden="true"
            >
              U
            </div>

            <div>

              <strong>
                username
              </strong>

              <span>
                Personal Account
              </span>

            </div>

          </div>


          {/* BACK TO WEBSITE */}
          <Link
            to="/"
            className="dashboard-home-link"
          >

            <LogOut
              size={17}
              aria-hidden="true"
            />

            <span>
              Back to Website
            </span>

          </Link>

        </div>

      </aside>


      {/* =================================
          DASHBOARD MAIN
      ================================= */}

      <div className="dashboard-main">

        {/* TOPBAR */}
        <header className="dashboard-topbar">

          <div>

            <span className="dashboard-topbar-label">
              HEALTH PLATFORM
            </span>

            <h2>
              My Dashboard
            </h2>

          </div>


          {/* USER INFO */}
          <div className="dashboard-topbar-user">

            <div
              className="dashboard-topbar-avatar"
              aria-hidden="true"
            >
              U
            </div>

            <div>

              <strong>
                username
              </strong>

              <span>
                Personal Account
              </span>

            </div>

          </div>

        </header>


        {/* CONTENT */}
        <main className="dashboard-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;