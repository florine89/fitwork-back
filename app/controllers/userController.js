import userModel  from '../Models/userModel.js';

const userController ={
    async getUserById(req,res,next){
        const user = await userModel.selectOne(req.params.id);
        if (user){
            res.json(user)
        }
        else{
            next(new Error("problème de lecture BDD"))
        };
    },
    async createUser(req,res,next){
        const user=await userModel.insert(req.body);
        if(user){
            res.json(user);
        }
        else {
            next (new Error('problème de création sur la BDD'));
        }

    },

    async updateUser(req,res,next){
        const user = await userModel.selectOne(req.params.id);
        try {
            await userModel.update(user.id,req.body);
        } catch (err) {
            next(err);
        }
    },

    async deleteUser(req,res,next){
        console.log('dans le controleur/deleteUSer');
        const user = await userModel.deleteOne(req.params.id);
        if(!user){
            res.json('done');
        }
        else {
            next (new Error('problème de suppression de l\'utilisateur sur la BDD'));
        }

    }
};

export default userController;