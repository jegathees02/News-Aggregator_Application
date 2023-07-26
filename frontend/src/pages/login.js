import React, { useState } from "react";
import Logo from "../components/logo";
import ".././assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);

    // Call the validate function to check if the inputs are valid
    validate();
    const dataForm = {
      email : email,
      password : password
    };

    // If the inputs are valid, proceed with the login API call
    if (isValid) {
      axios
        .post("http://localhost:8080/api/v1/auth/authenticate", dataForm)
        .then((response) => {
          console.log("Login successful:", response);
          const token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("email",email);
          localStorage.setItem("newsapi","https://api.worldnewsapi.com/search-news?api-key=35ec723270d040bfb6e059733a3eaf40&");
          // localStorage.setItem()
          dispatch({ type: "SET_USERNAME", payload: email });

          // Navigate to the home page after successful login
          navigate("/home");
        })
        .catch((error) => {
          console.error("Login failed:", error);
          alert("Invalid credentials");
        });
    }
  };

  let isValid = true;
  const validate = () => {
    isValid = true;

    if (email === "") {
      setEmailError("*Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("*Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }
  };

  const handleUserNameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-all">
      {/* ... Your login form JSX ... */}
      <div className="login-main container ">
            <div className="login-logo-section row" >
                <Logo/>
            </div>
            <div className="login-content row ">
                 <div className="login-img col-md-12 col-sm-12 col-lg-12"  >
                    <div>
                        <img className="login-img-main" src="https://c1.wallpaperflare.com/preview/415/175/739/magnifier-newspaper-history-glass.jpg" alt="img" />
                    </div>
                </div>
                    <div className="login-inputs" >
                        <div className="login-input-main" >
                            <div className="login-text">
                                <h2 className="text-slate-50 text-4xl font-bold  text-center"><span className="text-red-500">i</span>News<span className="text-red-500">.</span> &nbsp; Login</h2>
                            </div>
                            <div className="login-input-form">
      <form className="form-group" onSubmit={handleSubmit}>
        <label className="text-slate-100 text-3xl login-input">
          Username:
          <input
            className="input-box text-slate-950"
            type="text"
            value={email}
            id="email"
            placeholder="Username...."
            onChange={handleUserNameChange}
          />
          {emailError && (
            <div className="login-error text-red-500 text-xl">{emailError}</div>
          )}
        </label>
        <label className="text-slate-100 text-3xl login-input">
          Password:
          <input
            className="input-box text-slate-950"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <div className="login-error text-red-500 text-xl">
              {passwordError}
            </div>
          )}
        </label>
        <div className="login-button">
          <button className="login-clear-button text-slate-100" onClick={handleClear}>
            Clear
          </button>
          <button
            className={
              clicked
                ? "bg-blue-500 text-slate-100 login-login-button"
                : "login-login-button text-slate-100"
            }
            type="submit"
          >
            {clicked ? "Logging in..." : "LOGIN"}
          </button>
        </div>
        <label className="text-slate-100 text-3xl login-input">
          New User??
          <button className="login-signup-button text-slate-100">
            <Link to="/signup">SignUp</Link>
          </button>
        </label>
      </form>
      </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
  );
}

export default Login;
