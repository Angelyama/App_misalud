"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recordatorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recordatorio.belongsTo(models.Usuario, { foreignKey: "usuario_id" });
    }
  }
  Recordatorio.init(
    {
      usuario_id: DataTypes.INTEGER,
      tipo_recordatorio: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      hora: DataTypes.DATE,
      activo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Recordatorio",
    }
  );
  return Recordatorio;
};
