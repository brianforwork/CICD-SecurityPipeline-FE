// App.tsx 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Status from "./pages/Status";
import Login from "./pages/Login";
import SecretCheck from "./pages/SecretCheck";
import "./styles/tech-styles.css"; 

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/status" element={<Status />} />
        <Route path="/login" element={<Login />} />
        <Route path="/secret-check" element={<SecretCheck />} />
        <Route path="*" element={<Status />} />
      </Routes>
    </Router>
  );
};

export default App;