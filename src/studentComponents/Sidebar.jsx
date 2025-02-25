import "../styles/Sidebar.css";

const Sidebar = ({ setActiveSection, activeSection, navigate }) => {
  return (
    <nav className="sidebar">
      <h2>
        <i className="fas fa-graduation-cap"></i> InterviewAI Pro
      </h2>
      <ul>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => setActiveSection("home")}
        >
          <i className="fas fa-home"></i> Dashboard
        </li>
        <li
          className={activeSection === "interviews" ? "active" : ""}
          onClick={() => setActiveSection("interviews")}
        >
          <i className="fas fa-video"></i> My Interviews
        </li>
        <li
          className={activeSection === "practice" ? "active" : ""}
          onClick={() => setActiveSection("practice")}
        >
          <i className="fas fa-laptop-code"></i> Practice
        </li>
        <li
          className={activeSection === "results" ? "active" : ""}
          onClick={() => setActiveSection("results")}
        >
          <i className="fas fa-chart-bar"></i> Results
        </li>
        <li
          className={activeSection === "profile" ? "active" : ""}
          onClick={() => setActiveSection("profile")}
        >
          <i className="fas fa-user"></i> Profile
        </li>
        <li onClick={() => navigate("/")}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
