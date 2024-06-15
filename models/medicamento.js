"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medicamento.hasMany(models.AdministracionMedicamentos, {
        foreignKey: "medicamento_id",
      });
      Medicamento.hasMany(models.NotificacionMedicamentos, {
        foreignKey: "medicamento_id",
      });
    }
  }
  Medicamento.init(
    {
      nombre: DataTypes.STRING,
      dosis: DataTypes.STRING,
      frecuencia: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Medicamento",
    }
  );
  return Medicamento;
};
