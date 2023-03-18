const express = require('express');
const { validateHeaderValue } = require('http');

const {MongoClient} = require('mongodb');

const app = express();
app.listen(3000);
app.use(express.static('html'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (request, response) => {
    const uri = "mongodb+srv://sweng-everyone:xAQOgbhP2hyPPGRF@sweng-project-14.p7t0oxl.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    client.connect();
    const url = request.body;
    console.log(url);
    const execSync = require('child_process').execSync;
    const dataStream = execSync('npx playwright test /backend', { encoding: 'utf-8' });
    const browsers = dataStream.split("userAgent:");
    var jsonItems = [];

    //variables of each item
    var ids = [];
    var impacts = [];
    var tags = [];
    var descriptions = [];
    var helps = [];
    var helpUrls = [];
    console.log("before for each");
   browsers.forEach(browser => {
        if (browser.indexOf("inapplicable: [") != -1) {
            firstPos = browser.indexOf("inapplicable: [");
            jsonItems = browser.substring(firstPos++).split("{\n");
            jsonItems.forEach(element => {
                if (element.search("id") != -1) {
                    //creating ids array
                    var currentVar = element.substring(element.search("id: "),element.search("impact")); 
                    if (currentVar.search("id: ")!=-1) ids.push(currentVar); 

                    //creating impacts array
                    var currentVar = element.substring(element.search("impact: "),element.search("tags")); 
                    if (currentVar.search("impact: ")!=-1) impacts.push(currentVar); 

                    //creating descriptions array
                    var currentVar = element.substring(element.search("description: "),element.search("help")); 
                    if (currentVar.search("description: ")!=-1) descriptions.push(currentVar); 

                    //creating helps array
                    var currentVar = element.substring(element.search("help: "),element.search("helpUrl")); 
                    if (currentVar.search("help: ")!=-1) helps.push(currentVar); 

                    //creating helpUrls array
                    var currentVar = element.substring(element.search("helpUrl: "),element.search("nodes")); 
                    if (currentVar.search("helpUrl: ")!=-1) helpUrls.push(currentVar); 
                }
            });
        }
    });
    const data = {      // this is the axe core data organised in JSON format
        idList: ids,
        impactList: impacts,
        descriptionList: descriptions,
        helpList: helps,
        helpUrlList: helpUrls
    }

    create(client, data);

    response.json({
        data: dataStream  // sends back the results in json format
    })
})


function create(client, newTest) {
    client.db("backend_sweng").collection("axe_core_results").insertOne(newTest);
}

