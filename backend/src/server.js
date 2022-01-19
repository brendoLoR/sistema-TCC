const express = require('express');
const routes = require('./routes');
const dotenv = require("dotenv");

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test ' : '.env'
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(9000);