import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('3.0 - Test endpoint GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('3.1 - Return all orders registered', async function () {
    const orders = OrderModel.build({
      id: 1,
      userId: 1,
      productIds: [1],
    });

    const products = ProductModel.build({
      id: 1,
      name: 'Product 1',
      price: '10.00',
      orderId: 1,
    });

    sinon.stub(ProductModel, 'findAll').resolves([products]);
    sinon.stub(OrderModel, 'findAll').resolves([orders]);

    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal([{
      id: 1,
      userId: 1,
      productIds: [1],
    }]);
  });
});
