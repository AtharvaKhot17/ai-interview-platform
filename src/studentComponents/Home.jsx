import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [interviewCode, setInterviewCode] = useState("");

  const handleStartInterview = (e) => {
    e.preventDefault();
    if (interviewCode.trim()) {
      navigate(`/interview/${interviewCode}`);
    }
  };

  return (
    <div className="dashboard-home">
      <h1>Welcome back, Student!</h1>
      <p className="welcome-text">Ready for your next interview? Let's get started.</p>

      <div className="interview-code-section">
        <h2>Start New Interview</h2>
        <p>Enter your interview code to begin your session</p>
        <form onSubmit={handleStartInterview}>
          <div className="code-input-group">
            <input
              type="text"
              placeholder="Enter your interview code (e.g., INT-123)"
              value={interviewCode}
              onChange={(e) => setInterviewCode(e.target.value)}
              required
            />
            <button type="submit">
              Begin Interview <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="quick-stats">
        <div className="stat-card">
          <i className="fas fa-clock"></i>
          <h3>Upcoming</h3>
          <p>2</p>
          <span>Scheduled Interviews</span>
        </div>
        <div className="stat-card">
          <i className="fas fa-check-circle"></i>
          <h3>Completed</h3>
          <p>5</p>
          <span>Past Interviews</span>
        </div>
        <div className="stat-card">
          <i className="fas fa-star"></i>
          <h3>Average Score</h3>
          <p>85%</p>
          <span>Performance</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
