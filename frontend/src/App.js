import React from 'react';
import getStartedComponent from './components/getStartedComponent';
import Logo from './components/logo';
import Login from './pages/login';
import signup from './pages/signup';
import navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path = "/" element = {<getStartedComponent /> } /> */}
        <Route path = "/" Component={getStartedComponent} />
        <Route path = "/logo" Component={Logo} />
        <Route path = "/login" Component={Login} />
        <Route path='/signup' Component={signup} />
        <Route path = '/navbar' Component={navbar} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
