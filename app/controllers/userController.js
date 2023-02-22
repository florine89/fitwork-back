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
            console.log('ici');
            res.json(user);
        }
        else {
            console.log('oups cassé');
            next (new Error('problème de création sur la BDD'));
        }

    }


};

export default userController;