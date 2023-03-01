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
            next(error)
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
            throw error
        }
        
    },

    async addOne (body) {
        
        const sqlQuery = `INSERT INTO "article" 
                        ("title","description","time","image","slug","category_id","user_id","created_at") 
                        VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING title, description, time, image, slug, category_id, user_id;`;
        const values=[body.title,
            body.description,
            body.time,
            body.image,
            body.slug,
            body.category_id,
            body.user_id,
            new Date()];
        try{
            const response = await dbClient.query(sqlQuery,values);
            return response.rows[0];
        }
        catch(error) {
            console.log(error);
        }
    },

    async updateOne (id,body) {
        let result;
        const sqlQuery = `UPDATE "article" SET
                        "title" = COALESCE($1, title),
                        "description" = COALESCE($2, description),
                        "time" = COALESCE($3, time),
                        "image" = COALESCE($4, image),
                        "slug" = COALESCE($5, slug),
                        "category_id" = COALESCE($6, category_id),
                        "updated_at" = now()
                        WHERE id=$7::int RETURNING title,description,time,image,slug,category_id;`
        const values =[body.title,body.description,body.time,body.image,body.slug,body.category_id,id];
        try{
            const response = await dbClient.query(sqlQuery,values);
            result = response.rows[0]
            return result;
        }
        catch(error) {
            console.log(error);
            console.log(error)
        }

    },
    async deleteOne(id){
        const sqlQuery= `DELETE FROM "article" WHERE id=$1`;
        const value= [id];
        try {
            await dbClient.query (sqlQuery,value);
            return 'done';
        } catch (err){
            console.error(err)
        }
    }
}