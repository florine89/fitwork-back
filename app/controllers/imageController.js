import imageMapper from '../DataMapper/imageMapper.js'

export default{
    async getImage(req,res,next){
            try {
                ;
                const foundImage = await imageMapper.getImageFromId(req.params.id);
                if (!foundImage){
                    throw 'article non trouvé';
                }
                const directoryPath = './images/';
                res.download(directoryPath + foundImage.image, foundImage.image)
            }
            catch(error){
                console.log('image upload - error : ',error);
                next(error)
            }
        }
}