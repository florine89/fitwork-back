require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

const router = require('./app/router');

app.use(router);

app.listen(port, () => {
    console.log(`Server ready: http://localhost:${port}`);
});