//import homePage from './pages/homePage';
import Link from './components/Link';
import axeCoreLogo from './images/axeCoreLogo.png';
import { useState } from 'react';
import resultPage from './pages/resultPage';
<<<<<<< HEAD
<<<<<<< HEAD
import viewRawData from './pages/viewRawData';

=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
import Route from './Route';
//import React, { useState, useEffect } from "react";
import './pages/App.css';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
function App() {

  const [theLink, updateTheLink] = useState('');

  const [clicked, setClicked] = useState(false);

  function handleForceUpdate() {
    setClicked(true);
    console.log(clicked);
  }

  const updateLink = event => {
    updateTheLink(event.target.value);
    console.log(theLink);
    console.log(clicked);
    //fs.writeFileSync('../data.json', JSON.stringify({link: event.target.value}));
  }

  return (
    <div>
      <Route path="/">
        <div className="App">
          <header className="App-header">
            <img src={axeCoreLogo} alt="axe core logo" />
            <p>
              Enter Website URL here
            </p>
            <br></br>
            <input
              type="text"
              id="theLink"
              name="theLink"
              size="60"
              onChange={updateLink}
              value={theLink}
            />
            <br></br>
            <Link to='/result'>
              <button type='button' onClick={handleForceUpdate}>
                Check Accessibility!
              </button>
            </Link>
          </header>
        </div>
      </Route>
      <Route path="/result">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        {resultPage({ theLink, clicked })}
      </Route>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5d0da92e0c48a566388f0e2fb918442efc47c2e1
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b

}

export default App;