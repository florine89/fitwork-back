// getall(id){
//     if (!id){
//         const sql = select * from category RETURNING name;
//     }
//     else {
//         const sql = select * from article where category_id= $1 RETURNING *;
//     }
//     try        
//      const response = await dbClient.query (sqlQuery,value);

// }