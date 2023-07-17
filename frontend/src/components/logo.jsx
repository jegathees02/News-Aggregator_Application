import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ".././assets/css/logo.css";
function Logo() {
    const navigate = useNavigate();
    const handleLogoClick = (e) => {
        // e.preventDefault();
        <Link to="/login" />
    }
    return(
        <>
        <div className="bg-black logo-container">
            <div className="logo-main " onClick={()=>navigate("/")}>
                <h2 className="text-3xl text-slate-100 font-sans font-bold"><span className="text-red-700 text-3xl font-bold" >i</span>
                    News<span className="text-red-600 text-3xl font-bold">.</span>
                </h2>
            </div>
        </div>
        </>
    )
}
export default Logo;