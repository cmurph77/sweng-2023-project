const express = require('express');
const app = express();
app.listen(3000);
app.use(express.static('html'));
app.use(express.json({ limit: '1mb' }));
app.post('/api', (request, response) => {
    const url = request.body;
    console.log(url);   
    const execSync = require('child_process').execSync;
    const output = execSync('npx playwright test /backend', { encoding: 'utf-8' });
    console.log(output);
    response.json({
        data: output
    })
    
})

