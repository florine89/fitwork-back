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
        const user_id = ;
        const sqlQuery = `INSERT INTO "article" ("title","decription","time","image","slug","category_id","user_id") VALUES ($1,$2,$3,$4,$5,$6,user_id);`;
        const values=[req.body.title,
            req.body.decription,
            req.body.time,
            req.body.image,
            req.body.slug,
            req.body.category_id];    // VOIR comment récup le user_id de l'utilisateur connecté
        try{
            await dbClient.query(sqlQuery,values);
            return 'Article créé';
        }
        catch(error) {
            next (new Error('problème de création sur la BDD'));
        }
    }
};

export default articleController;