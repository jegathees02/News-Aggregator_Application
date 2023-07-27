// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import '../style/page.css'
// import '.././assets/navbar.css';
// // import NavBar from './navBar';
// import ReactDOM from 'react-dom';
// // import Personal from './personal.js';
// function sidebar() {

//         const personal = () => {
//             const componentContainer = document.getElementById('display');
//             ReactDOM.render(<Personal />, componentContainer);
//         };
//     const professional = () => {
//         const componentContainer = document.getElementById('display');
//         ReactDOM.render(<Personal />, componentContainer);
//     };
//     const educational = () => {
//         const componentContainer = document.getElementById('display');
//         ReactDOM.render(<Personal />, componentContainer);
//     };
//     const skills = () => {
//         const componentContainer = document.getElementById('display');
//         ReactDOM.render(<Personal />, componentContainer);
//     };
//     const hobbies = () => {
//         const componentContainer = document.getElementById('display');
//         ReactDOM.render(<Personal />, componentContainer);
//     };
//     const projects = () => {
//         const componentContainer = document.getElementById('display');
//         ReactDOM.render(<Personal />, componentContainer);
//     };
//     return (<>
//         <div >
//             <NavBar />
//             <div style={{ display: 'flex', justifyContent: 'left'}}>
//             <div className='side'>

//                     <ul class="nav flex-column">
//                         <li class="nav-item">
//                             <Link className="nav-link" onClick={personal} >Personal Details</Link >
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" onClick={professional} >Professional Details</Link >
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" onClick={personal} >Educational Details</Link >
//                         </li>
//                         <li className="nav-item">
//                             <Link  className="nav-link" onClick={personal} >Skills</Link >
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" onClick={personal} >Projects</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" onClick={personal} >Hobbies</Link >
//                         </li>
//                         {/* <li className="nav-item"> */}
//                         <Link to="/" className="navlinks" style={{ marginLeft: 40, marginTop: 40, paddingLeft: 45 }}>Submit</Link>
//                         {/* </li> */}
//                     </ul>


//             </div>
//                 <div style={{ width:'80%' }} id='display'>

//                 </div>
    
//             </div>
           
//         </div>
//     </>);
// }

// export default sidebar;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
// import { IconContext } from "react-icons/lib";
 
// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
 
// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
 
// const SidebarNav = styled.nav`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;
 
// const SidebarWrap = styled.div`
//   width: 100%;
// `;
 
// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(false);
 
//   const showSidebar = () => setSidebar(!sidebar);
 
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <Nav>
//           <NavIcon to="#">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </NavIcon>
//           <h1
//             style={{ textAlign: "center",
//                      marginLeft: "200px",
//                      color: "green" }}
//           >
//             GeeksforGeeks
//           </h1>
//         </Nav>
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             <NavIcon to="#">
//               <AiIcons.AiOutlineClose onClick={showSidebar} />
//             </NavIcon>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//           </SidebarWrap>
//         </SidebarNav>
//       </IconContext.Provider>
//     </>
//   );
// };
 
// export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";

// function sidebar() {
//     return(
//         <>
//         <div className="container">

//         </div>
//         </>
//     )
// }
// export default sidebar;

//import useState hook to create menu collapse state
// import React, { useState } from "react";

// //import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";

// //import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
// import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";


// //import sidebar css from react-pro-sidebar module and our custom css 
// // import "react-pro-sidebar/dist/css/styles.css";
// // import "./Header.css";
// import "./../assets/css/sidebar.css";


// const sidebar = () => {
  
//     //create initial menuCollapse state using useState hook
//     const [menuCollapse, setMenuCollapse] = useState(false)

//     //create a custom function that will change menucollapse state from false to true and true to false
//   const menuIconClick = () => {
//     //condition checking to change state from true to false and vice versa
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id="header">
//           {/* collapsed props to change menu size using menucollapse state */}
//         <ProSidebar collapsed={menuCollapse}>
//           <SidebarHeader>
//           <div className="logotext">
//               {/* small and big change using menucollapse state */}
//               <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
//             </div>
//             <div className="closemenu" onClick={menuIconClick}>
//                 {/* changing menu collapse icon on click */}
//               {menuCollapse ? (
//                 <FiArrowRightCircle/>
//               ) : (
//                 <FiArrowLeftCircle/>
//               )}
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <Menu iconShape="square">
//               <MenuItem active={true} icon={<FiHome />}>
//                 Home
//               </MenuItem>
//               <MenuItem icon={<FaList />}>Category</MenuItem>
//               <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
//               <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//               <MenuItem icon={<BiCog />}>Settings</MenuItem>
//             </Menu>
//           </SidebarContent>
//           <SidebarFooter>
//             <Menu iconShape="square">
//               <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
//             </Menu>
//           </SidebarFooter>
//         </ProSidebar>
//       </div>
//     </>
//   );
// };

// export default sidebar;


// import React, { useState } from "react";
// // import "./Sidebar.css";
// import '../assets/css/sidebar.css';

// function sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
//       <div className="sidebar-header">
//         <h2>Sidebar</h2>
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isExpanded ? "Collapse" : "Expand"}
//         </button>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Services</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default sidebar;


// import React, { useState } from "react";
// // import "./Sidebar.css";
// import ".././assets/css/sidebar.css"

// function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
//       <div className="sidebar-header">
//         <h2>Sidebar</h2>
//         <button className="toggle-button" onClick={toggleSidebar}>
//           {isExpanded ? "Collapse" : "Expand"}
//         </button>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Services</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;



import React from "react";
// import "./sidebar.css";
import ".././assets/css/sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="sidebar text-xl text-slate-100 bg-slate-950">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a text-slate-100" href="/article">ARTICLES</a>
        </li>
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a" href="/saved">SAVED ARTICLES</a>
        </li>
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a" href="/search">SEARCH</a>
        </li>
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a" href="/preference">PREFERENCES</a>
        </li>
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a" href="/subscription">SUBSCRIPTION</a>
        </li>
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a" href="/feedback">FEEDBACK</a>
        </li>
        {/* <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a" href="/account">ACCOUNT</a>
        </li> */}
        <li className="sidebar-menu-li text-slate-100 ">
          <a className="sidebar-menu-li-a cursor-pointer" onClick={handleLogout}>LOGOUT</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;