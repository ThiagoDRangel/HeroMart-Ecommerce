import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

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
}

export default OrderService;