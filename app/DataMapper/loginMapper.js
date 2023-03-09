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
        const sqlQuery=`SELECT "user".id, firstname, lastname, email , "password", birth_date,"label" AS "role" 
        FROM "user" 
        JOIN role ON role.id=role_id 
        WHERE email=$1;`;
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
            const token = jwt.sign({email:foundUser.email,user_id:foundUser.id}, process.env.SESSION_SECRET,{expiresIn: '1d'});
            const firstname=foundUser.firstname;
            const id = foundUser.id;
            const role = foundUser.role;
            result ={logged:true,id,firstname,role,token};
            return result
        }
        catch(error){
            console.log('loginMapper Checklogin sql request - error : ', error);
            throw error
        }
        
    }}