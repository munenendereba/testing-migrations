'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class county extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  county.init({
    county: DataTypes.STRING,
    region: DataTypes.STRING,
    headquarters: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'county',
  });
  return county;
};