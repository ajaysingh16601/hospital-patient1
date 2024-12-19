import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import PatientRegister from "./pages/PatientRegister";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router>
    <TopMenu />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/patient-register" element={<PatientRegister />} />
    </Routes>
  </Router>
);

export default App;
