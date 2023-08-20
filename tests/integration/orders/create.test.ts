import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';
import Jwt from '../../../src/auth/jwt';
import LoginService from '../../../src/services/Login';

chai.use(chaiHttp);

describe('2.0 - Test endpoint POST /orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('2.1 - Create a new order', async function() {
    const newOrder = OrderModel.build({
      id: 1,
      userId: 1,
    });

    const user = UserModel.build({
      id: 1,
      username: 'test',
      level: 2,
      password: 'test',
      vocation: 'test',
    });

    sinon.stub(OrderModel, 'create').resolves(newOrder);
    sinon.stub(ProductModel, 'update').resolves();
    sinon.stub(Jwt, 'verifyToken').resolves(true);
    sinon.stub(LoginService, 'getByIdUser').resolves(user);


    const response = await chai.request(app)
    .post('/orders')
    .set('Authorization', 'teste')
    .send({
      userId: 1,
      productIds: [1],
    });

    expect(response.body).to.be.deep.equal({ userId: 1, productIds: [1] });
    expect(response.status).to.be.equal(201);
  });

  it('2.2 - No create a new order with invalid user', async function() {
    const newOrder = OrderModel.build({
      id: 1,
      userId: 1,
    });

    sinon.stub(OrderModel, 'create').resolves(newOrder);
    sinon.stub(ProductModel, 'update').resolves();

    const response = await chai.request(app)
    .post('/orders')
    .send({
      userId: 1,
      productIds: [1],
    });

    expect(response.status).to.be.equal(401);
  });

  it('2.3 - No create a new order with invalid user', async function() {
    const newOrder = OrderModel.build({
      id: 1,
      userId: 1,
    });

    sinon.stub(OrderModel, 'create').resolves(newOrder);
    sinon.stub(ProductModel, 'update').resolves();
    sinon.stub(Jwt, 'verifyToken').resolves(true);
    sinon.stub(LoginService, 'getByIdUser').resolves(null);


    const response = await chai.request(app)
    .post('/orders')
    .set('Authorization', 'teste')
    .send({
      userId: 1,
      productIds: [1],
    });

    expect(response.status).to.be.equal(404);
  });
});
