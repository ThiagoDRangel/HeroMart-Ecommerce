import { Router } from 'express';
import ProductController from '../controllers/Product';

const productRouter = Router();

productRouter.get('/', ProductController.getAllProducts);
productRouter.post('/', ProductController.createProduct);

export default productRouter;