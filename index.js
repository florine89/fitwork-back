import {} from 'dotenv/config';
import cors from 'cors';
import express from 'express';
const port = process.env.PORT || 3000;

const app = express();

import router from './app/router.js';
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/images'));
app.use('/api',router);
app.use((err, res) => {
    console.error(err.stack)
    res.status(500).json(err.stack)
});

app.listen(port, () => {
    console.log(`Server ready: http://localhost:${port}`);
});