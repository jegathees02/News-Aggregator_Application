import React, { useState, useEffect } from "react";
import Logo from "../components/logo";
import "../assets/css/account.css";
import axios from "axios";
import { Dna } from "react-loader-spinner";

function Account() {

  

  // State variables for user data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [states, setStates] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [preference1, setPreference1] = useState('');
  const [preference2, setPreference2] = useState('');
  const [preference3, setPreference3] = useState('');

  // Function to fetch user data
  const fetchUserData = () => {
    // Mock implementation, replace with actual API endpoint
    const userId = localStorage.getItem('email'); // Replace with the actual user ID or identifier
    axios.get(`http://localhost:8080/api/v1/users/${userId}`)
      .then(response => {
        const userData = response.data; // Replace this with the correct data structure from the API response
        setName(userData.name);
        setEmail(userData.email);
        setMobile(userData.mobile);
        setAge(userData.age);
        setStates(userData.states);
        setDistrict(userData.district);
        setCity(userData.city);
        setPreference1(userData.preference1);
        setPreference2(userData.preference2);
        setPreference3(userData.preference3);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  };

  // Function to handle user data update
  const handleUpdate = () => {
    // Prepare the payload with updated user data
    const userData = {
      name: name,
      email: email,
      mobile: mobile,
      age: age,
      states: states,
      district: district,
      city: city,
      preference1: preference1,
      preference2: preference2,
      preference3: preference3,
    };

    // Mock implementation, replace with actual API endpoint
    const userId = localStorage.getItem('email'); // Replace with the actual user ID or identifier
    axios.put(`http://localhost:8080/api/v1/users/${userId}`, userData)
      .then(response => {
        console.log("User data updated successfully:", response.data);
        // Show a success message to the user or redirect to a success page
      })
      .catch(error => {
        console.error("Error updating user data:", error);
        // Show an error message to the user
      });
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
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
    <>
      <div className="account-main container">
        <div className="account-logo-section row">
          <Logo />
        </div>
        <div className="account-content row">
          {/* <div className="account-img"></div> */}
          <div className="account-inputs">
            <div className="account-input-main">
              <h2 className="text-slate-50 text-4xl font-bold  text-center">
                <span className="text-red-500">i</span>News
                <span className="text-red-500">.</span> &nbsp; Account
              </h2>
            </div>
            <div className="account-input-form">
              <form className="account-form-tag">
                <div className="account-form-main-separator">
                  <div className="account-form-input-left">
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Name:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Age:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        State:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={states}
                        onChange={(e) => setStates(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        District:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        City:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="account-form-input-right">
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Email Id:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Mobile Number:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Preference 1:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={preference1}
                        onChange={(e) => setPreference1(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Preference 2:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={preference2}
                        onChange={(e) => setPreference2(e.target.value)}
                      />
                    </div>
                    <div className="age">
                      <label className="text-slate-100 text-3xl account-input">
                        Preference 3:
                      </label>
                      <input
                        className="account-input-box text-slate-950"
                        type="text"
                        value={preference3}
                        onChange={(e) => setPreference3(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row account-update-button">
          <button
            className="account-update-button text-slate-100"
            onClick={handleUpdate}
          >
            Update Information
          </button>
        </div>
      </div>
    </>
  );
}

export default Account;
