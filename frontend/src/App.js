import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import PreferencesPage from './pages/PreferencesPage';
import AccountPage from './pages/AccountPage';
import FeedbackPage from './pages/FeedbackPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Logout from './pages/Logout';
import SavedPage from './pages/SavedPage';
// import SearchPage from './pages/SearchPage';
import SearchNewsPage from './components/SearchNewsPage';
import SearchPage from './pages/SearchNewsPage';

function App() {
  // const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the user is authenticated
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path = "/" element = {<getStartedComponent /> } /> */}
        <Route path = "/" Component={GetStarted} />
        <Route path = "/logo" Component={Logo} />
        <Route path = "/login" Component={Login} />
        <Route path='/signup' Component={signup} />
        {/* <ProtectedRoute
          path = '/home' 
          Component = {HomePage}
          isAuthenticated = {isAuthenticated}
          /> */}
          {/* <ProtectedRoute */}
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
        <Route path = '/preference' Component={PreferencesPage} />
        <Route path = '/account' Component={AccountPage} />
        <Route path = '/saved' Component={SavedPage} />
        <Route path = '/feedback' Component={FeedbackPage} />
        <Route path = '/logout' Component={Logout} />
        <Route path = '/search' Component={SearchPage} />
        
      </Routes>
      </Router>
    </div>
  );
}


// function ProtectedRoute({ element: Component, isAuthenticated, ...rest }) {
//   return (
//     isAuthenticated ? <Route {...rest} element={<Component {...rest} />} /> : <Link to="/login" />
//   );
// }
export default App;
