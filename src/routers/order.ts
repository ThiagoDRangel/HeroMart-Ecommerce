import { Router } from 'express';
import OrderController from '../controllers/Order';
import { orderValidation, tokenValidation } from '../middlewares/tokenValidation';

const orderRouter = Router();

orderRouter.get('/', OrderController.getAllOrder);
orderRouter.post('/', tokenValidation, orderValidation, OrderController.createNewOrder);

export default orderRouter;