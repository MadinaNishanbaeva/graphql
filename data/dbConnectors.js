import mongoose from 'mongoose';
import { sequelize, DataTypes, Sequelize } from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets', {
  useNewUrlParser: true
});

const widgetSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  soldout: {
    type: String
  },
  stores: {
    type: Array
  },
  inventory: {
    type: String
  },
});

const Widgets = mongoose.model('widgets', widgetSchema);

const sequelize = new Sequelize('sqlite::memory:');

const Categories = sequelize.define('categories', {
  category: DataTypes.STRING,
  description: DataTypes.STRING
});

Categories.sync({ force: true }).then(() => {
  _.times(5, (i) => {
    Categories.create({
      category: casual.word,
      description: casual.sentences,
    });
  });
});

export { Widgets, Categories };
