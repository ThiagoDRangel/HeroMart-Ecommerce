# Welcome to HeroMart Ecommerce!

## Best price in your adventure

### Dependencies
```bash
    "bcryptjs": "2.4.3",
    "express": "4.17.1",
    "express-async-errors": "3.1.1",
    "joi": "17.6.0",
    "jsonwebtoken": "9.0.0",
    "mysql2": "2.3.0",
    "sequelize": "6.25.5",
    "sequelize-cli": "6.4.1",
    "sinon-chai": "3.7.0"
```
>Docker

- Start Containers Dockers
```bash
docker-compose up -d --build
```
- Login in API container
```bash
docker exec -it trybesmith_api bash
```
- Install dependencies
```bash
npm install
```
- Start server
```bash
npm run dev
```