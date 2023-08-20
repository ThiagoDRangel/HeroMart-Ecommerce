import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Mjolnir',
        price: '100,000 Asgardian gold coins',
        order_id: 1
      },
      {
        name: 'Lasso of Truth',
        price: '5 Amazonian diamonds',
        order_id: 2
      },
      {
        name: 'Wand of Watoomb',
        price: '3 mystical relics',
        order_id: 3
      },
      {
        name: 'Cosmic Cube',
        price: 'Infinity gems',
        order_id: 4
      },
      {
        name: 'Casket of Ancient Winters',
        price: '7 ice shards',
        order_id: 5
      },
      {
        name: 'Soulsword',
        price: '1,000 souls',
        order_id: 6
      },
      {
        name: 'Cloak of Levitation',
        price: '2 enchanted fabrics',
        order_id: 7
      },
      {
        name: 'Green Lantern Ring',
        price: 'Willpower beyond measure',
        order_id: 8
      },
      {
        name: 'Eye of Agamotto',
        price: '5 ancient scrolls',
        order_id: 9
      },
      {
        name: 'Bat-Signal',
        price: 'A commissioner\'s trust',
        order_id: 10
      }
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('products', {});
  }
};
