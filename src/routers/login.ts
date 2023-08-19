import { Router } from 'express';
import LoginController from '../controllers/Login';

const loginRouter = Router();

loginRouter.post('/', LoginController.login);

export default loginRouter;