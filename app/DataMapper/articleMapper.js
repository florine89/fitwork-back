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
            next(new Error(error))
        }
        return result
    },
    
    async getOne (id){    
        let result;
        const sqlQuery= `SELECT * FROM "article" WHERE id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            result = response.rows[0];
        } 
        catch (error){
            next(new Error(error))
        }
        return result
    },

    async addOne (body) {
        const sqlQuery = `INSERT INTO "article" ("title","decription","time","image","slug","category_id","user_id") VALUES ($1,$2,$3,$4,$5,$6,$7);`;
        const values=[body.title,
            body.decription,
            body.time,
            body.image,
            body.slug,
            body.category_id,
            body.user_id];
        try{
            const response = await dbClient.query(sqlQuery,values);
            result = response.rows[0]
            return result;
        }
        catch(error) {
            next (new Error(error));
        }
    },

    async updateOne (id,body) {
        let result;
        const sqlQuery = `UPDATE "article" SET
                        "title" = COALESCE($1, title),
                        "decription" = COALESCE($2, decription),
                        "time" = COALESCE($3, time),
                        "image" = COALESCE($4, image),
                        "slug" = COALESCE($5, slug),
                        "category_id" = COALESCE($6, category_id),
                        "updated_at" = now()
                        WHERE id=$7::int RETURNING (title,decription,time,image,slug,category_id);`
        const values =[body.title,body.decription,body.time,body.image,body.slug,body.category_id,id];
        try{
            const response = await dbClient.query(sqlQuery,values);
            result = response.rows[0]
            return result;
        }
        catch(error) {
            console.log(error);
        }
    },

    async deleteOne(id){

    }
}