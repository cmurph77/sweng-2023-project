import homePage from './pages/homePage';
import resultPage from './pages/resultPage';
import Route from './Route';
import React, { useState, useEffect } from "react";
import './pages/App.css';

function App(){
  /*

    */
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:3000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
  
    return (
      <div>
        <Route path = "/">
          {homePage()}
        </Route>
        <Route path = "/result">
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          {resultPage(message)}
        </Route>
      </div>
    );
}

export default App;