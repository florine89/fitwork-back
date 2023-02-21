import userModel  from '../Models/userModel.js';

const userController ={
    async getUserById(req,res,next){
        const user = await userModel.selectOne(req.params.id);
        if (user){
            res.json(user)
        }
        else{
            next(new Error("problème de BDD"))
        };
    }
};

export default {userController};