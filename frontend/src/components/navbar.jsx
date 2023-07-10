import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";
import ".././assets/css/navbar.css";

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
function navbar() {
    const navEle = [
        {
            navElement:'HOME'
        },
        {
            navElement:'TRENDING'
        }
    ]
    const navElementMap = navEle.map((props) => navEle);
    return (
        <div className="nav-bar-main container">
            <div className="row">
                <div className="nav-bar-logo">
                    <Logo/>
                </div>
                <div className="nav-bar-elements">
                <nav>
                    <ul text-slate-100>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Trending</Link>
                    </li>
                    <li>
                        <Link to="/">Bookmark</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li> */}
                    {/* {navElementMap.map((props.navElement) => (
                        <li key={ele}>{key}</li>
                    ))} */}
                    </ul>
                </nav>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default navbar;