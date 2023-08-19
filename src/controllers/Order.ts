import { Response, Request } from 'express';
import OrderService from '../services/Order';

class OrderController {
  static async getAllOrder(req: Request, res: Response): Promise<Response> {
    const orders = await OrderService.getAllOrder();
    return res.status(200).json(orders);
  }
}

export default OrderController;