
import  dbClient  from"../service/dbClient.js";
import articleMapper from "../DataMapper/articleMapper.js";

export default{
    async getAllArticles(req,res,next) {
        try{
        const id = req.params.id
        const sqlQuery= `SELECT * FROM "article" WHERE category_id=$1;`;
        const value= [id];
            try {
                const response = await dbClient.query(sqlQuery,value);
                if(!response){
                    throw ("Il n'y a pas d'article pour cette catégorie")
                }
                res.json(response.rows);
            } 
            catch (error){
                next(new Error("problème de lecture BDD"))
            }
    }
        catch (error) {
            next (error)

        }
        res.json(articles);
    },

    async getOneArticle(req,res,next){
        const id = req.params.id
        const sqlQuery= `SELECT * FROM "article" WHERE id=$1;`;
        const value= [id];
        try {
            const response = await dbClient.query(sqlQuery,value);
            if(!response){
                throw ("Il n'y a pas d'article.")
            }
            res.json(response.rows[0]);
        } 
        catch (error){
            next(error)
        }
        res.json(article)
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
            const response = await dbClient.query(sqlQuery,values);
            if(!response){
                throw ("L'article n'a pas pu être ajouté.")
            }
            res.json("article créé")
            return;
        }
        catch(error) {
            next (new Error(error));
        }
        res.json(newArticle)
    },

    async updateOneArticle(req,res,next){
        const foundArticle = await articleMapper.getOne(req.params.id);
        if (foundArticle.user_id === req.body.user_id){
            const updatedArticle = await articleMapper.updateOne(req.params.id,req.body);
            if (!updatedArticle){
                next(new Error(`problème lors de la modification`))
            }
            res.json(updatedArticle);
        } else {
            next(new Error(`Vous n'êtes pas l'auteur, vous ne pouvez pas modifier cet article`))
        }
    },

    async deleteOneArticle(req,res,next){
        const foundArticle = await articleMapper.getOne(req.params.id);
        if (foundArticle.user_id === req.body.user_id){
            const deletedArticle = await articleMapper.deleteOne(req.params.id);
            if (!deletedArticle){
                next(new Error(`problème lors de la suppression de l'article`))
            }
            res.json(deletedArticle);
        } else {
            next(new Error(`Vous n'êtes pas l'auteur, vous ne pouvez pas supprimer cet article`))
        }
    }
};

