import loginMapper from "../DataMapper/loginMapper.js";
const loginController={
    /**
     * Vérification de l'authentification
     * @param {*} req 
     * @param {*} res 
     */
    async checkLogin(req,res){
        // on génère une instance de User à partir de req.body qui contient username et password
        const loggedUser = await loginMapper.checkLogin(req.body)
        if(!loggedUser){
            next( new Error('utilisateur ou mot de passe incorrect'))
        }
        res.json(loggedUser);
}
};

export default loginController;