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
    },

    async deleteUser(req,res,next){
        const user = await userModel.selectOne(req.params.id);
        if (user){
            await user.destroy();
        }
        res.status(204).end();
    }
};

export default userController;