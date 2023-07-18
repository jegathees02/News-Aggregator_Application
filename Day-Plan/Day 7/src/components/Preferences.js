import React, { useState } from "react";
import "../assets/css/preferences.css";

function Preferences() {
  const [preference1, setPreference1] = useState("");
  const [preference2, setPreference2] = useState("");
  const [preference3, setPreference3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend or perform any desired actions
    console.log("Form submitted!");
    console.log("Preference 1:", preference1);
    console.log("Preference 2:", preference2);
    console.log("Preference 3:", preference3);
    // Reset the form fields
    setPreference1("");
    setPreference2("");
    setPreference3("");
  };

  return (
    <div className="preferences-container">
      <h2 className="preferences-heading">Preferences</h2>
      <form className="preferences-form" onSubmit={handleSubmit}>
        <div className="preferences-input">
          <label className="preferences-label" htmlFor="preference1">
            Preference 1:
          </label>
          <input
            className="preferences-input-field"
            type="text"
            id="preference1"
            value={preference1}
            onChange={(e) => setPreference1(e.target.value)}
            placeholder="Enter preference 1"
            required
          />
        </div>
        <div className="preferences-input">
          <label className="preferences-label" htmlFor="preference2">
            Preference 2:
          </label>
          <input
            className="preferences-input-field"
            type="text"
            id="preference2"
            value={preference2}
            onChange={(e) => setPreference2(e.target.value)}
            placeholder="Enter preference 2"
            required
          />
        </div>
        <div className="preferences-input">
          <label className="preferences-label" htmlFor="preference3">
            Preference 3:
          </label>
          <input
            className="preferences-input-field"
            type="text"
            id="preference3"
            value={preference3}
            onChange={(e) => setPreference3(e.target.value)}
            placeholder="Enter preference 3"
            required
          />
        </div>
        <button className="preferences-submit-button" type="submit">
          Save Preferences
        </button>
      </form>
    </div>
  );
}

export default Preferences;
