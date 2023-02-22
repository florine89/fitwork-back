import Router from 'express';
import loginController from './controllers/loginController.js';
import userController from './controllers/userController.js';

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
router.post('/user', userController.createUser);

router.post('/login', loginController.checkLogin);

export default router;