require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;


const routerUsers = require('./routes/routes')
app.use('/',  bodyParser.json(), routerUsers);


app.listen(port, () => {})