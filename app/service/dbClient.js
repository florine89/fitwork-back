// c'est avec ça qu'on peut se co à la bdd

import pkg from 'pg'; // equivalent strict à const Client=require('pg') 
const { Client} = pkg;
const client = new Client();
client.connect();

export default client;