import jwt from 'jsonwebtoken';
export default {
    checkToken(req, res, next) {
        try {

            const token = req.headers.authorization.split(" ")[1];
            const user = jwt.verify(token, process.env.SESSION_SECRET);
            if (!user){
                res.json(`problème d'identité`)
            }
            console.log(`token validé !`, user);
            next();
        }
        catch (error) {
            console.log('checkToken - error : ',error);
            next(error);
        }
    }
};
