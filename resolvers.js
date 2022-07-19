class Product {
  constructor(id, { name, description, price, soldout, inventory, stores }) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.soldout = soldout,
    this.stores = stores,
    this.inventory = inventory
  }
}

const productDataBase = {};

const resolvers = {
  getProducts: ({ id }) => {
    return new Product(id, productDataBase[id]);
  },
  createProduct: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    productDataBase[id] = input;
    return new Product(id, input);
  }
};

export default resolvers;
