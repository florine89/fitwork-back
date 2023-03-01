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
                next (error);
        }
    }
}



