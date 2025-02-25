import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../studentComponents/Sidebar";
import Home from "../studentComponents/Home";
import Interviews from "../studentComponents/Interview";
// import Practice from "../components/Practice";
// import Results from "../components/Results";
// import Profile from "../components/Profile";
import "../styles/StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="dashboard-container">
      {/* Sidebar Component */}
      <Sidebar setActiveSection={setActiveSection} navigate={navigate} />

      {/* Dynamically Render Components */}
      <div className="main-content">
        {activeSection === "home" && <Home />}
        {activeSection === "interviews" && <Interviews />}
        {activeSection === "practice" && <Practice />}
        {activeSection === "results" && <Results />}
        {activeSection === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default StudentDashboard;
