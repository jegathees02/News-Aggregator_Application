import React from 'react';
import getStartedComponent from './components/getStartedComponent';
import Logo from './components/logo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path = "/" element = {<getStartedComponent /> } /> */}
        <Route path = "/" Component={getStartedComponent} />
        <Route path = "/logo" Component={Logo} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
