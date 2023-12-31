import express, { Application } from 'express';
import productRouter from './routers/product';
import loginRouter from './routers/login';
import orderRouter from './routers/order';

class App {
  public readonly app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/products', productRouter);
    this.app.use('/orders', orderRouter)
    this.app.use('/login', loginRouter);
  }

}

export default new App().app;
