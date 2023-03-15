// password xAQOgbhP2hyPPGRF
const module = require('module');
import { axeCoreOutput } from './backend/backend.spec.js';

const fs = require('fs');
const { json } = require('express');
const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();
app.listen(3000);  // sets up an express server listening on port 3000
app.use(express.static('html'));   //  It serves static files from the 'html' directory using the express.static middleware. 
app.use(express.json({ limit: '1mb' }));  //  It also enables JSON parsing for incoming requests and sets a limit of 1mb on the size of the JSON payload using the express.json middleware.
app.post('/api', (request, response) => {
    const uri = "mongodb+srv://sweng-everyone:xAQOgbhP2hyPPGRF@sweng-project-14.p7t0oxl.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try {
        client.connect();
        //listDatabases(client);
    } catch (e) {
        console.error(e);
    }
    const url = request.body;   // When the server receives a POST request at the '/api' endpoint, it extracts the URL from the request body and logs it to the console.
    console.log(url);   
    const execSync = require('child_process').execSync;  // It then runs a command using the execSync method from the child_process module.
    const output = execSync('npx playwright test /backend', { encoding: 'utf-8' });  // The command runs the Playwright test suite located in the '/backend' directory using the npx playwright test command. 
    fs.writeFile('Output.txt', output, (err) => {
        if (err) throw err;
    })
    //create(client, output);
    console.log(output);  // logs the results to console
    
    response.json({
        data: output   // sends back the results in json format
    })
    create(client, axeCoreOutput);
    //client.close(true);
})

async function listDatabases(client) {
    const databases = await client.db().admin().listDatabases();
    console.log("databases:");
    databases.databases.forEach(db => {
        //console.log(`-${db.name}`);
    })
}

function create(client, newTest) {
    client.db("backend_db").collection("website_json").insertOne(newTest);
}
