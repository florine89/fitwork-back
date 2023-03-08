import imageMapper from '../DataMapper/imageMapper.js'

export default {
    async getImage(req,res,next){
        console.log('avant le try');
        res.json('avant le try');

            // try {
            //     console.log('dans le try getImage');
            //     const image = await imageMapper.getImageFromId(req.params.id);
            //     if (!image){
            //         throw 'article non trouvé';
            //     }
            //     console.log(image);
            //     res.json(image);
            //     // const directoryPath = './images';
            //     // res.download(directoryPath+fileName, fileName,(error)=> console.log("erreur d'envoi d'image"))
            //     // if (error){
            //     // console.log('image upload - error : ',error);
            //     // next(error)
            //     // }
            // }
            // catch(error){
            //     console.log(error)
            // }
        }
}