import  dbClient  from"../service/dbClient.js";

const articleController = {
    async getAllArticles(req,res,next) {
        const id = req.params.id
        const sqlQuery= `SELECT * FROM "article" WHERE category_id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            res.json(response.rows);
        } 
        catch (error){
            next(new Error("problème de lecture BDD"))
        }
    },

    async getOneArticle(req,res,next){
        const id = req.params.id
        const sqlQuery= `SELECT * FROM "article" WHERE id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            res.json(response.rows[0]);
        } 
        catch (error){
            next(new Error("problème de lecture BDD"))
        }
    },

    async addOneArticle(req,res,next){
        const sqlQuery = `INSERT INTO "article" ("title","decription","time","image","slug","category_id","user_id") VALUES ($1,$2,$3,$4,$5,$6,$7);`;
        const values=[req.body.title,
            req.body.decription,
            req.body.time,
            req.body.image,
            req.body.slug,
            req.body.category_id,
            req.body.user_id];    // VOIR comment récup le user_id de l'utilisateur connecté
        try{
            await dbClient.query(sqlQuery,values);
            res.json("article créé")
            return;
        }
        catch(error) {
            next (new Error(error));
        }
    },

    // async updateOneArticle(req,res,next){
    //     const id = req.params.id
    //     const sqlQuery = `UPDATE "article" SET
    //                     "title" = COALESCE($1, title),
    //                     "decription" = COALESCE($2, decription),
    //                     "time" = COALESCE($3, time),
    //                     "image" = COALESCE($4, image),
    //                     "slug" = COALESCE($5, slug),
    //                     "category_id" = COALESCE($6, category_id),
    //                     "updated_at" = now()
    //                     WHERE id=$7::int RETURNING (title,decription,time,image,slug,category_id);`
    //     const values =[body.title,body.decription,body.time,body.image,body.slug,body.category_id,id];
    // }
};

export default articleController;