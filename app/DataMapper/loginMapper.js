import dbClient from '../service/dbClient.js';
import  jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default {
    /**
     * SQL REQUEST et chiffrement pour le login
     * @param {*} user - email +  password
     * @returns logged status, first name id, role, token
     */
    async checkLogin(user){
        let result;
        const sqlQuery=`SELECT * FROM "user" WHERE "email"=$1;`;
        const value=[user.email];
        try{
            const { rows: [foundUser] } = await dbClient.query(sqlQuery, value);
            if (!foundUser){
                throw 'Email ou mot de passe incorrect';
            };
            // On compare les mdp avec bcrypt
            const isValidPassword =await bcrypt.compare(user.password, foundUser.password);
            if (!isValidPassword){
                throw'Email ou mot de passe incorrect';
            };
            const token = jwt.sign({email:foundUser.email}, process.env.SESSION_SECRET);
            const firstname=foundUser.firstname;
            const id = foundUser.id;
            result ={logged:true,firstname,id,token};
            
        }
        catch(error){
            console.log('loginMapper Checklogin sql request - error : ', error);
            throw 'erreur de BDD'
        }
        return result
    }}