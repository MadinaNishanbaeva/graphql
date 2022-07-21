import { Widgets } from './dbConnectors';

const resolvers = {
  getProducts: ({ id }) => {
    return new Promise((resolve) => {
      Widgets.findById({ _id: id }, (err, product) => {
        if (err) reject(err);
        else resolve(product);
      })
    });
  },
  createProduct: ({input}) => {
    // let id = require('crypto').randomBytes(10).toString('hex');
    // productDataBase[id] = input;
    // return new Product(id, input);
  }
};

export default resolvers;
