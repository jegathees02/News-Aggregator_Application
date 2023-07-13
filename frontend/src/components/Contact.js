import React, { useState } from "react";
import "../assets/css/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend or perform any desired actions
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Description:", description);
    // Reset the form fields
    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <div className="contact-main">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-input">
          <label className="contact-label" htmlFor="name">Name:</label>
          <input
            className="contact-input-field"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact-input">
          <label className="contact-label" htmlFor="email">Email:</label>
          <input
            className="contact-input-field"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-input">
          <label className="contact-label" htmlFor="description">Description:</label>
          <textarea
            className="contact-textarea-field"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="contact-submit-button" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
