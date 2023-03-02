import programMapper from "../DataMapper/programMapper.js";

export default{

    async getUserProgram(req,res,next){
        try{
            const foundProgram = await programMapper.getProgram(req.params.id);
            if(!foundProgram){
                throw "Le programme est vide."
            }
                res.json(foundProgram);
            }
            catch (error) {
                console.log('getUSerProgram-error : ', error);
                next (error);
        }
    },

    async postArticleProgram(req,res,next){
        const userId = req.body.user_id
        const articleId = req.params.id
        try{
            const postArticleInProgram = await programMapper.addToProgram(userId,articleId);
            console.log(postArticleInProgram)
            if(!postArticleInProgram){
                throw "Impossible de rajouter l'article au programme."
            }
                res.json(postArticleInProgram);
            }
            catch (error) {
                next (error);
        }
    }
}



