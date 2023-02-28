import articleMapper from "../DataMapper/articleMapper.js";

export default {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getAllArticles(req,res,next) {
        const articles = await articleMapper.getAll(req.params.id)
        if (articles){
            next (new Error(error))
        }
        res.json(articles);
    },

    async getOneArticle(req,res,next){
        const article = await articleMapper.getOne(req.params.id);
        if (article){
            next (new Error(error))
        }
        res.json(article)
    },

    async addOneArticle(req,res,next){
        const newArticle = await articleMapper.addOne(req.body)
        if (!newArticle){
            next (new Error('problème de création sur la BDD'));
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
    }
};