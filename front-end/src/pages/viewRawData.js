//import JsonDisplay from '../components/JsonDisplay';
import Button from '../components/Button';
import scanResults from '../data/output.json'
import JsonDisplay from '../components/JsonDisplay';


function viewRawData(){
    return (
      <div className="App">
        <header className="App-header">
            <h1>This is the raw data from the Accessibility Scan</h1>
            <JsonDisplay data={scanResults} />
        </header>
      </div>
      );
}

export default viewRawData;