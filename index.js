const express = require('express');
const app = express();
app.listen(3000);
app.use(express.static('html'));
app.use(express.json({ limit: '1mb' }));
app.post('/api', (request, response) => {
    const url = request.body;
    console.log(url);   
    
    response.json({
        data: 'axe-core results'
    })
    
})

