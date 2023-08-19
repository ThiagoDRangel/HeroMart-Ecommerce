import { Response, Request } from 'express';
import OrderService from '../services/Order';
import LoginService from '../services/Login';

class OrderController {
  static async getAllOrder(req: Request, res: Response): Promise<Response> {
    const orders = await OrderService.getAllOrder();
    return res.status(200).json(orders);
  }

  static async createNewOrder(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const userById = await LoginService.getByIdUser(body.userId);

    if (!userById) return res.status(404).json({ message: '"userId" not found' });

    await OrderService.createNewOrder(body);
    return res.status(201).json(body);
  }
}

export default OrderController;