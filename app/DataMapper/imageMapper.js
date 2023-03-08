import dbClient from '../service/dbClient.js';

export default{    
    getImageFromId(id){
    try{
        const plopid= id
        plopid="dans imagemapper"
        console.log("dans le mapper getImageFromId")
        return plopid;
    }
    catch(error){console.log(error);}
}
}