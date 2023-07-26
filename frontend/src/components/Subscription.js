import React, { useState ,useEffect} from "react";
import "../assets/css/subscription.css";
import { Dna } from "react-loader-spinner";



function Subscription() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform desired actions or send data to backend
      console.log("Form submitted!");
      console.log("Card Number:", cardNumber);
      console.log("Card Name:", cardName);
      console.log("Expiry Date:", expiryDate);
      console.log("CVV:", cvv);
      // Reset the form fields
      setCardNumber("");
      setCardName("");
      setExpiryDate("");
      setCvv("");
      setErrors({});
    } else {
      // Form has validation errors, display error messages
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Card Number validation
    if (!cardNumber) {
      errors.cardNumber = "Card number is required";
    }

    // Card Name validation
    if (!cardName) {
      errors.cardName = "Cardholder name is required";
    }

    // Expiry Date validation
    if (!expiryDate) {
      errors.expiryDate = "Expiry date is required";
    }

    // CVV validation
    if (!cvv) {
      errors.cvv = "CVV is required";
    }

    return errors;
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Dna
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="subscription-container">
      <h2 className="subscription-heading">Subscription Details</h2>
      <form className="subscription-form" onSubmit={handleSubmit}>
        <div className="subscription-input">
          <label className="subscription-label" htmlFor="cardNumber">
            Card Number:
          </label>
          <input
            className="subscription-input-field"
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
          {errors.cardNumber && (
            <span className="subscription-error">{errors.cardNumber}</span>
          )}
        </div>
        <div className="subscription-input">
          <label className="subscription-label" htmlFor="cardName">
            Card Name:
          </label>
          <input
            className="subscription-input-field"
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter cardholder name"
            required
          />
          {errors.cardName && (
            <span className="subscription-error">{errors.cardName}</span>
          )}
        </div>
        <div className="subscription-input">
          <label className="subscription-label" htmlFor="expiryDate">
            Expiry Date:
          </label>
          <input
            className="subscription-input-field"
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
          {errors.expiryDate && (
            <span className="subscription-error">{errors.expiryDate}</span>
          )}
        </div>
        <div className="subscription-input">
          <label className="subscription-label" htmlFor="cvv">
            CVV:
          </label>
          <input
            className="subscription-input-field"
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            required
          />
          {errors.cvv && (
            <span className="subscription-error">{errors.cvv}</span>
          )}
        </div>
        <button className="subscription-submit-button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscription;
