// Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Secure App
      </NavLink>
      <div className="nav-links">
        <NavLink
          to="/status"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Status
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Login
        </NavLink>
        <NavLink
          to="/secret-check"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Secret Check
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
