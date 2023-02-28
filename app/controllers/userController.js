import userModel  from '../DataMapper/userMapper.js';

const userController ={
    /**
     * CHerche un utilisateur par son ID
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getUserById(req,res,next){
        
        try{
        const user = await userModel.selectOne(req.params.id);
        if (!user){
            throw "problème de lecture BDD/User"
            }
            res.json(user);
        }
        catch (error){
            next(error);
        };
    },
    /**
     * Crée un utilisateur depuis un JSON
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async createUser(req,res,next){
        try{
        const user=await userModel.insert(req.body);
        if (!user){
            throw "problème d'écriture BDD/User"
            }
            res.json(user);
        }
        catch (error){
            next(error);
        };
    },

    async updateUser(req,res,next){
        try{
            const user = await userModel.selectOne(req.params.id);
            if(!user){
                throw "utilisateur non trouvé"
            }
            try {
                console.log("let's try updating the user");
                const updateUser = await userModel.update(user.id,req.body);
                if (!updateUser){

                    throw "erreur lors de la mise à jour"
                }
            } 
            catch (error) {
                next(error);
            }
            }
        catch(error){
            next(error);
        }
    },

    async deleteUser(req,res,next){
        try{
            const user = await userModel.deleteOne(req.params.id);
            if (!user){
                throw "problème de suppression BDD/User"
            }
            res.json(user);
        }
        catch (error){
            next(error);
        };
}
}

export default userController;