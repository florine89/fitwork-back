import  dbClient  from"../service/dbClient.js";

export default{
 /**
     * Permet de récupérer un utilisateur par son id
     * @param {integer} id 
     */
    async selectOne(id){
        let result;
        const sqlQuery= `SELECT * FROM "user" WHERE id=$1;`;
        const value= [id];
    try {
        const response = await dbClient.query (sqlQuery,value);
        result = response.rows[0];
    } catch (err){
        console.error(err)
    }
    return result;
    },
   
    /**
     * Permet de créer un utilisateur 
     * @param {text} firstname
     * @param {text} lastname
     * @param {text} email
     * @param {date} birth_date
     * @param {text} password
     * @param {text} gender
     * @param {integer} role_id
     */
    async insert (user){
        let newUser;
        const sqlQuery =`INSERT INTO "user" ("firstname","lastname","email",birth_date","password","gender","role_id") 
                         VALUES ($1,$2,$3,$4,$5,$6,$7)`;
        const values=[user.firstname, user.lastname,user.email,user.birth_date,user.password,user.gender,user.role_id];
        try{
            const response=await dbClient.query(sqlQuery,values);
            newUser=response.rows[0];
        }
        catch(error){
            console.error(error); 
        }
        return newUser;
    },

    async update (){
        
        const sqlQuery = `UPDATE INTO "user"
                            SET firstname=$1->>'firstname', lastname==$2->>'lastname', email=$3->>'email', birth_date=$4->>'birth_date', password=$5->>'password', gender=$6->>'gender'
                            WHERE id=($7->>'id')::int; RETURNING firstname, lastname, email, birth_date, gender;`
        const values =[body.firstname,body.lastname,body.email,body.birth_date,body.password,body.gender,userId];
    }

}