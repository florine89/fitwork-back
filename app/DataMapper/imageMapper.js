import dbClient from '../service/dbClient.js';

export default{    
    async getImageFromId(id){
        const sqlQuery= "SELECT image from article WHERE id = $1;"
        const value = [id]
        try{
            const image =await dbClient.query(sqlQuery, value);
            if (!image){
                throw "Aucune image n'a été trouvée."
            }
            return image.rows[0];
    }
    catch(error){
        console.log(error);}
    }
}