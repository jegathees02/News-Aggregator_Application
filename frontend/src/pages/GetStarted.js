import React from "react";
import Logo from "../components/logo";
import ".././assets/css/getstarted.css";
import { Link } from "react-router-dom";


function GetStarted() {
    return(
        <>
        <div className="get-start-main container">
            <div className="get-start-logo row">
                <Logo />
            </div>
            <div className="get-start-content-main row border border-red-600 mt-4">
                <div className="get-start-left-side text-slate-100 text-2xl border border-red-600">
                    <h2 >left side</h2>
                </div>
                <div className="get-start-right-side border border-red-600">
                    <div className="get-start-right-img-area border border-red-600">
                        <div className="get-start-right-img">
                            <img className="rounded-xl" src="https://images.pexels.com/photos/1809342/pexels-photo-1809342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                        </div>
                        <h3 className="text-slate-100 text-2xl gs-tr">Get to know the news early<br /> as possible</h3>
                    </div>
                    <div className="get-start-button mt-3 mb-3">
                        <button className="get-start-btn-7"><span className="get-start-btn-7-span"><Link to="/login">Get Started!</Link></span></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default GetStarted;