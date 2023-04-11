import TextBox from '../components/TextBox';
import Button from '../components/Button';
import axeCoreLogo from '../images/axeCoreLogo.png';

//import './App.css';

function homePage(message){
    return (
      <div className="App">
        <header className="App-header">
          <img src = {axeCoreLogo} alt = "axe core logo" />
          <label htmlFor="userInput">Enter a URL:</label>
          <input type="text" name="Name" id="userInput"></input>
          <br></br>
          <Button destination = '/result' />
        </header>
      </div>
      );
}

export default homePage;