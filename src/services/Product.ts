import { Model } from 'sequelize';
import { Product } from '../types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

class ProductService {
  static async getAllProducts(): Promise<Model<Product, ProductInputtableTypes>[]> {
    const allProducts = await ProductModel.findAll();
    return allProducts;
  }

  static async createProduct(
    product: ProductInputtableTypes,
  ): Promise<Model<Product, ProductInputtableTypes>> {
    const newProduct = await ProductModel.create(product);
    return newProduct;
  }

  static async updateProduct(data: Product): Promise<[affectedCount: number]> {
    const productUpdated = await ProductModel.update(data, { where: { id: data.id } });
    return productUpdated;
  }

}

export default ProductService;