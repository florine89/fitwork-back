export default{
    test(req,res){
        if (req.body.random){
            const random = "ORDER BY RANDOM()";
        }
        if (req.body.limit){
            const limit= `LIMIT ${limit.value}`;
        }
        console.log(random, limit);
    }
}
