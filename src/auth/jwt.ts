import Jwt from 'jsonwebtoken';

const secret = 'password';

const CONFIG: Jwt.SignOptions = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const createToken = (payload: Jwt.JwtPayload): string => {
  const token = Jwt.sign({ data: payload }, secret, CONFIG);
  return token;
};

const verifyToken = (token: string): string | Jwt.JwtPayload => {
  const decoded = Jwt.verify(token, secret, CONFIG);
  return decoded;
};

export default { createToken, verifyToken };