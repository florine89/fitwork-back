import userMapper from '../DataMapper/userMapper.js';

const userController ={
    /**
     * CHerche un utilisateur par son ID
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getUserById(req,res,next){
        
        try{
        const user = await userMapper.selectOne(req.params.id);
        if (!user){
            throw "problème de lecture BDD/User"
            }
            res.json(user);
        }
        catch (error){
            console.log('userMapper getUserById - error : ',error);
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
        const user=await userMapper.insert(req.body);
        if (!user){
            throw "problème d'écriture BDD/User"
            }
            res.json(user);
        }
        catch (error){
            console.log('userMapper insert - error : ',error);
            next(error);
        };
    },
    /**
     * mettre à jour un utilisateur depuis un json
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async updateUser(req,res,next){
        try{
            const user = await userMapper.selectOne(req.params.id);
            if(!user){
                throw "utilisateur non trouvé"
            }
            try {
                const updateUser = await userMapper.update(user.id,req.body);
                if (!updateUser){
                    throw "erreur lors de la mise à jour"
                }
                res.json(updateUser);
            } 
            catch (error) {
                console.log('userMapper updateUser-error : ',error);
                next(error);
            }
            }
        catch(error){
            console.log('userMapper updateUser selectOne user not found error : ', error);
            next(error);
        }
    },
    /**
     * supprime un utilisateur 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async deleteUser(req,res,next){
        try{
            const user = await userMapper.deleteOne(req.params.id);
            if (!user){
                throw "problème de suppression BDD/User"
            }
            res.json(user);
        }
        catch (error){
            console.log('userMapper deleteUser-error : ', error);
            next(error);
        };
    },

    async getAllArticles(req,res,next){
        try{
            const articles = await userMapper.getAllArticles(req.params.id);
            if(!articles){
                throw "Pas d'article à afficher"
            }
            res.json(articles);
        }
        catch(error){
            console.log('userMapper getAllArticles - error : ', error);
            next(error);
        }
    }

}

export default userController;