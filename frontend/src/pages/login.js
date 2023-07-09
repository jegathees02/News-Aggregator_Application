import React from "react";
import Logo from "../components/logo";
import "../components/css/login.css";
function Login() {
    return(
        <>
        <div className="login-main container">
            <div className="login-logo-section row" >
                <Logo/>
            </div>
            <div className="login-content row">
                 <div className="login-img col-md-6 col-sm-12 col-lg-6"  >
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
                                <form className="form-group">
                                    <label className="text-slate-100 text-3xl login-input">Username/Email:
                                        <input className="input-box text-slate-950" type="text" placeholder="Email/Username" />
                                        </label>
                                    <label className="text-slate-100 text-3xl login-input">Password:
                                        <input className="input-box text-slate-950" type="password" placeholder="Password"></input>
                                        </label>
                                        <div className="login-button">
                                        <button className="login-clear-button text-slate-100">Clear</button>
                                        <button className="login-login-button  text-slate-100">Login</button>
                                        </div>
                                        
                                    <label className="text-slate-100 text-3xl login-input">
                                        New User??
                                        {/* <a href="/signup" >SignUp</a> */}
                                        <button className="login-signup-button text-slate-100">SignUp</button>
                                        {/* <Link to "/signup">Sign Up </Link> */}
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
        </>
    )
}
export default Login;