import React, { useEffect, useState } from "react";

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const configPath = `${process.env.PUBLIC_URL}/config.json`; // Ensures the correct base URL
    console.log("Fetching config from:", configPath); // Debugging
  
    fetch(configPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Config Data Loaded:", data);
        setConfig(data);
      })
      .catch((error) => console.error("Error loading config:", error));
  }, []);
  

  if (!config) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to {config.propertyName}!</h1>
      <p style={styles.subtitle}>We’re excited to host you. Here’s everything you need for a great stay.</p>

      <div style={styles.section}>
        <h2>🏡 Check-In Information</h2>
        <p>Check-in time: <strong>{config.checkInTime}</strong></p>
        <p>Check-out time: <strong>{config.checkOutTime}</strong></p>
        <p>Lockbox Code: <strong>{config.lockboxCode}</strong></p>
      </div>

      <div style={styles.section}>
        <h2>📶 Wi-Fi Details</h2>
        <p>Network: <strong>{config.wifiNetwork}</strong></p>
        <p>Password: <strong>{config.wifiPassword}</strong></p>
      </div>

      <div style={styles.section}>
        <h2>🍽️ Local Recommendations</h2>
        <ul>
          {(config.recommendations || []).map((place, index) => (
            <li key={index}>
              <a href={place.url} target="_blank" rel="noopener noreferrer">{place.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <p style={styles.footer}>Need anything? Contact us at <strong>{config.contactNumber}</strong>.</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    padding: "20px"
  },
  title: { color: "#ff5a5f", fontSize: "28px" },
  subtitle: { fontSize: "18px", color: "#333" },
  section: { backgroundColor: "#f8f8f8", padding: "15px", margin: "15px 0", borderRadius: "8px" },
  footer: { marginTop: "20px", fontSize: "16px", fontWeight: "bold" }
};

export default App;
