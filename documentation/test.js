import {} from 'dotenv/config';
import file from './file.js'
import express from 'express';
import router from 'express';

const port = 3000;

const app = express();


app.use(router);
app.get('/test',file.test)



app.listen(port, () => {
    console.log(`Server ready: http://localhost:${port}`);
});


