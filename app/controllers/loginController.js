// import login from '../Models/loginModel.js';
import jwt from 'jsonwebtoken';
import dbClient from '../service/dbClient.js';
import bcrypt from 'bcryptjs';

const loginController={
    /**
     * Vérification de l'authentification
     * @param {*} req 
     * @param {*} res 
     */
    async checkLogin(req,res){
        // on génère une instance de User à partir de req.body qui contient username et password
        const {email, password} = req.body;
        /*
        const email= req.body.email;
        const password=req.body.passowrd;*/
        const sqlQuery=`SELECT * FROM "user" WHERE "email"=$1;`;
        const value=[email];
        // const foundUser=await dbClient.query(sqlQuery,value);
        // déconstruction du foundUser
        const { rows: [foundUser] } = await dbClient.query(sqlQuery, value);
        console.log(foundUser.password);
        if (!foundUser){
            res.status(500).send('Mauvais email ou mot de passe')
        };

        // On compare les mdp avec bcrypt
        const isValidPassword =await bcrypt.compare(password, foundUser.password);
        if (!isValidPassword){
            res.status(500).send('Mauvais email ou mot de passe')
        };
        const token = jwt.sign({email:foundUser.email}, process.env.SESSION_SECRET);
        res.json({token});
}
};

export default loginController;