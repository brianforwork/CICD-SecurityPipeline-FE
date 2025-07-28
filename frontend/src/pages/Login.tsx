// Login.tsx
import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      alert(`Logged in as ${username} (mock only)`);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="page-container">
      <div className="tech-card">
        <h2 className="tech-heading">Access Terminal</h2>
        <form onSubmit={handleSubmit} className="tech-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="tech-button" disabled={isSubmitting}>
            {isSubmitting && <span className="loading-spinner"></span>}
            {isSubmitting ? "Authenticating..." : "Authenticate"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
