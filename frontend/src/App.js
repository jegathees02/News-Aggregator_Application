import React from 'react';
import getStartedComponent from './components/getStartedComponent';
import Logo from './components/logo';
import Login from './pages/login';
import signup from './pages/signup';
import GetStarted from './pages/GetStarted';
// import navbar from './components/navbar';
import Navbar from './components/Navbar';
// import sidebar from './components/sidebar';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path = "/" element = {<getStartedComponent /> } /> */}
        <Route path = "/" Component={GetStarted} />
        <Route path = "/logo" Component={Logo} />
        <Route path = "/login" Component={Login} />
        <Route path='/signup' Component={signup} />
        <Route path = '/navbar' Component={Navbar} />
        <Route path = '/sidebar' Component={sidebar} />
        <Route path = '/home' Component={HomePage} />
        <Route path = '/trending' Component={TrendingPage} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
