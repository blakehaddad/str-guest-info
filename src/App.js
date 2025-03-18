import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Airbnb Stay!</h1>
      <p style={styles.subtitle}>We’re excited to host you. Here’s everything you need for a great stay.</p>

      <div style={styles.section}>
        <h2>🏡 Check-In Information</h2>
        <p>Check-in time: <strong>4:00 PM</strong></p>
        <p>Check-out time: <strong>11:00 AM</strong></p>
        <p>Lockbox Code: <strong>Available in app</strong></p>
      </div>

      <div style={styles.section}>
        <h2>📶 Wi-Fi Details</h2>
        <p>Network: <strong>OurAirbnbWiFi</strong></p>
        <p>Password: <strong>SuperSecure123</strong></p>
      </div>

      <div style={styles.section}>
        <h2>🍽️ Local Recommendations</h2>
        <ul>
          <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Best Coffee Shop</a></li>
          <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Top Brunch Spot</a></li>
        </ul>
      </div>

      <p style={styles.footer}>Need anything? Contact us at <strong>(555) 123-4567</strong>.</p>
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
  title: {
    color: "#ff5a5f",
    fontSize: "28px"
  },
  subtitle: {
    fontSize: "18px",
    color: "#333"
  },
  section: {
    backgroundColor: "#f8f8f8",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px"
  },
  footer: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold"
  }
};

export default App;
