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
import PoliticsPage from './pages/PoliticsPage';
import EntertainmentPage from './pages/EntertainmentPage';
import SportsPage from './pages/SportsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubscriptionPage from './pages/Subscriptionpage';
import ArticlePage from './pages/ArticlePage';
import BreakingNewsPage from './pages/BreakingNewsPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import sidebar from './components/Sidebar';
import Footer from './components/Footer';


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
        <Route path = '/footer' Component={Footer} />
        <Route path = '/home' Component={HomePage} />
        <Route path = '/trending' Component={TrendingPage} />
        <Route path = '/politics' Component={PoliticsPage} />
        <Route path = '/entertainment' Component={EntertainmentPage} />
        <Route path = '/sports' Component={SportsPage} />
        <Route path = '/about' Component={AboutPage} />
        <Route path = '/contact' Component={ContactPage} />
        <Route path = '/subscription' Component={SubscriptionPage} />
        <Route path = '/article' Component={ArticlePage} />
        <Route path = '/breaking' Component={BreakingNewsPage} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
