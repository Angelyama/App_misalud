"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medicacion.belongsTo(models.Usuario, { foreignKey: "usuario_id" });
    }
  }
  Medicacion.init(
    {
      usuario_id: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      dosis: DataTypes.STRING,
      hora: DataTypes.DATE,
      fecha_registro: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Medicacion",
    }
  );
  return Medicacion;
};
