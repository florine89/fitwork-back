import categoryMapper from '../DataMapper/categoryMapper.js';
export default{
    async getCategories (_,res,next){
        const categories= await categoryMapper.getAllCategories();
        if (categories){
            res.json(categories);
        } else {
            next(new Error ("Problème de lecture BDD/categories"))
        }
    }
}




