import homePage from './pages/homePage';
import resultPage from './pages/resultPage';
import viewRawData from './pages/viewRawData';

import Route from './Route';
//import React, { useState, useEffect } from "react";
import './pages/App.css';

function App(){
  
    return (
      <div>
        <Route path = "/">
          {homePage()}
        </Route>
        <Route path = "/result">
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          {resultPage()}
        </Route>
        <Route path = "/rawdata">
          {viewRawData()}
        </Route>
      </div>
    );

}

export default App;