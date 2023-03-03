import jwt from 'jsonwebtoken';
export default {
    checkToken(req, res, next) {
        try {
            console.log('header', req.headers)
            const tokenHeader = req.headers.token.split(".")[0];
            const tokenPayload= req.headers.token.split(".")[1];
            const checking = tokenHeader+'.'+tokenPayload;
            console.log('token',jwt)
            const user = jwt.verify(checking, process.env.SESSION_SECRET);
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
