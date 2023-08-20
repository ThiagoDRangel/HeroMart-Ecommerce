import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('4.0 - Test endpoint POST /products', function () { 
  beforeEach(function () { sinon.restore(); });


  it('4.1 - Return 201 if product is registered success', async function () {
    const newProduct = ProductModel.build({
      id: 1,
      name: 'Product 1',
      price: '10.00',
      orderId: 1,
    });

    sinon.stub(ProductModel, 'create').resolves(newProduct);

    const response = await chai.request(app).post('/products').send({
      name: 'Product 1',
      price: '10.00',
      orderId: 1,
    });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(newProduct.dataValues);
  });
});
