import React from 'react';
import getStartedComponent from './components/getStartedComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path = "/" element = {<getStartedComponent /> } /> */}
        <Route path = "/" Component={getStartedComponent} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
