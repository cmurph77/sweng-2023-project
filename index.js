const express = require('express');
const fs = require('fs');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const options = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'A11Y API Doc',
            version: '1.0.0'
        },
        servers:['http://localhost:3000/']
    },
    apis: ['index.js']
}
const swaggerSpec = swaggerJSDoc(options);
const app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.listen(3000);
app.use(express.static('html'));
app.use(express.json({ limit: '1mb' }));

/**
 * @swagger
 * /api:
 *  tags: axe-core
 *  post:
 *    summary: Post axe-core results of webpage to database
 *    description: Post axe-core results of webpage to database by URL specified
 *    requestBody:
 *      description: Post axe-core  results of webpage to database by URL specified
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *      required: true
 *    responses:
 *      '200':
 *        description: Successful operation
 *      '400':
 *        description: Invalid URL supplied
 *      '404':
 *        description: Site not found
 */
app.post('/api', (request, response) => {
    const url = request.body.url;
    console.log(url);
    fs.writeFileSync('url.txt', url, 'utf-8');
    const execSync = require('child_process').execSync;
    const output = execSync('npx playwright test /backend', { encoding: 'utf-8' });
    console.log(output);
    response.json({
        data: output
    })
    
})

