import dbClient from '../service/dbClient.js'
export default{
    async getAllCategories(){
        const sqlQuery = `SELECT * from category;`
        try {
            const response = await dbClient.query(sqlQuery);
            return response.rows;
        }
        catch(error){
            console.log('categoryMapper getAll sql request - error : ', error);
            throw error;
        }
    }
};
