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
            if(!postArticleInProgram){
                throw "Impossible de rajouter l'article au programme."
            }
                res.json(postArticleInProgram);
            }
            catch (error) {
                console.log('postUSerProgram-error : ', error);
                next (error);
        }
    },
    
    async deleteArticleProgram(req,res,next){
        try{
            const deleted = await programMapper.deleteFromProgram(req.params.program_id);
            console.log('deleted : ',deleted);
            if(deleted !=="deleted"){
                throw "Impossible de supprimer l'article au programme."
            }
                res.json(deleted);
            }
        catch(error) {
            console.log('deleteUSerProgram-error : ', error);
            next (error);
        }
    },
    async validateProgram(req, res, next){
        try {
            const validProgram = await programMapper.complete(req.params.id);
            if(!validProgram){
                throw "Impossible de valider l'activité.";
            }
            res.json(validProgram)
        }
        catch(error){
            console.log('validateProgram-error : ', error);
            next (error);
        }
    }
}


