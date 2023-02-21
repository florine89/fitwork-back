import  dbClient  from"../service/dbClient.js";

export default{

    async selectOne(id){
        let result;
        const sqlQuery= `SELECT * FROM "user" WHERE id=$1;`;
        const value= [id];
    try {
        const response = await dbClient.query (sqlQuery,values),
        result = response.rows[0];
    } catch (err){
        console.error(err)
    }
    return result;
    }
    /**
     * Permet de récupérer un utilisateur par son id
     * @param {*} id 
     */
}