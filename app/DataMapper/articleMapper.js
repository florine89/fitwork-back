import  dbClient  from"../service/dbClient.js";


export default{
    async getAll(id){
        const sqlQuery= `SELECT * FROM "article" WHERE category_id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            res.json(response.rows);
        } 
        catch (error){
            next(new Error(error))
        }
    },
    
}