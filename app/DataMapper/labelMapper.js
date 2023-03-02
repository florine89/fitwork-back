import  dbClient  from"../service/dbClient.js";


export default{
    async getAll(){
        let result
        const sqlQuery= `SELECT * FROM "label"`;
        try {
            const response = await dbClient.query(sqlQuery);
            result = response.rows;
        } 
        catch (error){
            console.log('getAllLabel sql request - error : ', error);
            throw error
        }
        return result
    },

    async getAllArticles(id){
        let result
        const sqlQuery= `SELECT * FROM "article" WHERE category_id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            result = response.rows;
        } 
        catch (error){
            console.log('articleMapper getAll sql request - error : ', error);
            throw error
        }
        return result
    }
    }
