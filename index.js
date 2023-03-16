const express = require('express');
const app = express();
app.listen(3000);  // sets up an express server listening on port 3000
app.use(express.static('html'));   //  It serves static files from the 'html' directory using the express.static middleware. 
app.use(express.json({ limit: '1mb' }));  //  It also enables JSON parsing for incoming requests and sets a limit of 1mb on the size of the JSON payload using the express.json middleware.
app.post('/api', (request, response) => {
    const url = request.body;   // When the server receives a POST request at the '/api' endpoint, it extracts the URL from the request body and logs it to the console.
    console.log(url);   
    const execSync = require('child_process').execSync;  // It then runs a command using the execSync method from the child_process module.
    const output = execSync('npx playwright test /backend', { encoding: 'utf-8' });  // The command runs the Playwright test suite located in the '/backend' directory using the npx playwright test command. 
    console.log(output);  // logs the results to console
    response.json({
        data: output   // sends back the results in json format
    })
    
})

