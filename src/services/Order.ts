import { Order } from '../types/Order';
import OrderModel, { 
  OrderInputtableTypes, 
  OrderSequelizeModel, 
} from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import ProductService from './Product';

class OrderService {
  static async getAllOrder(): Promise<Order[]> {
    const [products, orders] = await Promise.all([ProductModel.findAll(), OrderModel.findAll()]);
  
    const allOrders: Order[] = orders.map(({ dataValues: { id, userId } }) => {
      const productIds = products
        .filter(({ dataValues: { orderId } }) => orderId === id)
        .map(({ dataValues }) => dataValues.id);
      
      return {
        id,
        userId,
        productIds,
      };
    });
    return allOrders;
  }

  static async createNewOrder(order: OrderInputtableTypes): Promise<OrderSequelizeModel> {
    const { productIds, ...newOrder } = order;
  
    const createdOrder = await OrderModel.create(newOrder);
  
    const products = await ProductService.getAllProducts();
  
    const updateProducts = products
      .filter(({ dataValues: { id } }) => productIds?.includes(id))
      .map(({ dataValues }) => dataValues)
      .map((p) => ProductService.updateProduct({ ...p, orderId: createdOrder.dataValues.id }));
  
    await Promise.all(updateProducts);
  
    return createdOrder;
  }
}

export default OrderService;