import pkg from 'pg'; // equivalent strict à const Client=require('pg') 
const { Client} = pkg;
const client = new Client();
client.connect();

export default client;