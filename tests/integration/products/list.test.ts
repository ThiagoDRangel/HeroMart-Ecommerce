import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('5.0 - Test endpoint GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('5.1 - should return 200 when products are found', async function () {
    const products = ProductModel.build({
        id: 2,
        name: 'Product 2',
        price: '20.00',
        orderId: 2,
      });

      sinon.stub(ProductModel, 'findAll').resolves([products]);

      const response = await chai.request(app).get('/products');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal([products.dataValues]);
  });
});
