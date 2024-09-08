'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class temporarydata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  temporarydata.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'temporarydata',
  });
  return temporarydata;
};