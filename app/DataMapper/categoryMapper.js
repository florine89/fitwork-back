import dbClient from '../service/dbClient.js'
export default{
    async getAllCategories(){
        let result;
        const sqlQuery = `SELECT * from category;`
        try {
            const response = await dbClient.query(sqlQuery);
            return response.rows;
        }
        catch(error){
            return (new Error('problème de lecture de la BDD', error));
        }
    }
};
