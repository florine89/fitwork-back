import dbClient from '../service/dbClient.js'

export default{
    async getProgram (id){
        let result;
        const sqlQuery= `SELECT article_id, status, title, description, "time", image, "type", "name" 
        FROM program  
        JOIN article ON id = article_id 
        JOIN category ON category.id=category_id
        WHERE program.user_id=$1;`;
            const value= [id];
            try {
                const response = await dbClient.query(sqlQuery,value);
                result = response.rows;
            }
            catch (error){
                throw error
            }
            return result;
        }
}; 