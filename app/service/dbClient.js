import * as pg from 'pg'; // equivalent strict à const Client=require('pg') 
const {Client} = pg;
const client = new Client();
client.connect();

export default client;