import React, { useState } from "react";
import Logo from "../components/logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ".././assets/css/signup.css";
import axios from "axios";



function Signup() {
    const navigate  = useNavigate();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [age,setAge] = useState('');
    const [states,setStates] = useState('');
    const [district,setDistrict] = useState('');
    const [city,setCity] = useState('');
    const [preference1,setPreference1] = useState('');
    const [preference2,setPreference2] = useState('');
    const [preference3,setPreference3] = useState('');
    const [password,setPassword] = useState('');
    const [retype_password,setRetype_password] = useState('');


    const [nameError,setNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [mobileError,setMobileError] = useState('');
    const [ageError,setAgeError] = useState('');
    const [statesError,setStatesError] = useState('');
    const [districtError,setDistrictError] = useState('');
    const [cityError,setCityError] = useState('');
    const [preference1Error,setPreference1Error] = useState('');
    const [preference2Error,setPreference2Error] = useState('');
    const [preference3Error,setPreference3Error] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [retype_passwordError,setRetype_passwordError] = useState('');

    const handleClear = (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setMobile('');
        setAge('');
        setStates('');
        setDistrict('');
        setCity('');
        setPreference1('');
        setPreference2('');
        setPreference3('');
        setPassword('');
        setRetype_password('');
        setNameError('');
        setEmailError('');
        setMobileError('');
        setAgeError('');
        setStatesError('');
        setDistrictError('');
        setCityError('');
        setPasswordError('');
        setRetype_passwordError('');
        setPreference1Error('');
        setPreference2Error('');
        setPreference3Error('');
        
    }
    const dataLoader = {
        name : name,
        email: email,
        age: age,
        mobile: mobile,
        state : states,
        district : district,
        city : city,
        password : password,
        p1 : preference1,
        p2 : preference2,
        p3 : preference3

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validate();
        if(isValid) {
            axios.post("http://localhost:8080/api/v1/auth/register",
            dataLoader)
            .then((response) => {
                console.log(response.data);
                console.log("response section");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error :",error);
                
            });
            
    
            
        }
    }
    let isValid = true;
    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const onlyStr = /^[a-zA-Z]+$/;
        const isValidMobile = /^\d{10}$/;
      
        let isValid = true;
      
        if (name === "") {
          setNameError("*Name is required");
          isValid = false;
        } else if (!onlyStr.test(name)) {
          setNameError("*Name cannot contain numbers");
          isValid = false;
        } else {
          setNameError("");
        }
      
        if (email === "") {
          setEmailError("*Email is required");
          isValid = false;
        } else if (!emailRegex.test(email)) {
          setEmailError("Invalid Email");
          isValid = false;
        } else {
          setEmailError("");
        }
      
        if (!isValidMobile.test(mobile)) {
          setMobileError("*Invalid Mobile Number");
          isValid = false;
        } else {
          setMobileError("");
        }
      
        if (age === 0) {
          setAgeError("*Age cannot be zero");
          isValid = false;
        } else if (age === "") {
          setAgeError("*Age is required");
          isValid = false;
        } else if (age < 0 || age > 100) {
          setAgeError("*Age is invalid");
          isValid = false;
        } else {
          setAgeError("");
        }
      
        if (states === "") {
          setStatesError("*State is required");
          isValid = false;
        } else if (!onlyStr.test(states)) {
          setStatesError("*State cannot contain numbers");
          isValid = false;
        } else {
          setStatesError("");
        }
      
        if (district === "") {
          setDistrictError("*District is required");
          isValid = false;
        } else if (!onlyStr.test(district)) {
          setDistrictError("*District cannot contain numbers");
          isValid = false;
        } else {
          setDistrictError("");
        }
      
        if (city === "") {
          setCityError("*City is required");
          isValid = false;
        } else if (!onlyStr.test(city)) {
          setCityError("*City cannot contain numbers");
          isValid = false;
        } else {
          setCityError("");
        }
      
        if (preference1 === "") {
          setPreference1Error("*Preference is required");
          isValid = false;
        } else if (!onlyStr.test(preference1)) {
          setPreference1Error("*Preference cannot contain numbers");
          isValid = false;
        } else {
          setPreference1Error("");
        }
      
        if (!onlyStr.test(preference2)) {
          setPreference2Error("*Preference cannot contain numbers");
          isValid = false;
        } else {
          setPreference2Error("");
        }
      
        if (!onlyStr.test(preference3)) {
          setPreference3Error("*Preference cannot contain numbers");
          isValid = false;
        } else {
          setPreference3Error("");
        }
      
        if (password === "") {
          setPasswordError("*Password is required");
          isValid = false;
        } else if (password.length < 8) {
          setPasswordError("*Password length must be greater than 8");
          isValid = false;
        } else {
          setPasswordError("");
        }
      
        if (retype_password === "") {
          setRetype_passwordError("*Re-type password");
          isValid = false;
        } else if (password !== retype_password) {
          setRetype_passwordError("*Password doesn't match");
          isValid = false;
        } else {
          setRetype_passwordError("");
        }
      
        // return isValid; // Return the overall validity status
      };
      
    

    


    return(
        <>
        <div className="signup-main container">
            <div className="signup-logo-section row" >
                <Logo/>
            </div>
            <div className="signup-content row">
                <div className="signup-img">

                </div>
                <div className="signup-inputs">
                    <div className="signup-input-main">
                        <h2 className="text-slate-50 text-4xl font-bold  text-center"><span className="text-red-500">i</span>News<span className="text-red-500">.</span> &nbsp; SignUp</h2>
                    </div>
                    <div className="signup-input-form">
                        <form className="signup-form-tag" onSubmit={handleSubmit}>
                            <div className="signup-form-main-separator">
                                <div className="signup-form-input-left">
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Name:</label>
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="Name" value={name}
                                        onChange={(e) => setName(e.target.value)} /> 
                                        {nameError && (<div className="signup-error text-red-500 text-xl">{nameError}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Age:</label> 
                                    <input className="signup-input-box text-slate-950"  type="Number" placeholder="Age" value={age} 
                                        onChange={(e) => setAge(e.target.value)}/>
                                        {ageError && (<div className="signup-error text-red-500 text-xl">{ageError}</div>)} 
                                    </div>        
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input" >State:</label>
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="State" value={states} 
                                        onChange={(e) => setStates(e.target.value)}/> 
                                        {statesError && (<div className="signup-error text-red-500 text-xl">{statesError}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">District:</label>
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="District" value={district} 
                                        onChange={(e) => setDistrict(e.target.value)}/>
                                        {districtError && (<div className="signup-error text-red-500 text-xl">{districtError}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">City:</label>
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="City" value={city} 
                                        onChange={(e) => setCity(e.target.value)}/>
                                        {cityError && (<div className="signup-error text-red-500 text-xl">{cityError}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Set Password:</label>
                                        <input className="signup-input-box text-slate-950"  type="password" placeholder="Password" value={password} 
                                        onChange={(e) => setPassword(e.target.value)}/>
                                        {passwordError && (<div className="signup-error text-red-500 text-xl">{passwordError}</div>)}
                                    </div>

                                </div>
                                <div className="signup-form-input-right">
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Email Id:</label> 
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="Email Id" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                        {emailError && (<div className="signup-error text-red-500 text-xl">{emailError}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Mobile Number:</label> 
                                        <input className="signup-input-box text-slate-950"  type="number" placeholder="Mobile Number" value={mobile}
                                        onChange={(e) => setMobile(e.target.value)} />
                                        {mobileError && (<div className="signup-error text-red-500 text-xl">{mobileError}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Preference 1:</label>
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="Preference-1" value={preference1} 
                                        onChange={(e) => setPreference1(e.target.value)}/>
                                        {preference1Error && (<div className="signup-error text-red-500 text-xl">{preference1Error}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Preference 2:</label>
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="Preference-2" value={preference2} 
                                        onChange={(e) => setPreference2(e.target.value)}/>
                                        {preference2Error && (<div className="signup-error text-red-500 text-xl">{preference2Error}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Preference 3:</label>  
                                        <input className="signup-input-box text-slate-950"  type="text" placeholder="Preference-3" value={preference3} 
                                        onChange={(e) => setPreference3(e.target.value)}/>
                                        {preference3Error && (<div className="signup-error text-red-500 text-xl">{preference3Error}</div>)}
                                    </div>
                                    <div className="age">
                                    <label className="text-slate-100 text-3xl login-input">Re-type Password:</label>
                                        <input className="signup-input-box text-slate-950"  type="password" placeholder="Re-type Password" value={retype_password} 
                                        onChange={(e) => setRetype_password(e.target.value)}/>
                                        {retype_passwordError && (<div className="signup-error text-red-500 text-xl">{retype_passwordError}</div>)}
                                    </div>

                                </div>
                            </div>
                            
                            
                            
                            
                            
                            
                            

                            {/* <button className="login-login-button text-slate-100" type="submit" onSubmit={handleSubmit}><Link to ="/signup">SignUp</Link></button> */}
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="row signup-clear-button">
            <button className="login-clear-button text-slate-100"  onClick={handleClear}>CLEAR</button>
            </div>
            <div className="row signup-signup-button">
            <button className="login-login-button text-slate-100" type="submit" onClick={handleSubmit}><Link to="/signup">SIGNUP</Link></button>
            </div>
            </div>

        </div>
        </>
    );
}
export default Signup;