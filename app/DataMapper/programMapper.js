import dbClient from '../service/dbClient.js'

export default{
    async getProgram (id){
        let result;
        const sqlQuery= `SELECT program.id, article_id, status, title, description, "time", image, "type", "name" 
        FROM program  
        JOIN article ON article.id = article_id 
        JOIN category ON category.id=category_id
        WHERE program.user_id=$1;`;
            const value= [id];
            try {
                const response = await dbClient.query(sqlQuery,value);
                result = response.rows;
            }
            catch (error){
            console.log('programMapper getProgram sql request - error : ', error);
                throw error
            }
            return result;
        },

        async addToProgram (user_id,article_id) {
        
            const sqlQuery = `INSERT INTO "program" (user_id, article_id)
                            VALUES ($1,$2) RETURNING *;`;
            const values=[user_id,article_id];
            try{
                const response = await dbClient.query(sqlQuery,values);
                return response.rows[0];
            }
            catch(error) {
                console.log('addToProgram SQL -error : ', error);
            }
        },

        async deleteFromProgram (id) {
            const sqlQuery = `DELETE FROM "program"
                            WHERE id=$1;`;
            const values=[id];
            try{
                await dbClient.query(sqlQuery,values);
                return 'done';

            }
            catch(error) {
                console.log('deleteFromProgram SQL -error : ', error);
            }
        }
};