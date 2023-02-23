import userModel  from '../Models/userModel.js';

const userController ={
    /**
     * CHerche un utilisateur par son ID
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getUserById(req,res,next){
        const user = await userModel.selectOne(req.params.id);
        if (user){
            res.json(user)
        }
        else{
            next(new Error("problème de lecture BDD"))
        };
    },
    /**
     * Crée un utilisateur depuis un JSON
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async createUser(req,res,next){
        const user=await userModel.insert(req.body);
        if(user){
            res.json(user);
        }
        else {
            next (new Error('problème de création sur la BDD'));
        }

    }
};

export default userController;