import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

// =================================
// PUBLIC PAGES
// =================================

import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import DoctorDetails from "./pages/DoctorDetails.jsx";
import AppointmentBooking from "./pages/AppointmentBooking.jsx";
import Services from "./pages/Services.jsx";
import Articles from "./pages/Articles.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// =================================
// AUTHENTICATION
// =================================

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// =================================
// DASHBOARD
// =================================

import UserDashboard from "./pages/UserDashboard.jsx";
import Appointments from "./pages/Appointments.jsx";
import HealthTracking from "./pages/HealthTracking.jsx";
import Medications from "./pages/Medications.jsx";
import HealthRecords from "./pages/HealthRecords.jsx";
import DashboardArticles from "./pages/DashboardArticles.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";

// =================================
// OTHER
// =================================

import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =================================
            PUBLIC WEBSITE
        ================================= */}

        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* DOCTORS */}
          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/doctors/:id"
            element={<DoctorDetails />}
          />

          {/* APPOINTMENT BOOKING */}
          <Route
            path="/appointments/book/:id"
            element={<AppointmentBooking />}
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* ARTICLES */}
          <Route
            path="/articles"
            element={<Articles />}
          />

          <Route
            path="/articles/:id"
            element={<ArticleDetails />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =================================
              AUTHENTICATION
          ================================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* =================================
              PUBLIC 404
          ================================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>


        {/* =================================
            USER DASHBOARD
        ================================= */}

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          {/* DASHBOARD OVERVIEW */}
          <Route
            index
            element={<UserDashboard />}
          />

          {/* APPOINTMENTS */}
          <Route
            path="appointments"
            element={<Appointments />}
          />

          {/* HEALTH TRACKING */}
          <Route
            path="health-tracking"
            element={<HealthTracking />}
          />

          {/* MEDICATIONS */}
          <Route
            path="medications"
            element={<Medications />}
          />

          {/* HEALTH RECORDS */}
          <Route
            path="health-records"
            element={<HealthRecords />}
          />

          {/* ARTICLES */}
          <Route
            path="articles"
            element={<DashboardArticles />}
          />

          {/* PROFILE */}
          <Route
            path="profile"
            element={<Profile />}
          />

          {/* SETTINGS */}
          <Route
            path="settings"
            element={<Settings />}
          />

          {/* DASHBOARD 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;