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
        const sqlQuery= `SELECT title,description,time,image,type,"name" category,user_id FROM "article" JOIN category ON category.id=category_id JOIN article_has_label al ON article.id=al.article_id WHERE al.label_id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            result = response.rows;
        } 
        catch (error){
            console.log('getAllArticles sql request - error : ', error);
            throw error
        }
        return result
    }
    }
