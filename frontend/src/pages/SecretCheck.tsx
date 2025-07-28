// SecretCheck.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const SecretCheck: React.FC = () => {
  const [secret, setSecret] = useState<string>("Fetching...");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/secret`
      )
      .then((res) => {
        setSecret(res.data.message);
        setIsLoading(false);
        setHasError(false);
      })
      .catch(() => {
        setSecret("Error retrieving secret.");
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="tech-card">
        <h2 className="tech-heading">Classified Data</h2>
        <p className="tech-subheading">Security Clearance Required</p>
        
        <div className={`secret-display ${hasError ? 'error-text' : ''}`}>
          <div className="secret-label">Encrypted Payload</div>
          <div className="secret-value">
            {isLoading && <span className="loading-spinner"></span>}
            {secret}
          </div>
        </div>
        
        {!hasError && !isLoading && (
          <div className="success-text">
            🔓 Secret successfully decrypted and authenticated
          </div>
        )}
      </div>
    </div>
  );
};

export default SecretCheck;