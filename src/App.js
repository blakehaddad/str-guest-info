import React, { useEffect, useState } from "react";

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const configPath = `${process.env.PUBLIC_URL}/config.json`; 
    console.log("Fetching config from:", configPath);

    fetch(configPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setConfig(data))
      .catch((error) => console.error("Error loading config:", error));
  }, []);

  if (!config) return <div style={styles.loading}>Loading...</div>;

  const contactNumber = process.env.REACT_APP_CONTACT_NUMBER 
  ? process.env.REACT_APP_CONTACT_NUMBER 
  : (config.contactNumber || "Via booking app");


  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>🏡 Welcome to {config.propertyName}!</h1>
        <p>We’re thrilled to have you! Here’s all the key information to make your stay smooth and enjoyable..</p>
      </div>

      <div style={styles.card}>
        <h2>⏰ Check-In Information</h2>
        <p><strong>Check-in:</strong> {config.checkInTime}</p>
        <p><strong>Check-out:</strong> {config.checkOutTime}</p>
        <p><strong>Lockbox Code:</strong> <span style={styles.lockbox}>{config.lockboxCode}</span></p>
      </div>

      <div style={styles.card}>
        <h2>📶 Wi-Fi Details</h2>
        <p><strong>Network:</strong> {config.wifiNetwork}</p>
        <p><strong>Password:</strong> {config.wifiPassword}</p>
      </div>

      {/* <div style={styles.card}>
        <h2>🍽️ Local Recommendations</h2>
        <ul style={styles.list}>
          {(config.recommendations || []).map((place, index) => (
            <li key={index}>
              <a href={place.url} target="_blank" rel="noopener noreferrer">
                {place.name}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      <div style={styles.footer}>
        <p>📞 Need anything? Contact us: <strong>{contactNumber}</strong></p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    maxWidth: "700px",
    margin: "40px auto",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fefefe",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
  },
  header: {
    backgroundColor: "#ff5a5f",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px 10px 0 0"
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "left"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  lockbox: {
    backgroundColor: "#ff5a5f",
    color: "#fff",
    padding: "3px 8px",
    borderRadius: "5px"
  },
  footer: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333"
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "50px"
  }
};

export default App;
