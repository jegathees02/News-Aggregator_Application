import React, { useState } from "react";
import Logo from "../components/logo";
import { Link } from "react-router-dom";
// import "../components/css/signup.css";
import ".././assets/css/signup.css";
// import ".././assets/css/login.css";
// import { useState } from "react";


function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
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
    const [ageError,setAgeError] = useState('');
    const [statesError,setStatesError] = useState('');
    const [districtError,setDistrictError] = useState('');
    const [cityError,setCityError] = useState('');
    const [preference1Error,setPreference1Error] = useState('');
    const [preference2Error,setPreference2Error] = useState('');
    const [preference3Error,setPreference3Error] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [retype_passwordError,setRetype_passwordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        validate();
    }
    const validate = () => {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const strWithNum = /\d/;
        // const isValidStr = strWithNum.test
        let isValidStr;
        // let isValidEmail;
        // const isValidEmail = emailRegex.test(email);
        if(name === "") {
            setNameError("*Name is required");
            isValid = false;
        }
        else if((strWithNum.test(name))) {
            setNameError("*Name cannot contain numbers");
        }
        if(email === "") {
            setEmailError("*Email is required");
            isValid = false;
        }
        else if(!(emailRegex.test(email))) {
            setEmailError("Invalid Email");
            isValid = false;
        }
        if(age === 0) {
            setAgeError("*Age cannot be zero");
            isValid = false;
        }
        else if(age < 0 || age > 100) {
            setAgeError("*Age is invalid");
            isValid = false;
        }
        if(states === "") {
            setStatesError("*State is required");
            isValid = false;
        }
        else if(!(isValidStr = strWithNum.test(states))) {
            setStatesError("*State cannot contain numbers");
        }
        if(district === "") {
            setDistrictError("*District is required");
            isValid = false;
        }
        else if(!(isValidStr = strWithNum.test(district))) {
            setDistrictError("*District cannot contain numbers");
        }
        if(city === "") {
            setCityError("*City is required");
            isValid = false;
        }
        else if(!(isValidStr = strWithNum.test(city))) {
            setCityError("*City cannot contain numbers");
        }
        if(preference1 === "") {
            setPreference1Error("*Preference is required");
            isValid = false;
        }
        else if(!(isValidStr = strWithNum.test(preference1))) {
            setPreference1Error("*Preference cannot contain numbers");
        }
        if((strWithNum.test(preference2))) {
            setPreference2Error("*Preference cannot contain numbers");
        }
        if((strWithNum.test(preference2))) {
            setPreference3Error("*Preference cannot contain numbers");
        }
        if(password === "") {
            setPasswordError("*Password is required");
            isValid = false;
        }
        else if(password.length < 8) {
            setPasswordError("*Password length must be greater than 8");
            isValid = false;
        }
        if(retype_password === "") {
            setRetype_passwordError("*Re-type password");
            isValid = false;
        }
        else if(password !== retype_password) {
            setRetype_passwordError("*Password doesn't match");
        }

        if(isValid) {
            alert("signup-success");
        }

    }


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

                                    <label className="text-slate-100 text-3xl login-input">Name:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Name" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                        {nameError && (<div className="login-error text-red-500 text-xl">{nameError}</div>)}
                                    </label>
                                    <label className="text-slate-100 text-3xl login-input">Age:     
                                        <input className="input-box text-slate-950"  type="Number" placeholder="Age" value={age} 
                                        onChange={(e) => setAge(e.target.value)}/>
                                        {ageError && (<div className="login-error text-red-500 text-xl">{ageError}</div>)}
                                    </label>                            <label className="text-slate-100 text-3xl login-input" >State:
                                        <input className="input-box text-slate-950"  type="text" placeholder="State" value={states} 
                                        onChange={(e) => setStates(e.target.value)}/>
                                        {statesError && (<div className="login-error text-red-500 text-xl">{statesError}</div>)}
                                    </label>
                                    <label className="text-slate-100 text-3xl login-input">District:
                                        <input className="input-box text-slate-950"  type="text" placeholder="District" value={district} 
                                        onChange={(e) => setDistrict(e.target.value)}/>
                                        {districtError && (<div className="login-error text-red-500 text-xl">{districtError}</div>)}
                                    </label>
                                    <label className="text-slate-100 text-3xl login-input">City:
                                        <input className="input-box text-slate-950"  type="text" placeholder="City" value={city} 
                                        onChange={(e) => setCity(e.target.value)}/>
                                        {cityError && (<div className="login-error text-red-500 text-xl">{cityError}</div>)}
                                    </label>
                                    <label className="text-slate-100 text-3xl login-input">Set Password:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Password" value={password} 
                                        onChange={(e) => setPassword(e.target.value)}/>
                                        {passwordError && (<div className="login-error text-red-500 text-xl">{passwordError}</div>)}
                                    </label>

                                </div>
                                <div className="signup-form-input-right">

                                    <label className="text-slate-100 text-3xl login-input">Email Id:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Email Id" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                        {emailError && (<div className="login-error text-red-500 text-xl">{emailError}</div>)}
                                    </label>  
                                    <label className="text-slate-100 text-3xl login-input">Preference 1:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Preference-1" value={preference1} 
                                        onChange={(e) => setPreference1(e.target.value)}/>
                                        {preference1Error && (<div className="login-error text-red-500 text-xl">{preference1Error}</div>)}
                                    </label>
                                    <label className="text-slate-100 text-3xl login-input">Preference 2:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Preference-2" value={preference2} 
                                        onChange={(e) => setPreference2(e.target.value)}/>
                                        {preference2Error && (<div className="login-error text-red-500 text-xl">{preference2Error}</div>)}
                                    </label>
                                    <label className="text-slate-100 text-3xl login-input">Preference 3:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Preference-3" value={preference3} 
                                        onChange={(e) => setPreference3(e.target.value)}/>
                                        {preference3Error && (<div className="login-error text-red-500 text-xl">{preference3Error}</div>)}
                                    </label>  
                                    <label className="text-slate-100 text-3xl login-input">Re-type Password:
                                        <input className="input-box text-slate-950"  type="text" placeholder="Re-type Password" value={retype_password} 
                                        onChange={(e) => setRetype_password(e.target.value)}/>
                                        {retype_passwordError && (<div className="login-error text-red-500 text-xl">{retype_passwordError}</div>)}
                                    </label>

                                </div>
                            </div>
                            
                            
                            
                            
                            
                            
                            
                            <button className="login-login-button text-slate-100" type="submit" onClick={handleSubmit}><Link to="/signup">SignUp</Link>
</button>
                            {/* <button className="login-login-button text-slate-100" type="submit" onSubmit={handleSubmit}><Link to ="/signup">SignUp</Link></button> */}
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}
export default Signup;