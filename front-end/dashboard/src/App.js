import TextBox from './TextBox';
import Button from './Button';
import './App.css';

function App(){
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Enter Website URL here
            </p>
            <br></br>
            <TextBox/>
            <br></br>
            <Button/>
          </header>
        </div>
      );
}

export default App;