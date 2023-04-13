import TextBox from '../components/TextBox';
import Button from '../components/Button';

import axeCoreLogo from '../images/axeCoreLogo.png';
//import './App.css';

function homePage(){
    return (
      <div className="App">
        <header className="App-header">
          <img src = {axeCoreLogo} alt = "axe core logo" />
          <p>
            Enter Website URL here
          </p>
          <br></br>
          <TextBox/>
          <br></br>
          <Button destination = '/result' label="Check Accessibility" />
        </header>
      </div>
      );
}

export default homePage;