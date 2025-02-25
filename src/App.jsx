import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage"; // We'll create this next
import StudentDashboard from "./pages/StudentDashboard";
// Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
