import Router from 'express';
import loginController from './controllers/loginController.js';
import userController from './controllers/userController.js';
import articleController from './controllers/articleController.js';
import categoryController from './controllers/categoryController.js';
import programController from './controllers/programController.js';

const router = Router();
/**
 * GET /api/user/{id}
 * @summary Retourne un utilisateur
 * @tags user
 * @param {number} id.path - id de l'utilisateur
 * @return {user} 200 - un utilisateur
 * @return {object} 500 - Unexpected error
 */
router.get('/user/:id', userController.getUserById);

/**
 * PATCH /api/user/{id}
 * @summary modifie un utilisateur
 * @tags user
 * @param {number} id.path - id de l'utilisateur
 * @return {user} 200 - un utilisateur
 * @return {object} 500 - Unexpected error
 */
router.patch('/user/:id', userController.updateUser);

/**
 * DELETE /api/user/{id}
 * @summary Supprime un utilisateur
 * @tags user
 * @param {number} id.path - id de l'utilisateur
 * @return {"done"} 200 - notification
 * @return {object} 500 - Unexpected error
 */
router.delete('/user/:id', userController.deleteUser);

/**
 * POST /api/user/
 * @summary crée un utilisateur
 * @tags user
 * @param {json} - json deconfiguration de l'utilisateur
 * @return {user} 200 - un utilisateur
 * @return {object} 500 - Unexpected error
 */
router.post('/user', userController.createUser);

/**
 * POST /api/login
 * @summary Connecte un utilisateur
 * @tags user
 * @param {json} - fichier de paramètre de connection
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.post('/login', loginController.checkLogin);

/**
 * POST /api/category/{id}
 * @summary récupère les articles d'une catégorie
 * @tags category
 * @param {number} id.path - id de la catégorie
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.get('/category/:id', articleController.getAllArticles);

/**
 * POST /api/article/{id}
 * @summary Renvoie un article
 * @tags article
 * @param {number} id.path- id de l'article
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.get('/article/:id', articleController.getOneArticle);


router.delete('/article/:id', articleController.deleteOneArticle);


/**
 * POST /article/{id}
 * @summary modifie un article
 * @tags user
 * @param {json, number} id.path - fichier de paramètre de connection
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.patch('/article/:id', articleController.updateOneArticle)


/**
 * POST /article
 * @summary Crée un article
 * @tags article
 * @param {json} - fichier de paramètre de connection
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.post('/article', articleController.addOneArticle);

/**
 * GET /api/categories
 * @summary liste toutes les catégories 
 * @tags category
 * @param {json} - fichier de paramètre de connection
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.get('/categories', categoryController.getCategories);

router.get('/user/:id/program', programController.getUserProgram);

router.post('/article/:id/program', programController.postArticleProgram);


export default router;