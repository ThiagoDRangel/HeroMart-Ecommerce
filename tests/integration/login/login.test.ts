import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';
import bcrypt from 'bcryptjs';

chai.use(chaiHttp);

describe('1.0 - Test endpoint POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('1.1 - Return 200 if login is successful', async function () {
    const user = UserModel.build({
      id: 1,
      username: 'test',
      password: bcrypt.hashSync('test'),
      level: 1,
      vocation: 'test',
    });

    sinon.stub(UserModel, 'findOne').resolves(user);

    const response = await chai.request(app).post('/login').send({ username: 'test', password: 'test' });

    expect(response.status).to.be.equal(200);
  });

  it('1.2 - Return 401 if username is invalid', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const response = await chai.request(app).post('/login').send({ username: 'test', password: 'test' });

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('1.3 - Return 401 if password is invalid', async function () {
    const user = UserModel.build({
      id: 1,
      username: 'test',
      password: bcrypt.hashSync('test'),
      level: 1,
      vocation: 'test',
    });

    sinon.stub(UserModel, 'findOne').resolves(user);

    const response = await chai.request(app).post('/login').send({ username: 'test', password: 'invalid' });

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('1.4 - Return 400 if username not found', async function () {
    const user = UserModel.build({
      id: 1,
      username: 'test',
      password: bcrypt.hashSync('test'),
      level: 1,
      vocation: 'test',
    });

    sinon.stub(UserModel, 'findOne').resolves(user);

    const response = await chai.request(app).post('/login').send({ password: 'test' });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required'});
  });
});
