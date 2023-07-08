import React from "react";
import Logo from "../components/logo";
import "../components/css/login.css";
function Login() {
    return(
        <>
        <div className="login-main">
            <div className="login-logo-section" >
                <Logo/>
            </div>
            <div className="login-content">
                 <div className="login-img" >
                    <img className="login-img-main" src="https://c1.wallpaperflare.com/preview/415/175/739/magnifier-newspaper-history-glass.jpg" alt="img" />
                 </div>
                 <div className="login-inputs" >
                    <div className="login-input-main" >
                        <div className="login-text">
                            <h2 className="text-green-500">iNews. Login</h2>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        </>
    )
}
export default Login;