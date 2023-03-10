import dbClient from '../service/dbClient.js';

export default{    
    async getImageFromId(id){
        const sqlQuery= "SELECT image from article WHERE id = $1;"
        const value = [id]
        try{
            const image =await dbClient.query(sqlQuery, value);
            if (!image.rows[0].image){
                image.rows= [ { image: 'default.png' } ]
            }
            return image.rows[0];
    }
    catch(error){
        console.log(error);}
    }
}