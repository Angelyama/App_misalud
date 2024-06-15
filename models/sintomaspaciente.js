'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SintomasPaciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SintomasPaciente.init({
    paciente_id: DataTypes.INTEGER,
    fecha_hora: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    intensidad: DataTypes.STRING,
    duracion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SintomasPaciente',
  });
  return SintomasPaciente;
};