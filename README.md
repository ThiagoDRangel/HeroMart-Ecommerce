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
- Use sequelize/database in Container
```bash
npm run db:reset
```
- Start server
```bash
npm run dev
```
> Route Products </br>

- Return All products `GET localhost:3019/products` </br>
![Alt text](/images/image.png)

- Create a new product `POST localhost:3019/products` </br>
![Alt text](/images/image-1.png)

- Login User `POST localhost:3019/products` </br>
 ![Alt text](/images/image-2.png)

 - Return All Orders `GET localhost:3019/orders` </br>
![Alt text](/images/image-4.png)

- Create a new Order `POST localhost:3019/orders` </br>
![Alt text](/images/image-5.png)

- Execute tests
```bash
npm run test:local
```