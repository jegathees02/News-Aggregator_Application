// import React from "react";
import {useNavigate} from 'react-router-dom';

function Logout() {
    
    const navigate  = useNavigate();
    
    const handleLogout = () => {
    navigate("/login")
    localStorage.clear();
    }
    handleLogout();
}

export default Logout;