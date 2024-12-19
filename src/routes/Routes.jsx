import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PatientRegister from "../pages/PatientRegister";

const AppRoutes = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/patient-register" element={<PatientRegister />} />
      {/* Add more routes */}
    </Routes>
  </Router>
);

export default AppRoutes;
