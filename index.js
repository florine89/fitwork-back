import {} from 'dotenv/config';

import express from 'express';
const port = process.env.PORT || 3000;

const app = express();

import router from './app/router.js';

app.use(router);

app.listen(port, () => {
    console.log(`Server ready: http://localhost:${port}`);
});