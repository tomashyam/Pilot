import * as express from 'express';
const app = express()
const bodyParser = require('body-parser');  
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
const path = require('path');
app.use(express.static(__dirname))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/login', (req, res) => {
    res.json({ data: true });
})

app.listen(3001);