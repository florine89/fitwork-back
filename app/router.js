import Router from 'express';
import loginController from './controllers/loginController.js';
import userController from './controllers/userController.js';
import articleController from './controllers/articleController.js';
import categoryController from './controllers/categoryController.js';
import programController from './controllers/programController.js';
import labelController from './controllers/labelController.js';
import favoriteController from './controllers/favoriteController.js';
import service from './service/security.js'
import security from './service/security.js';

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
router.get('/category/:id', articleController.getArticlesByCategory);

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

/**
 * GET /user/{id}/program
 * @summary liste les articles du programme d'un utilisateur 
 * @tags program
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */

router.get('/user/:id/program',/* security.checkToken,*/ programController.getUserProgram);


/**
 * Post /article/{id}/program
 * @summary ajoute un article au programme d'un utilisateur 
 * @tags program
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.post('/article/:id/program', programController.postArticleProgram);

/**
 * DELETE /article/{id}/program
 * @summary supprime un article du programme d'un utilisateur  
 * @tags program
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.delete('/program/:program_id', programController.deleteArticleProgram);

router.get('/labels', labelController.getAllLabels);

router.get('/labels/:id/articles', labelController.getAllArticlesByLabels);

/**
 * GET /user/{id}/favorite
 * @summary liste les articles des favoris d'un utilisateur
 * @tags program
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.get('/user/:id/favorite', favoriteController.getUserFavorite);

/**
 * Post /article/{id}/favorite
 * @summary ajoute un article des favoris d'un utilisateur  
 * @tags program
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.post('/article/:id/favorite', favoriteController.postArticleFavorite);

/**
 * DELETE /article/{id}/favorite
 * @summary supprime un article des favoris d'un utilisateur  
 * @tags program
 * @return {json} 200 - fichier de retour
 * @return {object} 500 - Unexpected error
 */
router.delete('/favorite/:favorite_id', favoriteController.deleteArticleFavorite);

router.get('/articles', articleController.getAllArticles);
router.get('/user/:id/articles', userController.getAllArticles);

export default router;
