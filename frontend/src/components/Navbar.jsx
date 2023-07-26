// import React from "react";
// import Logo from "./logo";
// import { Link } from "react-router-dom";
// import ".././assets/css/navbar.css";

// function navbar() {
//     return(
//         <>
//         <div className="container navbar-container">
//             <div className="row">
//                 <div className="nav-bar-logo">
//                     <Logo />
//                 </div>
//                 <div className="text-3xl text-slate-100 nav-bar-main">
//                     <nav>
//                         <ul>
//                             <li>HOME</li>
//                             <li>TRENDING</li>
//                             <li>BOOKMARKk</li>
//                             <li>ABOUT</li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default navbar;
// function navbar() {
//     const navEle = [
//         {
//             navElement:'HOME'
//         },
//         {
//             navElement:'TRENDING'
//         }
//     ]
//     const navElementMap = navEle.map((props) => navEle);
//     return (
//         <div className="nav-bar-main container">
//             <div className="row">
//                 <div className="nav-bar-logo">
//                     <Logo/>
//                 </div>
//                 <div className="nav-bar-elements">
//                 <nav>
//                     <ul text-slate-100>
//                     {/* <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/">Trending</Link>
//                     </li>
//                     <li>
//                         <Link to="/">Bookmark</Link>
//                     </li>
//                     <li>
//                         <Link to="/">About</Link>
//                     </li> */}
//                     {/* {navElementMap.map((props.navElement) => (
//                         <li key={ele}>{key}</li>
//                     ))} */}
//                     </ul>
//                 </nav>
//                 </div>
//             </div>
//         </div>
      
//     );
//   }
  
//   export default navbar;
// import React from 'react';
// // import '../style/page.css';
// import { Link } from 'react-router-dom';
// import ".././assets/css/navbar.css";
// // import profile from "../images/profile.jpeg";
// // import logo from '../images/logo.png';
// const NavBar = () => {
//     return (
//         <div className='nav'>
//             {/* <img src={} alt='logo' style={{ width: 50, marginLeft: 15, height: 50 }}></img> */}
//             <h3 style={{ color: 'black', paddingTop: 8, marginLeft: 15, fontFamily: 'fantasy', fontStyle: 'italic', fontSize: 30 }}> Resume<span style={{ color: 'red' }}>Pro</span><span style={{ color: 'blue' }}>.io</span></h3>
//             <div>
//                 <ul>
//                     <li >
//                         <Link to="/home" style={{ color: 'black', fontSize: 20, padding: 10, }}>Home</Link>
//                     </li>
//                     <li className='links'>
//                         <Link to="/about" style={{ color: 'black', fontSize: 20, padding: 10, }}>About</Link>
//                     </li>
//                     <li className='links'>
//                         <Link to="/contact" style={{ color: 'black', fontSize: 20, padding: 10, }}>Contact</Link>
//                     </li>
//                 </ul>

//             </div>
//             <div className='user'>
//                 <li className='navButtons'>
//                     <Link to="/login" style={{ padding: 10, color: "#01a5c6", borderRadius: 5, paddingLeft: 17, paddingRight: 17 }} className='navButton'>Login</Link>
//                 </li>
//                 <li className='navButtons'>
//                     <Link to="/signup" className='navlinks'>SignUp</Link>
//                 </li>

//                 {/* <img src={} alt="email" className="pro" /> */}
//             </div>
//             {/* <div className="container-image"> */}
//             {/* <h2 className="heading">User Login.</h2> */}
//             {/* <img alt="profile" className="profile" /> */}
//             {/* </div> */}

//         </div>
//     );
// };

// export default NavBar;

import React from "react";
// import Logo from "./Logo";
import Logo from "../components/logo";
// import "./Navbar.css";
import ".././assets/css/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-slate-950" >
    <nav className="navbar text-slate-100">
      <div className="ml-16 p-2 navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li className="navbar-links-li">
            <a className="navbar-links-li-a  text-xl text-slate-100" href="/home">HOME</a>
          </li>
          <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/breaking">BREAKING</a>
          </li>
          <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/trending">TRENDING</a>
          </li>
          <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/politics">POLITICS</a>
          </li>
          <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/entertainment">ENTERTAINMENT</a>
          </li>
          <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/sports">SPORTS</a>
          </li>
          <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/about">ABOUT</a>
          </li>
          {/* <li className="navbar-links-li">
            <a className="navbar-links-li-a text-xl text-slate-100" href="/contact">CONTACT</a>
          </li> */}
          {/* Add more links as needed */}
        </ul>
        <div className="navbar-profile">
          <img  className="navbar-profile-img cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0chI3bLTtIar9MM7tGc4JMDw7pKD1E7g-A&usqp=CAU" alt="Profile" />
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;