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
                 <div className="login-img col-md-12 col-sm-2 col-lg-12"  >
                    <div>
                        <img className="login-img-main" src="https://c1.wallpaperflare.com/preview/415/175/739/magnifier-newspaper-history-glass.jpg" alt="img" />
                    </div>
                </div>
                    <div className="login-inputs" >
                        <div className="login-input-main" >
                            <div className="login-text">
                                <h2 className="text-slate-50 text-2xl font-bold text-center">iNews. Login</h2>
                            </div>
                            <div className="login-input-form">
                                <form>
                                    <label className="text-slate-100">Username/Email:
                                        <input type="text" placeholder="Email/Username" />
                                    </label>
                                    <label className="text-slate-100">Password:
                                        <input type="password" placeholder="Password"></input>
                                    </label>
                                    <label className="text-slate-100">
                                        New User??
                                        <a href="/signup" >SignUp</a>
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