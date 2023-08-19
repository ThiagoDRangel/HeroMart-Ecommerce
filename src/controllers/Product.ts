import { Request, Response } from 'express';
import ProductService from '../services/Product';

class ProductController {
  static async getAllProducts(req: Request, res: Response): Promise<Response> {
    const products = await ProductService.getAllProducts();
    return res.status(200).json(products);
  }

  static async createProduct(req: Request, res: Response): Promise<Response> {
    const newProduct = await ProductService.createProduct(req.body);
    return res.status(201).json(newProduct);
  }
}

export default ProductController;