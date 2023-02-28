import  dbClient  from"../service/dbClient.js";
import bcrypt from "bcryptjs"

export default{
 /**
     * Cherche un utilisateur par son ID (SQL)
     * @param {integer} id 
     */
    async selectOne(id){
        let result;
        const sqlQuery= `SELECT * FROM "user" WHERE id=$1;`;
        const value= [id];
    try {
        const response = await dbClient.query (sqlQuery,value);
        result = response.rows[0];
    } 
    catch (err){
        console.error(err)
    }
    return result;
    },
   
     /**
     * Cherche un utilisateur par son ID (SQL)
     * @param {text} email 
     */
     async findOneByEmail(email){
        let result;
        const sqlQuery= `SELECT * FROM "user" WHERE email=$1;`;
        const value= [email];
    try {
        const response = await dbClient.query (sqlQuery,value);
        console.log(response);
        result = response.rows[0];
    } 
    catch (err){
        console.error(err)
    }
    return result;
    },
    /**
     * Gère la création d'un utilisateur (SQL)
     * @param {text} firstname
     * @param {text} lastname
     * @param {text} email
     * @param {date} birth_date
     * @param {text} password
     * @param {integer} role_id
     */
    async insert (user){ 
        const foundUser = await this.findOneByEmail(user.email)
        if (foundUser){
            const foundAlert='Adresse email déjà utilisée.'
            console.log(foundAlert);}
        const saltRounds=12;
        const hash=await bcrypt.hash(user.password,saltRounds);
        //user.password=NULL;
        const sqlQuery =`INSERT INTO "user" ("firstname","lastname","email","birth_date","password","role_id") VALUES ($1,$2,$3,$4,$5,$6);`;    
        const values=[user.firstname, user.lastname,user.email,user.birth_date,hash,user.role_id];
        try{
            await dbClient.query(sqlQuery,values);
            return 'ok';
        }
        catch(error){
            console.error(error); 
        }
        },

    async update (userId, body){
        
        const sqlQuery = `UPDATE "user" SET
                        "firstname" = COALESCE($1, firstname),
                        "lastname" = COALESCE($2, lastname),
                        "email" = COALESCE($3, email),
                        "birth_date" = COALESCE($4, birth_date)
                        WHERE id=$5::int RETURNING (firstname,lastname,email,birth_date);`
        const values =[body.firstname,body.lastname,body.email,body.birth_date,userId];
        try {
            await dbClient.query (sqlQuery,values);
            return;
        } catch (err){
            console.error(err)

            // ->>'firstname', ->>'lastname', ->>'email', ->>'birth_date', password=$5->>'password'
        }
    },

    async deleteOne(id){
        const sqlQuery= `DELETE FROM "user" WHERE id=$1`;
        const value= [id];
        try {
            await dbClient.query (sqlQuery,value);
            return 'done';
        } catch (err){
            console.error(err)
        }
        // return;
        }

}