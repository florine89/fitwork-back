import dbClient from '../service/dbClient.js'

export default{
    async getFavorite (id){
        let result;
        const sqlQuery= `SELECT favorite.id, article_id, title, description, "time", image, "type", "name" 
        FROM favorite  
        JOIN article ON article.id = article_id 
        JOIN category ON category.id=category_id
        WHERE favorite.user_id=$1;`;
            const value= [id];
            try {
                const response = await dbClient.query(sqlQuery,value);
                result = response.rows;
                return result;
            }
            catch (error){
                console.log('favoriteMapper getFavorite sql request - error : ', error);
                throw error
            }
        },

        async addToFavorite (user_id,article_id) {
        
            const sqlQuery = `INSERT INTO "favorite" (user_id, article_id)
                            VALUES ($1,$2) RETURNING *;`;
            const values=[user_id,article_id];
            try{
                const response = await dbClient.query(sqlQuery,values);
                return response.rows[0];
            }
            catch(error) {
                console.log('addToFavorite SQL -error : ', error);
            }
        },

        async deleteFromFavorite (id) {
            const sqlQuery = `DELETE FROM favorite
                            WHERE article_id=$1;`;
            const values=[id];
            try{
                await dbClient.query(sqlQuery,values);
                return 'done';
            }
            catch(error) {
                console.log('deleteFromFavorite SQL -error : ', error);
            }
        }
};