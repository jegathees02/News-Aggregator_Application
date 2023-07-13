import React, { useState } from "react";
import Logo from "../components/logo";
// import "../components/css/login.css";
import ".././assets/css/login.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/login-background-image.jpg";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const [clicked,setClicked] = useState(false);
    const navigate = useNavigate();


    const handleClear = (event) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setClicked(true);
        setTimeout(() => {
            setClicked(false);},100);
        
        validate();
        
    }

    const validate = () => {
        let isValid = true;
        if(email === "") {
            setEmailError("*Email is required");
            isValid =false;
        }
        else {
            setEmailError("");
        }
        if(password === "") {
            isValid = false;
            setPasswordError("*Password is required");
        }
        else {
            setPasswordError("");
        }
        if(isValid) {
            // setEmail("");
            // setPassword("");
            // alert("Login Successful");
            navigate('/home');
        }
    }
    return(
        <div className="login-all">
        {/* <img src="https://media.istockphoto.com/id/185001125/photo/rolled-newspaper-pages.jpg?s=1024x1024&w=is&k=20&c=0A85y9An4IcyvyqqZ9eNeXAxCC-2HV9mFp9REFQkK6g=" alt="img" /> */}
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
                                    <label className="text-slate-100 text-3xl login-input">Username/Email:
                                        <input className="input-box text-slate-950" type="text" value={email}
                                         id = "email" placeholder="Email/Username"
                                        onChange={(e) => setEmail(e.target.value)} />
                                        {emailError && (<div className="login-error text-red-500 text-xl">{emailError}</div>)}
                                        </label>
                                    <label className="text-slate-100 text-3xl login-input">Password:
                                        <input className="input-box text-slate-950" type="password" id = "password" placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)}></input>
                                        {passwordError && (<div className="login-error text-red-500 text-xl">{passwordError}</div>)}
                                        </label>
                                        <div className="login-button">
                                        <button className="login-clear-button text-slate-100" onClick={handleClear}>Clear</button>
                                        <button className={clicked ? "bg-blue-500 text-slate-100 login-login-button"  : "login-login-button  text-slate-100"} type="submit" onSubmit={handleSubmit}>{clicked ?"LOGIN" && <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />: "LOGIN"}</button>
                                        </div>
                                        
                                    <label className="text-slate-100 text-3xl login-input">
                                        New User??
                                        {/* <a href="/signup" >SignUp</a> */}
                                        <button className="login-signup-button text-slate-100"><Link to ="/signup">SignUp</Link></button>
                                        {/* <Link to "/signup">Sign Up </Link> */}
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
        </div>
    )
}
export default Login;