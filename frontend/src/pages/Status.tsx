// Status.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Status: React.FC = () => {
  const [status, setStatus] = useState<string>("Loading...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/status`
      )
      .then((res) => {
        setStatus(res.data.status);
        setIsLoading(false);
      })
      .catch(() => {
        setStatus("Error fetching status.");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="tech-card">
        <h2 className="tech-heading">System Status</h2>
        <div className="status-text">
          {isLoading && <span className="loading-spinner"></span>}
          <span>STATUS: {status}</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
