import { Router } from 'express';
import LoginController from '../controllers/Login';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/', loginValidation, LoginController.login);

export default loginRouter;