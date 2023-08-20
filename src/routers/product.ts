import { Router } from 'express';
import productValidation from '../middlewares/productValidation';
import ProductController from '../controllers/Product';

const productRouter = Router();

productRouter.get('/', ProductController.getAllProducts);
productRouter.post('/', productValidation, ProductController.createProduct);

export default productRouter;