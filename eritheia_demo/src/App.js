import React, { useState } from "react";
// Import images
//import sidebarIcon from "./assets/sidebar-icon.png"; // Example image for sidebar
import logo from "./assets/eritheia_logo.png"; // Logo image
//import walletIcon from "./assets/wallet-icon.png"; // Wallet connect button icon

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    entityStatus: "",
    publicationRequest: "normal",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = () => {
    console.log("Form data submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        {/* Logo */}
        <img src={logo} alt="Eritheia Logo" style={styles.logo} />
        <h3 style={styles.title}>Patents </h3>
        <p style={styles.subtitle}>IPs</p>

        {/* Wallet Button */}
        <button style={styles.walletButton}>Connect Wallet</button>
      </header>

      <header>
        {/* Logo */}
        <h1 style={styles.title}>Create Utility Nonprovisional Patent</h1>
        <p style={styles.subtitle}>
          Nonprovisional Application under 35 USC 111(a)
        </p>
      </header>
      <header style={styles.header}>
        {/* Logo */}
        <h4 style={styles.subtitle}>1. Application Page </h4>
        <h4 style={styles.subtitle}>2. Upload Proof </h4>
        <h4 style={styles.subtitle}>3. Payment </h4>
        {/* Wallet Button */}
        <h4 style={styles.subtitle}>4. Review Submission </h4>
      </header>

      <div style={styles.content}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
            <li>Application Information</li>
            <li>Inventors</li>
            <li>Applicant</li>
            <li>Assignee</li>
            <li>Signature</li>
          </ul>
        </aside>

        {/* Form Section */}
        <main style={styles.formSection}>
          <h2>APPLICATION INFORMATION</h2>
          <p>Fill the relevant information about your patent</p>

          {/* Title of Invention */}
          <label style={styles.label}>
            Title of Invention
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your title"
              style={styles.input}
            />
          </label>

          {/* Entity Status */}
          <label style={styles.label}>
            Entity Status
            <select
              name="entityStatus"
              value={formData.entityStatus}
              onChange={handleInputChange}
              style={styles.select}
            >
              <option value="">Select an Option</option>
              <option value="individual">Individual</option>
              <option value="smallEntity">Small Entity</option>
              <option value="largeEntity">Large Entity</option>
            </select>
          </label>

          {/* Publication Request */}
          <div>Publication Request</div>
          <br />
          <fieldset style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="publicationRequest"
                value="normal"
                checked={formData.publicationRequest === "normal"}
                onChange={handleInputChange}
              />
              Normal eighteen-month publication
            </label>
          </fieldset>

          <fieldset style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="publicationRequest"
                value="early"
                checked={formData.publicationRequest === "early"}
                onChange={handleInputChange}
              />
              Request early publication
            </label>
          </fieldset>

          <fieldset style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="publicationRequest"
                value="noPublish"
                checked={formData.publicationRequest === "noPublish"}
                onChange={handleInputChange}
              />
              Request not to publish under 35 U.S.C. 122(b)
            </label>
          </fieldset>

          {/* Buttons */}
          <div style={styles.buttonGroup}>
            <button style={styles.backButton}>Back</button>
            <button style={styles.continueButton} onClick={handleContinue}>
              Continue
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: "0 auto",
    padding: 0,
    maxWidth: "1200px",
    // margin: ,
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "3px", // Padding around the container

    borderBottom: "1px solid #ddd",
  },
  logo: { width: "250px", height: "50px" },
  title: { fontSize: "24px", fontWeight: "bold", marginLeft: "32px" },
  subtitle: { fontSize: "16px", color: "#555", marginLeft: "32px" },
  walletButton: {
    display: "flex",
    alignItems: "left",
    padding: "10px 20px",
    marginLeft: "auto", // Ensure no left margin
    backgroundColor: "#E94B35",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  walletIcon: { width: "20px", height: "20px", marginRight: "10px" },
  content: { display: "flex", marginTop: "20px" },
  sidebar: {
    width: "20%",
    padding: "10px",
    borderRight: "1px solid #ddd",
  },
  activeStep: {
    fontWeight: "bold",
    color: "#E94B35",
    display: "flex",
    alignItems: "center",
  },
  sidebarIcon: { width: "16px", height: "16px", marginRight: "10px" },
  formSection: { flex: 1, padding: "20px" },
  label: { display: "block", marginBottom: "10px" },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  select: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  radioGroup: { marginBottom: "10px" },
  buttonGroup: { display: "flex", justifyContent: "space-between" },
  backButton: {
    padding: "10px 20px",
    border: "1px solid #ddd",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
  continueButton: {
    padding: "10px 20px",
    backgroundColor: "#E94B35",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
