import  dbClient  from"../service/dbClient.js";


export default{
    async getAll(id){
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
    },
    
    async getOne (id){
        const sqlQuery= `SELECT * FROM "article" WHERE id=$1;`;
        const value= [id];
        console.log('getOne[value]',value);
        try {
            const response = await dbClient.query(sqlQuery,value);
            if(!response){
                throw "Cet article n'existe pas";
            }
            return response.rows[0];
        } 
        catch (error){
            console.log('ArticleMapper getOne sql request - error : ', error);
            throw error
        }
        
    },

    async addOne (body) {
        
        const sqlQuery = `INSERT INTO "article" 
                        ("title","description","time","image","type","category_id","user_id","created_at") 
                        VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING title, description, time, image, type, category_id, user_id;`;
        const values=[body.title,
            body.description,
            body.time,
            body.image,
            body.type,
            body.category_id,
            body.user_id,
            new Date()];
        try{
            const response = await dbClient.query(sqlQuery,values);
            return response.rows[0];
        }
        catch(error) {
            console.log('articleMapper addOne sql request - error : ', error);
            throw error
        }
    },

    async updateOne (id,body) {
        let result;
        const sqlQuery = `UPDATE "article" SET
                        "title" = COALESCE($1, title),
                        "description" = COALESCE($2, description),
                        "time" = COALESCE($3, time),
                        "image" = COALESCE($4, image),
                        "type" = COALESCE($5, type),
                        "category_id" = COALESCE($6, category_id),
                        "updated_at" = now()
                        WHERE id=$7::int RETURNING title,description,time,image,type,category_id;`
        const values =[body.title,body.description,body.time,body.image,body.type,body.category_id,id];
        try{
            const response = await dbClient.query(sqlQuery,values);
            result = response.rows[0]
            return result;
        }
        catch(error) {
            console.log('articleMapper updateOne sql request - error : ', error);
            throw error
        }

    },
    async deleteOne(id){
        const sqlQuery= `DELETE FROM "article" WHERE id=$1`;
        const value= [id];
        try {
            const result = await dbClient.query (sqlQuery,value);
            if(!result){
                throw 'echec de la suppression';
            }
            console.log(result);
            return 'done';
        } catch (error){
            console.log('articleMapper deleteOne sql request - error : ', error);
            throw error
        }
    }
}