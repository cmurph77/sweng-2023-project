const express = require('express');
require('dotenv').config();
const Datastore = require('nedb');
const fs = require("fs");
const os = require("os");
const exec = require('child_process').exec;

const app = express();
app.listen(3000);

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

app.get('/api', (request, response) => {
  const data = request.body;
  data => {
    const ENV_VARS = fs.readFileSync("./.env", "utf8").split(os.EOL);
    const target = ENV_VARS.indexOf(ENV_VARS.find((line) => {
        return line.match(new RegExp('URL'));
    }));
    ENV_VARS.splice(target, 1, `${'URL'}=${value}`);
    fs.writeFileSync("./.env", ENV_VARS.join(os.EOL));
  };
  exec('npx playwright test',
      function (error, stdout, stderr) {
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
          if (error !== null) {
               console.log('exec error: ' + error);
          }
      });
  response.json();
})
