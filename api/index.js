const express = require('express');
const cors = require('cors');
const { validateHeaderValue } = require('http');

const fs = require('fs');

const { MongoClient } = require('mongodb');

var ObjectID = require('mongodb').ObjectId;

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const options = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'A11Y API Doc',
            version: '1.0.0'
        },
        servers: ['http://localhost:3000/']
    },
    apis: ['index.js']
}
const swaggerSpec = swaggerJSDoc(options);
const app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.listen(3000);
app.use(cors());
app.use(express.static('html'));
app.use(express.json({ limit: '1mb' }));

/**
 * @swagger
 *   /api:
 *     post:
 *       summary: Post axe-core results of webpage to database
 *       description: Post axe-core results of webpage to database by URL specified
 *       requestBody:
 *         description: Post axe-core  results of webpage to database by URL specified
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   example: https://www.youtube.com
 *               required:
 *                 - url
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *         '400':
 *           description: Invalid URL supplied
 *         '404':
 *           description: Site not found
 */
app.post('/api', (request, response) => {
    const uri = "mongodb+srv://sweng-everyone:xAQOgbhP2hyPPGRF@sweng-project-14.p7t0oxl.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    client.connect();
    const url = request.body.url;
    console.log(url);
    fs.writeFileSync('url.txt', url, 'utf-8');
    console.log("write");
    const execSync = require('child_process').execSync;

    const dataStream = execSync('npx playwright test /backend', { encoding: 'utf-8' });

    console.log("2");
    const browsers = dataStream.split("userAgent:");
    console.log("3");
    var jsonItems = [];
    console.log("4");

    //variables of each item
    var ids = [];
    var impacts = [];
    var tags = [];
    var descriptions = [];
    var helps = [];
    var helpUrls = [];

    var keepDataTogether = [];

    console.log("before for each");
    browsers.forEach(browser => {
        if (browser.indexOf("inapplicable: [") != -1) {
            firstPos = browser.indexOf("inapplicable: [");
            jsonItems = browser.substring(firstPos++).split("{\n");
            jsonItems.forEach(element => {
                if (element.search("id") != -1) {
                    //creating ids array
                    var currentVar = element.substring(element.search("id: "), element.search("impact"));
                    if (currentVar.search("id: ") != -1) ids.push(currentVar);

                    //creating impacts array
                    var currentVar = element.substring(element.search("impact: "), element.search("tags"));
                    if (currentVar.search("impact: ") != -1) impacts.push(currentVar);

                    //creating descriptions array
                    var currentVar = element.substring(element.search("description: "), element.search("help"));
                    if (currentVar.search("description: ") != -1) descriptions.push(currentVar);

                    //creating helps array
                    var currentVar = element.substring(element.search("help: "), element.search("helpUrl"));
                    if (currentVar.search("help: ") != -1) helps.push(currentVar);

                    //creating helpUrls array
                    var currentVar = element.substring(element.search("helpUrl: "), element.search("nodes"));
                    if (currentVar.search("helpUrl: ") != -1) helpUrls.push(currentVar);
                }
                let id = ids.pop();
                let temp;
                if (id != null) {
                    temp = id.split("'");
                    id = temp[1];
                }
                let impact = impacts.pop();
                if (impact != null) {
                    temp = impact.split("'");
                    impact = temp[1];
                }
                let description = descriptions.pop();
                if (description != null) {
                    temp = description.split("'");
                    description = temp[1];
                }
                let help = helps.pop();
                if (help != null) {
                    temp = help.split("'");
                    help = temp[1];
                }
                let url = helpUrls.pop();
                if (url != null) {
                    temp = url.split("'");
                    url = temp[1];
                }
                const finalData = {
                    id: id,
                    impactList: impact,
                    description: description,
                    help: help,
                    helpURL: url
                }
                keepDataTogether.push(finalData);
            });
        }
    });

    const data = {      // this is the axe core data organised in JSON format
        keepDataTogether
    }
    console.log(data);
    const jsonString = JSON.stringify(data);
    fs.writeFile('./output.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    let uniqueID = create(client, data);
    console.log(uniqueID);

    response.json({
        problems: keepDataTogether // sends back the results in json format
    })
})

/**
 * @swagger
 * /api/{id}:
 *  tags: axe-core
 *  get:
 *    summary: Get axe-core results json document by id string
 *    description: Returns a single axe-core result json document
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of axe-core results json document to return
 *        required: true
 *        schema:
 *          type: string
 *          example: 641854190da7af879b1f474f
 *    responses:
 *      '200':
 *        description: Successful operation
 *      '400':
 *        description: Invalid document ID
 *      '404':
 *        description: Document does not exist
 *      '500':
 *        description: Could not fetch the document
 */
app.get('/api/:id', (request, response) => {
    const uri = "mongodb+srv://sweng-everyone:xAQOgbhP2hyPPGRF@sweng-project-14.p7t0oxl.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    client.connect();
    if (ObjectID.isValid(request.params.id)) {
        client.db("backend_sweng").collection("axe_core_results")
            .findOne({ _id: new ObjectID(request.params.id) })
            .then(doc => {
                if (doc != null)
                    response.status(200).json(doc)
                else
                    response.status(404).json({ error: 'Document does not exist' });
            })
            .catch(err => {
                response.status(500).json({ error: 'Could not fetch the document' });
            })
    } else {
        response.status(400).json({ error: 'Invalid document ID. Must be a 24 character hex string, 12 byte binary Buffer, or a number.' })
    }
})

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

function create(client, newTest) {
    let id = new ObjectID(32);
    client.db("backend_sweng").collection("axe_core_results").insertOne({ _id: id, newTest });
    return id;
}

