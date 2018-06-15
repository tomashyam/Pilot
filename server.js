"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
var path = require('path');
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/login', function (req, res) {
    res.json({ data: true });
});
app.listen(3001);
//# sourceMappingURL=server.js.map